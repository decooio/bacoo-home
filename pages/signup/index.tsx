import React from "react";

import styled from "styled-components";
import { getLogoDark } from "../../src/helper/utils";

import LoginForm from "./components/loginForm";
import router from "next/router";

export const FormWrapper = styled.div`
  @media (min-width: 768px) {
    width: 457px;
  }
`;
export const LogoBox = styled.div`
  width: 165px;
  margin-bottom: 63px;
  display: flex;
  align-items: center;
  transform: scale(2.0);
  justify-content: center;
  @media (max-height: 650px) {
    margin-bottom: 20px;
  }

`;
export const Logo = styled.img`
  width: 35px;
  margin-right: 10px;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const mlinksyle = {
  paddingLeft: 20,
};

export default function Loing() {
  return (
    <div className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <LogoBox>
          <Logo src={getLogoDark()} />
          <span>德坤云存储</span>
        </LogoBox>
        <LoginForm />

        <FlexBox>
          <span
            style={{
              fontSize: "14px",
            }}
          >
            忘记密码?
            <span
              style={mlinksyle}
              className="link"
              onClick={() => router.push("/resetPassword")}
            >
              重置密码
            </span>
          </span>
        </FlexBox>
      </FormWrapper>
    </div>
  );
}
