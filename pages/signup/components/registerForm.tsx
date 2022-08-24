import styled from "styled-components";
import React from "react";
import { Checkbox, Form, Input } from "antd";
import Button from "../../../components/common/Button";
export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
const astyle = {
    color:"#2CC8C2"
}
const RegisterForm = function () {
  return (
    <LoginFormBox>
      <Form name="loginForm">
        <Form.Item
          label=""
          name="user"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input style={{ height: "50px" }} placeholder="用户名" size="large" />
        </Form.Item>

        <Form.Item
          label=""
          name="phone"
          rules={[
            { required: true, message: "请输入手机号" },
            {
              pattern: /^1[3456789]\d{9}$/,
              message: "请输入正确的手机号",
            },
          ]}
        >
          <Input style={{ height: "50px" }} placeholder="手机号" size="large" />
        </Form.Item>
        <Form.Item
          label=""
          name="code"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <BetweenFlexBox>
            <Input
              style={{ width: "280px", height: "50px" }}
              placeholder="验证码"
              size="large"
            />
            <Button style={{ width: "148px" }} size="large">
              发送验证码
            </Button>
          </BetweenFlexBox>
        </Form.Item>

        <Form.Item
          label=""
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            {
              pattern: /[a-z]/,
              message: "密码必须包含小写",
            },
          ]}
        >
          <Input.Password
            style={{ height: "50px" }}
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>
            我已同意{" "}
            <a style={astyle} href="">
              《用户协议》
            </a>{" "}
            和{" "}
            <a style={astyle} href="">
              {" "}
              《隐私协议》
            </a>{" "}
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 32 }}>
          <Button size="large">注册</Button>
        </Form.Item>
      </Form>
    </LoginFormBox>
  );
};
export default RegisterForm;
