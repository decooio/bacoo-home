import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Form, Input } from "antd";
import Button from "../../../components/common/Button";
import { LOGIN_API } from "@request/apis";
import { setLoc } from "@src/index";
import router from "next/router";
import { Context } from "@components/Context/Context";
import { eloginStatus } from "@components/Context/types";
export const LoginFormBox = styled.div`
  width: 100%;
`;
const LoginForm = function () {
  const { dispatch } = useContext(Context) as any;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      router.push("/panel/fileManager");
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
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            onInput={(e) => setUsername((e.target as any).value)}
            style={{ height: "50px" }}
            placeholder="用户名"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password
            onInput={(e) => setPassword((e.target as any).value)}
            style={{ height: "50px" }}
            placeholder="密码"
            size="large"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 32 }}>
          <Button onClick={() => login()} size="large">
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginFormBox>
  );
};
export default LoginForm;
