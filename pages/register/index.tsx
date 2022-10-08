import React from "react";
import styled from "styled-components";
import { getLogoDark } from "../../src/helper/utils";
import RegisterForm from "./components/registerForm";
const RegisterBox = styled.div`
  @media (max-height: 800px) {
    align-items: end;
  }
`;
const Logo = styled.embed`
  width: 35px;
  margin-right: 10px;
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
    <RegisterBox className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <LogoBox>
          <Logo src={getLogoDark()} />
          <span>德坤云存储</span>
        </LogoBox>
        <RegisterForm />
      </FormWrapper>
    </RegisterBox>
  );
}
