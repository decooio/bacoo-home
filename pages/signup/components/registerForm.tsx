import styled from "styled-components";
import React, { createRef, useContext, useState } from "react";
import { Checkbox, Form, Input, message, Modal } from "antd";
import Button from "../../../components/common/Button";
import { REGISTERED_API, SEMDSMS_API, VERIFY_CODE_API } from "@request/apis";
import type { FormInstance } from "antd/es/form";
import { eloginStatus } from "@components/Context/types";
import { setLoc } from "@src/index";
import router from "next/router";
import { Context } from "@components/Context/Context";
export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
export const VerifyBtn = styled.div<IButtonProps>`
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
export const CountdownBtn = styled.div<IButtonProps>`
  background: #cccccc;
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
`;
export const verifyCodeImgStyle = {
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
  const { dispatch } = useContext(Context) as any;
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smsCode, setsmsCode] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verifyCodeImg, setVerifyCodeImg] = useState("");
  const [inputVerifyCodeImg, setInputVerifyCodeImg] = useState("");
  const [countdownNum, setCountdownNum] = useState(60);

  const formRef = createRef<FormInstance>();
  const verify = () => {
    (formRef.current as any)
      .validateFields(["user", "phone"])
      .then(async () => {
        getVerifyCodeImg();
        setIsModalVisible(true);
      });
  };

  const getVerifyCodeImg = async () => {
    const verifyCodeImg = await VERIFY_CODE_API(mobile);
    setVerifyCodeImg(verifyCodeImg);
  };

  const sendSms = async () => {
    try {
      dispatch({
        type: "UPDATE_LOADING",
        payload: true,
      });
      await SEMDSMS_API({
        mobile: mobile,
        verifyCode: inputVerifyCodeImg,
      });
      message.success("验证码发送成功");
      let num = 60;
      const time = setInterval(() => {
        if (num == 0) {
          setCountdownNum(60);
          clearInterval(time);
        } else {
          setCountdownNum(num--);
        }
      }, 1000);
    } catch (error) {
      message.error("验证码错误");
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
    setIsModalVisible(false);
  };

  const register = async () => {
    try {
      (formRef.current as any)
        .validateFields(["user", "phone", "code", "password"])
        .then(async () => {
          dispatch({
            type: "UPDATE_LOADING",
            payload: true,
          });
          const res = await REGISTERED_API({
            username,
            password,
            mobile,
            smsCode,
          });
          const token = `Bearer ${res.data.signature}`;
          setLoc("token", token);
          dispatch({
            type: "UPDATE_LOGIN_STATUS",
            payload: eloginStatus.login,
          });
          dispatch({
            type: "UPDATE_USER_NAME",
            payload: username,
          });
          setLoc('userName',username)
          router.push("/panel/fileManager");
        });
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
      <Form name="loginForm" ref={formRef}>
        <Form.Item
          label=""
          name="user"
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
              onInput={(e) => {
                setsmsCode((e.target as any).value);
              }}
              style={{ width: "280px", height: "50px" }}
              placeholder="验证码"
              size="large"
            />

            {countdownNum < 60 ? (
              <CountdownBtn style={{ width: "148px" }}>
                {countdownNum}
              </CountdownBtn>
            ) : (
              <VerifyBtn
                onClick={() => {
                  verify();
                }}
                style={{ width: "148px" }}
              >
                发送验证码
              </VerifyBtn>
            )}
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
            onInput={(e) => {
              setPassword((e.target as any).value);
            }}
            style={{ height: "50px" }}
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item name="agree">
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
          <Button onClick={() => register()} size="large">
            注册
          </Button>
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
          onClick={() => getVerifyCodeImg()}
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
