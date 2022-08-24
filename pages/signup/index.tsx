import React, { useCallback, useContext, useEffect, useState } from "react";
import Button from "../../components/common/Button";
import styled, { css } from "styled-components";
import { getLogoDark, getMsg, validate } from "../../src/helper/utils";
import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";
import { Context } from "@components/Context/Context";
import { eloginType } from "@components/Context/types";
import { elementType } from "prop-types";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ResetPasswordForm from './components/resetPasswordForm'

export const FormWrapper = styled.div`
  @media (min-width: 768px) {
    width: 457px;
  }
`;
export const Logo = styled.embed`
  width: 165px;
  //height: 55px;
  margin-bottom: 63px;
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

export default function () {
  const router = useRouter();
  const [invalidMsg, setInvalidMsg] = useState<any>({
    phone: "",
    password: "",
    nickName: "",
  });
  const { state, dispatch } = useContext(Context) as any;
  const { loginType } = state;
  const setLoginType = (type: eloginType) => {
    dispatch({
      type: "UPDATE_LOGIN_TYPE",
      payload: type,
    });
  };

  return (
    <div className="w-full h-full flex relative items-center justify-center">
      <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
        <Logo src={getLogoDark()} />

        {loginType == eloginType.login && <LoginForm/>}
        {loginType == eloginType.register && <RegisterForm/>}
        {loginType == eloginType.resetPassword && <ResetPasswordForm/>}


        <FlexBox>
          <span className="text-14 md:text-16">
            {loginType === eloginType.login ? "忘记密码?" : "已有账号"}
            {loginType === eloginType.login ? (
              <span
                style={mlinksyle}
                className="link"
                onClick={() => setLoginType(eloginType.resetPassword)}
              >
                重置密码
              </span>
            ) : (
              <span
                style={mlinksyle}
                className="link"
                onClick={() => setLoginType(eloginType.login)}
              >
                前往登录
              </span>
            )}
          </span>
        </FlexBox>
      </FormWrapper>
    </div>
  );
}
