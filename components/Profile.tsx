import styled from "styled-components";
import { COL, Row, SpaceH } from "./common/layouts";
import Button from "./common/Button";
import React, { useState, useEffect, useContext } from "react";
import { Phone } from "../src/assets/style";
import {
  CHANGE_PASSWORD_API,
  GET_GATEWAY_LIST_API,
  GET_USER_INFO_API,
  POST_INTENTION_API,
} from "@request/apis";
import { getUserInfoRes } from "@request/types";
import { changeSize } from "@src/index";
import { message, Modal, Spin } from "antd";
import { Context } from "./Context/Context";
import SelectorBox from "./common/SelectorBox";
import TextArea from "antd/lib/input/TextArea";
import router from "next/router";
import { Tips } from "./common/tips";
import { HtmlReporter } from "./HelpAndReport";
import MyInput from "./common/MyInput";

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
  justify-content: start;

  ${Phone} {
    width: 100%;
    box-shadow: unset;
    border-radius: unset;
    padding: 18px 20px;
  }
  .contentBox {
    width: 100%;
    flex: 1;
    position: relative;
  }
  .errorText {
    position: absolute;
    bottom: -25px;
    left: 0;
    color:red
}
  }
`;

const Title = styled.div`
  font-size: 18px;
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


export const Minput = styled.input`
  width: 100%;
  font-size: 14px;
  margin-top: 16px;
  border-radius: 4px;
  line-height: 44px;
  border: 1px solid #cccccc;
  padding: 0 16px;

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
export const HeightBox = styled.div`
  height: 20px;
`;

const TipsText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #aaaaaa;
`;
export const ModalText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 31px;
  color: #000000;
`;
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const DetailsText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #666666;
`;
const MText = styled.div`
  width: min-content;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  margin-bottom: 8px;
`;
const MoadlTitle = styled.div`
  font-size: 18px;
`;
const SizeComparison = ({
  size,
  totalSize,
}: {
  size: number;
  totalSize: number;
}) => {
  return (
    <span>
      <span
        style={
          size > totalSize
            ? {
                color: "#EF4C56",
              }
            : {}
        }
      >
        {changeSize(size)}
      </span>
      /<span>{changeSize(totalSize)}</span>
    </span>
  );
};

const storageUsage = [
  {
    id: 0,
    text: "<10TB",
  },
  {
    id: 1,
    text: "100TB",
  },
  {
    id: 2,
    text: "1PB",
  },
];

const gatewayList = [
  {
    id: 0,
    text: "公共网关",
  },
  {
    id: 1,
    text: "专用网关",
  },
];

