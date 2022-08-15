import styled from "styled-components";
import { COL, Row, SpaceH, SpaceW } from "./common/layouts";
import Button from "./common/Button";
import { usePlanDetails, useUser } from "../lib/useUser";
import React, { useState } from "react";
import { changePwd } from "../lib/http";
import { F_DAY, formatSize, formatTime, getMsg } from "../src/helper/utils";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Phone, useDevice } from "../src/assets/style";

const Grid = styled(Row)`
  //display: grid;
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
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 16px 24px 24px 24px;

  ${Phone} {
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
  flex: 1;

  ${Phone} {
    flex: unset;
    width: 100%;
    height: unset;
  }
`;
export default function Profile() {
  const { t } = useTranslation();
  const r = useRouter();
  const { isMobile } = useDevice();
  const { user } = useUser();
  const [oPwd, setOPwd] = useState("");
  const [nPwd, setNPwd] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const onClickSubmit = () => {
    changePwd(oPwd, nPwd)
      .then(() => {
        setNPwd("");
        setOPwd("");
        setInfo("Success");
      })
      .catch((e) => setInfo(getMsg(e)));
  };
  const { plan } = usePlanDetails(user);
  const planTitle = plan?.lastBillingPlanOrderId
    ? "Cloud Storage Premium"
    : "Cloud Storage Trail";
  const showGithubAccount = user && user.githubAccount;
  const space = isMobile ? "10px" : "24px";

  return (
    <Grid>
      {isMobile ? (
        <>
          <MCol style={{ flex: 1 }}>
            <Card>
              <Title children={t("Account Info")} />{" "}
              <SubText children={user?.email} />
            </Card>
            <SpaceH height={space} />
            <Card>
              <Title children={t(planTitle)} />
              {plan && (
                <>
                  <SpaceH />
                  <SubText
                    children={`${t("Upper Limit Usage")}: ${formatSize(
                      plan.maxSize
                    )}`}
                  />
                  <SubText
                    children={`${t("Current Usage")}: ${formatSize(
                      plan.usedSize
                    )}`}
                  />
                  <SubText
                    children={`${t("Expiration")}: ${formatTime(
                      plan.expireTime,
                      F_DAY
                    )}`}
                  />
                </>
              )}
            </Card>
            <SpaceH height={space} />
          </MCol>
          {!isMobile && <SpaceW width={space} />}
          <MCol>
            {user?.mobile && (
              <Card>
                <Title children={t("Phone Number Binding")} />
                <SpaceH height={showGithubAccount ? "12px" : "24px"} />
                <SubText>
                  {t("Your Binded Phone Number")}
                  {`：${user.mobile}`}
                </SubText>
                <Button
                  children={t("Change")}
                  style={{
                    width: 120,
                    marginTop: 16,
                    borderRadius: 4,
                    fontSize: 14,
                  }}
                  onClick={() => {
                    r.push("/bind_phone");
                  }}
                />
              </Card>
            )}
            <SpaceH height={space} />
            <Card
              onKeyPress={(e) => (e.code === "Enter" ? onClickSubmit() : 0)}>
              <Title children={t("Change Password")} />
              <InputPwd
                placeholder={t("Current password")}
                type={"password"}
                value={oPwd}
                onChange={(e) => setOPwd(e.target.value)}
              />
              <InputPwd
                placeholder={t("New password")}
                type={"password"}
                value={nPwd}
                onChange={(e) => setNPwd(e.target.value)}
              />
              {info && <Info children={info} success={info === "Success"} />}
              <Button
                children={t("Save")}
                style={{
                  width: 120,
                  marginTop: 16,
                  borderRadius: 4,
                  fontSize: 14,
                }}
                onClick={onClickSubmit}
              />
            </Card>
            <SpaceH height={space} />
          </MCol>
        </>
      ) : (
        <>
          <MCol style={{ flex: 1 }}>
            <Card>
              <Title children={t("Account Info")} />{" "}
              <SubText children={user?.email} />
            </Card>
            <SpaceH height={space} />
            <Card>
              <Title children={t(planTitle)} />
              {plan && (
                <>
                  <SpaceH />
                  <SubText
                    children={`${t("Upper Limit Usage")}: ${formatSize(
                      plan.maxSize
                    )}`}
                  />
                  <SubText
                    children={`${t("Current Usage")}: ${formatSize(
                      plan.usedSize
                    )}`}
                  />
                  <SubText
                    children={`${t("Expiration")}: ${formatTime(
                      plan.expireTime,
                      F_DAY
                    )}`}
                  />
                </>
              )}
            </Card>
            <SpaceH height={space} />
            <Card
              onKeyPress={(e) => (e.code === "Enter" ? onClickSubmit() : 0)}>
              <Title children={t("Change Password")} />
              <InputPwd
                placeholder={t("Current password")}
                type={"password"}
                value={oPwd}
                onChange={(e) => setOPwd(e.target.value)}
              />
              <InputPwd
                placeholder={t("New password")}
                type={"password"}
                value={nPwd}
                onChange={(e) => setNPwd(e.target.value)}
              />
              {info && <Info children={info} success={info === "Success"} />}
              <Button
                children={t("Save")}
                style={{
                  width: 120,
                  marginTop: 16,
                  borderRadius: 4,
                  fontSize: 14,
                }}
                onClick={onClickSubmit}
              />
            </Card>
            <SpaceH height={space} />
          </MCol>
          {!isMobile && <SpaceW width={space} />}
          <MCol>
            {user?.mobile && (
              <Card>
                <Title children={t("Phone Number Binding")} />
                <SpaceH height={showGithubAccount ? "12px" : "24px"} />
                <SubText>
                  {t("Your Binded Phone Number")}
                  {`：${user.mobile}`}
                </SubText>
                <Button
                  children={t("Change")}
                  style={{
                    width: 120,
                    marginTop: 16,
                    borderRadius: 4,
                    fontSize: 14,
                  }}
                  onClick={() => {
                    r.push("/bind_phone");
                  }}
                />
              </Card>
            )}
            <SpaceH height={space} />
          </MCol>
        </>
      )}
    </Grid>
  );
}
