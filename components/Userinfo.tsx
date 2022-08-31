import react, { useContext, useEffect, useState } from "react";
import { Context } from "@components/Context/Context";
import styled, { css } from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import Button from "./common/Button";
import { useRouter } from "next/router";
import React from "react";
import { TipsWhite } from "./common/tips";
import { useUser } from "../lib/useUser";
import { Phone } from "../src/assets/style";
import { useTranslation } from "react-i18next";
import { eloginStatus, eloginType } from "@components/Context/types";

const Wrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Phone} {
    padding-right: 12px;
  }
`;
const DropDown = styled.div`
  position: relative;
`;

interface IDropDownBtn {
  show?: boolean;
}

const DropDownBtn = styled.div<IDropDownBtn>`
  display: inline-block;
  position: absolute;
  left: 25px;
  top: 40px;
  width: 78px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 36px;
  text-align: center;
  visibility: hidden;
  ${(props) =>
    props.show &&
    css`
      visibility: visible;
    `}
`;
const IconWrapper = styled.div<{ fold: boolean }>`
  display: inline-block;
  transition: all 0.2s cubic-bezier(0.09, 0.71, 1, 0.62);
  vertical-align: top;
  ${(p) => (p.fold ? "transform:rotate(-180deg);" : "")}
`;
const UserName = styled.div`
  display: inline-block;
  height: 100%;
  width: min-content;
  max-width: 80px;
  padding-left: 5px;
  padding-right: 8px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CButton = styled(Button)`
  ${Phone} {
    width: 62px;
    height: 28px;
    background: #2cc8c2;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const needLogin = [
  "/panel",
  "/panel/api",
  "/panel/fileManager",
  "/panel/profile",
  "/billing",
  "/bind_phone",
];

const needUnlogin = ["", "/", "/pricing", "/signup", "/login"];

const Userinfo: react.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context) as any;
  const { loginStatus, loginType, user } = state;
  const goLoginAndRegister = (type: eloginType) => {
    dispatch({
      type: "UPDATE_LOGIN_TYPE",
      payload: type,
    });
    if (router.pathname === "/login") {
      return;
    }
    router.push("/login");
  };
  return (
    <Wrapper>
      {loginStatus !== eloginStatus.login ? (
        <>
          {loginType === eloginType.login && router.pathname == "/login" ? (
            <CButton onClick={() => goLoginAndRegister(eloginType.register)}>
              注册
            </CButton>
          ) : (
            <CButton onClick={() => goLoginAndRegister(eloginType.login)}>
              登录
            </CButton>
          )}
        </>
      ) : (
        <>
          <DropDown>
            <div style={{ display: "inline-block", paddingTop: 8 }}>
              <TipsWhite
                title={"111"}
                autoAdjustOverflow={false}
                placement={"left"}
              >
                <UserName>{"111"}</UserName>
              </TipsWhite>
              <IconWrapper fold={false}>
                {" "}
                <FiChevronDown />
              </IconWrapper>
            </div>
            <DropDownBtn className="btn">退出登录</DropDownBtn>
          </DropDown>
        </>
      )}
    </Wrapper>
  );
};
export default Userinfo;
