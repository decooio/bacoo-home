
import styled from "styled-components";
import { oemConfig } from "@src/helper/const";
import router from "next/router";
import LoginForm from "./components/loginForm";
import React from "react";

export const FormWrapper = styled.div`
  @media (min-width: 768px) {
    width: 457px;
  }
`;
export const Logo = styled.embed`
  width: 165px;
  //height: 55px;
  margin-bottom: 63px;
  @media (max-height: 650px) {
    margin-bottom: 20px;
  }
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
        <Logo src={oemConfig.logoDark} />
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
