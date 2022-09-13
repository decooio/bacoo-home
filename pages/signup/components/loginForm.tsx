import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Form } from "antd";
import Button from "../../../components/common/Button";
import { LOGIN_API } from "@request/apis";
import {  setLoc, usernameVerifyF } from "@src/index";
import router from "next/router";
import { Context } from "@components/Context/Context";
import { eloginStatus } from "@components/Context/types";
import MyInput from "@components/common/MyInput";
export const LoginFormBox = styled.div`
  width: 100%;
`;
const LoginForm = function () {
  const { dispatch } = useContext(Context) as any;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameVerify, setUsernameVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);

  const login = async () => {
    try {
      dispatch({
        type: "UPDATE_LOADING",
        payload: true,
      });
      const res = await LOGIN_API({
        username,
        password,
      });
      const { signature, uuid } = res.data;
      const token = `Bearer ${signature}`;
      setLoc("token", token);
      setLoc("uuid", uuid);
      dispatch({
        type: "UPDATE_UUID",
        payload: uuid,
      });
      dispatch({
        type: "UPDATE_LOGIN_STATUS",
        payload: eloginStatus.login,
      });
      dispatch({
        type: "UPDATE_USER_NAME",
        payload: username,
      });
      setLoc("userName", username);
      router.replace("/panel/fileManager");
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };
  return (
    <LoginFormBox>
      <Form name="loginForm">
        <Form.Item
          label=""
          name="username"
          rules={[{ required: true, message: "请输入用户名或手机或者邮箱号" }]}
        >
          <MyInput
            setValue={(value) => {
              setUsername(value);
              setUsernameVerify(usernameVerifyF(value));
            }}
            placeholder="用户名、手机、邮箱号"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
           
          ]}
        >
          <MyInput
            setValue={(value) => {
              setPassword(value);
              setPasswordVerify(usernameVerifyF(value));
            }}
            placeholder="密码"
            type="password"
            maxLength={16}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 32 }}>
          {usernameVerify && passwordVerify ? (
            <Button type="button" onClick={() => login()} size="large">
              登录
            </Button>
          ) : (
            <Button
              type="button"
              size="large"
              style={{ background: "#CCCCCC" }}
            >
              登录
            </Button>
          )}
        </Form.Item>
      </Form>
    </LoginFormBox>
  );
};
export default LoginForm;
