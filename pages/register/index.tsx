import { oemConfig } from "@src/helper/const";
import styled from "styled-components";
import RegisterForm from "./components/registerForm";
import React from "react";

const RegisterBox = styled.div`
  overflow-y: auto;
  padding-top: 88px;
`;
const Logo = styled.embed`
  width: 165px;

  margin-bottom: 63px;
  @media (max-height: 800px) {
    margin-bottom: 20px;
  }
  @media (max-height: 680px) {
    /* display: none; */
    margin-bottom: unset;
  }
`;
export const FormWrapper = styled.div`
  @media (min-width: 768px) {
    width: 457px;
  }
`;
const LogoBox = styled.div`
  width: 100%;
`;
export default function Register() {
  return (
    <RegisterBox className="w-full h-full flex relative flex-col items-center">
      <div className="flex-1"/>
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <LogoBox className="flex items-center justify-center">
          <Logo src={oemConfig.logoDark} />
        </LogoBox>
        <RegisterForm />
      </FormWrapper>
      <div className="flex-1"/>
    </RegisterBox>
  );
}
