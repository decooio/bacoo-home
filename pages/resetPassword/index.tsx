import { FormWrapper } from "@pages/signup";
import React from "react";
import styled from "styled-components";

import ResetPasswordForm from "./components/resetPasswordForm";

export const LoginTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #333333;
  margin-bottom: 20px;
`;
export default function ResetPassword() {
  return (
    <div className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <LoginTitle>重置密码</LoginTitle>
        <ResetPasswordForm />
      </FormWrapper>
    </div>
  );
}
