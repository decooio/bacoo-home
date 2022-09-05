import styled from "styled-components";
import { COL, Row, SpaceH, SpaceW } from "./common/layouts";
import Button from "./common/Button";
import { usePlanDetails, useUser } from "../lib/useUser";
import React, { useState, useEffect } from "react";
import { changePwd } from "../lib/http";
import { F_DAY, formatSize, formatTime, getMsg } from "../src/helper/utils";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Phone, useDevice } from "../src/assets/style";
import { CHANGE_PASSWORD_API, GET_USER_INFO_API } from "@request/apis";
import { getUserInfoRes } from "@request/types";
import { changeSize } from "@src/index";
import { message, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const LoadingBox = styled.div`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
  height: auto;
  width: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Phone} {
    height: 200px;
    width: 100%;
  }
`;
const Grid = styled(Row)`
  height: 100%;
  width: 100%;
  align-items: flex-start;
  padding: 24px 24px 24px 12px;
  background: #f8f8f8;

  ${Phone} {
    flex-direction: column;
    padding: unset;
    overflow: auto;
  }
`;

const Card = styled(COL)`
  align-items: flex-start;
  width: 32%;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 16px 24px 24px 24px;
  justify-content: space-between;

  ${Phone} {
    width: 100%;
    box-shadow: unset;
    border-radius: unset;
    padding: 18px 20px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  line-height: 33px;
  ${Phone} {
    font-size: 20px;
    line-height: 28px;
  }
`;
const SubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  margin-bottom: 8px;
`;

const InputPwd = styled.input`
  width: calc(100% - 32px);
  font-size: 14px;
  margin-top: 16px;
  border-radius: 4px;
  line-height: 44px;
  border: 1px solid #cccccc;
  padding: 0 16px;
  outline: unset;

  &::placeholder {
    margin-left: 16px;
    font-size: 14px;
    color: #cccccc;
    line-height: 20px;
  }

  &:focus {
    border: 1px solid #999999;
  }
`;

export const Info = styled.span<{ success: boolean }>`
  color: ${(p) => (p.success ? "#56CB8F" : "#F37565")};
  padding-top: 16px;
  font-size: 14px;
  ${Phone} {
    padding-left: 25px;
  }
`;
const MCol = styled(COL)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  ${Phone} {
    flex: unset;
    width: 100%;
    height: unset;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Tips = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #aaaaaa;
`;
export default function Profile() {
  const { isMobile } = useDevice();
  const space = isMobile ? "10px" : "24px";
  const [user, setUser] = useState<getUserInfoRes["data"]["info"]>();
  const [plan, setPlan] = useState<getUserInfoRes["data"]["plan"]>();
  const [oPwd, setOPwd] = useState("");
  const [nPwd, setNPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(true);

  const getInfo = async () => {
    try {
      const res = await GET_USER_INFO_API();
      console.log(res.data.info);
      setUser(res.data.info);
      setPlan(res.data.plan);
    } catch (e) {
      console.log(e);
    }
  };

  const changePassword = async () => {
    setLoading(true);
    try {
      const res = await CHANGE_PASSWORD_API({
        oldPassword: oPwd,
        newPassword: nPwd,
      });
      setInfo(res.message);
      message.success("修改成功");
    } catch (e: any) {
      setInfo(e.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <Grid>
      <div></div>

      <MCol style={{ flex: 1 }}>
        <Card>
          <div>
            <Title children={"用户信息"} />
            <SpaceH />
          </div>
          <div>
            <SubText children={`用户名：${user?.username}`} />
            <SubText children={`手机号：${user?.mobile}`} />
          </div>
          <Button
            children={"更改手机号"}
            style={{
              width: "100%",
              marginTop: 16,
              borderRadius: 4,
              fontSize: 14,
            }}
          />
        </Card>

        <Card>
          <div>
            <Title children={"百工链存试用计划"} />
            <SpaceH />
          </div>
          <div>
            <SubText
              children={`存储用量 已消耗/总用量上限：${changeSize(
                plan?.usedStorageSize
              )}/${changeSize(plan?.maxStorageSize)}:`}
            />
            <SubText
              children={`公共网关流量 已消耗/总用量上限：${changeSize(
                plan?.usedDownloadSize
              )}/${changeSize(plan?.maxDownloadSize)}`}
            />
            <SubText children={`到期时间：${plan?.storageExpireTime}`} />
          </div>

          <Button
            children={"了解更多存储计划"}
            style={{
              width: "100%",
              marginTop: 16,
              borderRadius: 4,
              fontSize: 14,
            }}
          />
        </Card>

        {loading ? (
          <LoadingBox>
            <Spin indicator={antIcon} />
          </LoadingBox>
        ) : (
          <Card onKeyPress={(e) => console.log(e)}>
            <Title children={"修改密码"} />
            <InputPwd
              placeholder={"当前密码"}
              type={"password"}
              value={oPwd}
              onChange={(e) => setOPwd(e.target.value)}
            />
            <InputPwd
              placeholder={"新密码"}
              type={"password"}
              value={nPwd}
              onChange={(e) => setNPwd(e.target.value)}
            />
            {info !== "success" && (
              <Info children={info} success={info === "success"} />
            )}
            <Button
              children={"保存"}
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: 4,
                fontSize: 14,
              }}
              onClick={() => changePassword()}
            />
          </Card>
        )}
      </MCol>

      <Modal title="我们希望了解您的使用意向" visible={modalOpen} footer={null}>
        <p>选择您偏好的存储用量</p>
        <p>选择您所使用的IPFS网关</p>
        <Tips>*公共网关为共享带宽网关，用户需根据所使用的上下行流量付费；专用网关可配置固定带宽，且专门为用户保留，速度与响应更有保证。</Tips>
        <p>您对于文件副本数的要求？</p>
      </Modal>
    </Grid>
  );
}
