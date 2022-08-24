import styled from "styled-components";
import React from "react";
import { Form, Input } from "antd";
import Button from "../../../components/common/Button";
export const LoginFormBox = styled.div`
  width: 100%;
`;
const LoginForm = function () {
  return (
    <LoginFormBox>
      <Form name="loginForm">
        <Form.Item
          label=""
          name="username"
          rules={[{ required: true, message: "请输入用户名或手机号" }]}
        >
          <Input
            style={{ height: "50px" }}
            placeholder="用户名或手机号"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password
            style={{ height: "50px" }}
            placeholder="密码"
            size="large"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 32 }}>
          <Button size="large">登录</Button>
        </Form.Item>
      </Form>
    </LoginFormBox>
  );
};
export default LoginForm;
