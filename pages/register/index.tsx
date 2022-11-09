import React from "react";
import styled from "styled-components";
import { getLogoDark } from "../../src/helper/utils";
import RegisterForm from "./components/registerForm";
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
  width: 165px;
  margin-bottom: 63px;
  display: flex;
  align-items: center;
  transform: scale(2.0);
  justify-content: center;
  @media (max-height: 800px) {
    margin-bottom: 20px;
  }
  @media (max-height: 680px) {
    display: none;
  }
`;
export default function Register() {
  return (
    <RegisterBox className="w-full h-full flex relative flex-col items-center">
      <div className="flex-1"/>
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <LogoBox>
          <Logo src={getLogoDark()} />
          <span>德坤云存储</span>
        </LogoBox>
        <RegisterForm />
      </FormWrapper>
      <div className="flex-1"/>
    </RegisterBox>
  );
}
