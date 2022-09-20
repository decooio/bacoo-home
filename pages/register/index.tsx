import { FormWrapper } from "@pages/signup";
import React from "react";
import styled from "styled-components";
import { getLogoDark } from "../../src/helper/utils";
import RegisterForm from "./components/registerForm";

const Logo = styled.embed`
  width: 165px;
  //height: 55px;
  margin-bottom: 63px;
  @media (max-height: 650px) {
    display: none;
  }
`;
export default function Register() {
  return (
    <div className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <Logo src={getLogoDark()} />
        <RegisterForm />
      </FormWrapper>
    </div>
  );
}
