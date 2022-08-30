import styled from "styled-components";
import React, { createRef, useState } from "react";
import { Checkbox, Form, Input, Modal } from "antd";
import Button from "../../../components/common/Button";
import { SEMDSMS_API, VERIFY_CODE_API } from "@request/apis";
import type { FormInstance } from "antd/es/form";
export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
const VerifyBtn = styled.div<IButtonProps>`
  background: #2cc8c2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 457px;
  font-size: 16px;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  max-width: 100%;
  &:hover {
    background-color: #15c1ba;
  }
`;
const verifyCodeImgStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};
interface IButtonProps {
  onClick?: () => void;
}
const astyle = {
  color: "#2CC8C2",
};
const RegisterForm = function () {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verifyCodeImg, setVerifyCodeImg] = useState("");
  const [inputVerifyCodeImg, setInputVerifyCodeImg] = useState("");
  const [mobile, setMobile] = useState("");
  const [setCookie, setSetCookie] = useState("setCookie");
  const formRef = createRef<FormInstance>();
  const verify = () => {
    // const res = await VERIFY_CODE_API()
    (formRef.current as any)
      .validateFields(["user", "phone"])
      .then(async (res: any) => {
        const verifyCodeImg = await VERIFY_CODE_API(mobile);
        console.log(verifyCodeImg);
        console.log(document.cookie);

        setVerifyCodeImg(verifyCodeImg.data);
        setIsModalVisible(true);
      });
  };

  const sendSms = async () => {
    const res = await SEMDSMS_API(
      {
        mobile: mobile,
        verifyCode: inputVerifyCodeImg,
      },
      
    );
    console.log(res);
  };

  return (
    <LoginFormBox>
      <Form name="loginForm" ref={formRef}>
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
          <Input
            onInput={(e) => {
              setMobile((e.target as any).value);
            }}
            style={{ height: "50px" }}
            placeholder="手机号"
            size="large"
          />
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
            <VerifyBtn
              onClick={() => {
                verify();
              }}
              style={{ width: "148px" }}
            >
              发送验证码
            </VerifyBtn>
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
        <Form.Item rules={[]}>
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
      <Modal
        title="请输入验证码"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => sendSms()}
        cancelText="取消"
        okText="确定"
      >
        <div
          style={verifyCodeImgStyle}
          dangerouslySetInnerHTML={{ __html: verifyCodeImg }}
        />
        <Input
          onInput={(e) => setInputVerifyCodeImg((e.target as any).value)}
          style={{ height: "50px" }}
          placeholder="请输入验证码"
        />
      </Modal>
    </LoginFormBox>
  );
};
export default RegisterForm;