export default function Profile() {
  const { dispatch } = useContext(Context) as any;
  const [user, setUser] = useState<getUserInfoRes["data"]["info"]>();
  const [plan, setPlan] = useState<getUserInfoRes["data"]["plan"]>({
    downloadExpireTime: "",
    maxDownloadSize: 0,
    maxStorageSize: 0,
    orderType: 0,
    storageExpireTime: "",
    usedDownloadSize: 0,
    usedStorageSize: 0,
  });
  const [oPwd, setOPwd] = useState("");
  const [nPwd, setNPwd] = useState("");
  const [info, setInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [storageUsageId, setStorageUsageId] = useState(0);
  const [gatewayID, setGatewayID] = useState(0);
  const [requirement, setRequirement] = useState("");
  const [activeGateway, setActiveGateway] = useState<{
    host: string;
    nodeType: number;
    name: string;
  }>({
    host: "",
    nodeType: 0,
    name: "",
  });
  const [btnloading, setBtnloading] = useState(false);

  const postIntention = async () => {
    setBtnloading(true);
    try {
      await POST_INTENTION_API({
        storageType: storageUsageId,
        gatewayType: gatewayID,
        requirement,
      });
      setModalOpen(false);
      message.success("提交成功");
    } catch (e: any) {
      console.log(e);
    }
    setBtnloading(false);
    setStorageUsageId(0);
    setGatewayID(0);
    setRequirement("");
  };
  //获取节点列表
  const getGatewayList = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_GATEWAY_LIST_API();
      const data = res.data;
      const activeGateway = data.find((item) => item.nodeType == 1);
      activeGateway
        ? setActiveGateway(activeGateway)
        : setActiveGateway(data[0]);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const getInfo = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_USER_INFO_API();
      setUser(res.data.info);
      setPlan(res.data.plan);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const changePassword = async () => {
    try {
      dispatch({
        type: "UPDATE_LOADING",
        payload: true,
      });
      const res = await CHANGE_PASSWORD_API({
        oldPassword: oPwd,
        newPassword: nPwd,
      });
      setInfo(res.message);
      message.success("修改成功");
      dispatch({
        type: "UPDATE_LOADING",
        payload: false,
      });
    } catch (e: any) {
      setInfo(e.data.message);
      dispatch({
        type: "UPDATE_LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    if ((nPwd && nPwd.length < 4) || nPwd.length > 32) {
      setInfo("密码长度为6~16位");
      return;
    } else if (nPwd && oPwd && oPwd == nPwd && oPwd) {
      setInfo("新密码不能与旧密码一致");
      return;
    } else {
      setInfo("");
    }
  }, [nPwd]);
  return (
    <Grid>
      <div></div>

      <MCol style={{ flex: 1 }}>
        <Card>
          <div>
            <Title children={"账号信息"} />
            <SpaceH />
          </div>
          <div className="contentBox">
            <Tips title={user?.username}>
              <MText>{`用户名：${user?.username || "暂无信息"}`}</MText>
            </Tips>
            <SubText children={`手机号：${user?.mobile || "暂无信息"}`} />
            <SubText children={`邮箱：${user?.email || "暂无信息"}`} />
          </div>
          <Button
            children={"更改手机号"}
            style={{
              width: "100%",
              marginTop: 16,
              borderRadius: 8,
              fontSize: 16,
              height: 48,
            }}
            onClick={() => router.push("/setPhone")}
          />
        </Card>

        <Card>
          <div>
            <Title
              children={
                plan?.orderType == 0
                  ? "百工链存试用计划"
                  : "百工链存存储计划Pro"
              }
            />
            <SpaceH />
          </div>
          <div className="contentBox">
            <SubText>
              存储用量 已消耗/总用量上限：
              <SizeComparison
                size={plan.usedStorageSize}
                totalSize={plan.maxStorageSize}
              />
            </SubText>
            <SubText>
              公共网关流量 已消耗/总用量上限：
              <SizeComparison
                size={plan.usedDownloadSize}
                totalSize={plan.maxDownloadSize}
              />
            </SubText>
            <SubText>
              到期时间：
              {
                <span
                  style={
                    new Date() > new Date(plan?.storageExpireTime)
                      ? {
                          color: "#EF4C56",
                        }
                      : {}
                  }
                >
                  {plan?.storageExpireTime || "暂无信息"}
                </span>
              }
            </SubText>
          </div>

          {plan?.orderType == 0 && (
            <Button
              children={"了解更多存储计划"}
              style={{
                width: "100%",
                marginTop: 16,
                borderRadius: 8,
                fontSize: 16,
                height: 48,
              }}
              onClick={() => {
                setModalOpen(true);
              }}
            />
          )}
          {plan?.orderType == 1 && (
            <FlexBox>
              <Button
                children={"查看存储计划详情"}
                style={{
                  width: "48%",
                  marginTop: 16,
                  borderRadius: 8,
                  fontSize: 16,
                  height: 48,
                }}
                onClick={() => {
                  getGatewayList();
                  setDetailsModalOpen(true);
                }}
              />
              <Button
                children={"了解更多存储计划"}
                style={{
                  width: "48%",
                  marginTop: 16,
                  borderRadius: 8,
                  fontSize: 16,
                  height: 48,
                }}
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            </FlexBox>
          )}
        </Card>

        <Card onKeyPress={(e) => console.log(e)}>
          <Title children={"修改密码"} />
          <div className="contentBox">
            <div style={{ height: "10px" }}></div>
            <MyInput
              placeholder={"旧密码"}
              type={"password"}
              value={oPwd}
              setValue={(e) => setOPwd(e)}
            />
            <div style={{ height: "10px" }}></div>
            <MyInput
              placeholder={"新密码"}
              type={"password"}
              value={nPwd}
              setValue={(e) => {
                setNPwd(e);
              }}
            />
            <span className="errorText">{info == "success" ? "" : info}</span>
          </div>

          <Info success={true} />

          <Button
            children={"保存"}
            style={{
              width: "100%",
              marginTop: 16,
              borderRadius: 8,
              fontSize: 16,
              height: 48,
            }}
            onClick={() => {
              nPwd && oPwd && oPwd !== nPwd && changePassword();
            }}
          />
        </Card>
      </MCol>

      <Modal
        centered
        width={380}
        title="我们希望了解您的使用意向"
        visible={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <ModalText>选择您偏好的存储用量</ModalText>
        <SelectorBox
          list={storageUsage}
          activeKey={storageUsageId}
          onChange={(e: number) => setStorageUsageId(e)}
        ></SelectorBox>
        <HeightBox />

        <ModalText>选择您所使用的IPFS网关</ModalText>
        <SelectorBox
          list={gatewayList}
          activeKey={gatewayID}
          onChange={(e: number) => setGatewayID(e)}
        ></SelectorBox>

        <TipsText>
          *公共网关为共享带宽网关，用户需根据所使用的上下行流量付费；专用网关可配置固定带宽，且专门为用户保留，速度与响应更有保证。
        </TipsText>
        <HeightBox />

        <ModalText>您对于文件副本数的要求？</ModalText>
        <TextArea
          rows={4}
          value={requirement}
          onInput={(e) => {
            setRequirement((e.target as any).value);
          }}
        />
        <TipsText>*您可简单描述您对文件副本数量以及地域分布的需求。</TipsText>
        <HeightBox />

        {btnloading ? (
          <Spin>
            <Button
              style={{
                width: "100%",
              }}
            >
              点击提交您的存储使用意向
            </Button>
          </Spin>
        ) : (
          <Button
            style={{
              width: "100%",
            }}
            onClick={() => postIntention()}
          >
            点击提交您的存储使用意向
          </Button>
        )}

        <TipsText>*提交意向后，我们会及时通过邮件与您联系。</TipsText>
      </Modal>

      <Modal
        centered
        width={380}
        title={<MoadlTitle>存储计划详情</MoadlTitle>}
        visible={detailsModalOpen}
        footer={null}
        onCancel={() => setDetailsModalOpen(false)}
      >
        <HtmlReporter h="400px">
          <ModalText>存储计划名称</ModalText>
          <DetailsText>百工链存 - 存储计划Pro</DetailsText>
          <HeightBox />

          <ModalText>计划配置</ModalText>
          <DetailsText>
            存储用量上限：{changeSize(plan?.maxStorageSize)}
          </DetailsText>
          <DetailsText>公共IPFS网关：</DetailsText>
          <DetailsText>状态：可使用</DetailsText>
          <DetailsText>流量：{changeSize(plan?.maxDownloadSize)}</DetailsText>
          <DetailsText>
            专用IPFS网关：
            <span
              style={{
                color: "#2CC8C2",
              }}
            >
              {activeGateway.host || "暂无信息"}
            </span>
          </DetailsText>
          <DetailsText>状态：可使用</DetailsText>
          <DetailsText>固定配置带宽：上下行200Mbps</DetailsText>
          <HeightBox />

          <ModalText>用量统计</ModalText>
          <DetailsText>
            已消耗存储用量：{changeSize(plan?.usedStorageSize)}
          </DetailsText>
          <DetailsText>
            已消耗公共IPFS网关流量：{changeSize(plan?.usedDownloadSize)}
          </DetailsText>
          <DetailsText>到期时间：{plan?.storageExpireTime}</DetailsText>
        </HtmlReporter>
      </Modal>
    </Grid>
  );
}
