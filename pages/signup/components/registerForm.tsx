import styled from "styled-components";
import React, { createRef, useContext, useState } from "react";
import { Checkbox, Form, message, Modal } from "antd";
import Button from "../../../components/common/Button";
import { REGISTERED_API, SEMDSMS_API, VERIFY_CODE_API } from "@request/apis";
import type { FormInstance } from "antd/es/form";
import { eloginStatus } from "@components/Context/types";
import {
  codeVerifyF,
  mobileVerifyF,
  passwordVerifyF,
  setLoc,
  usernameVerifyF,
} from "@src/index";
import router from "next/router";
import { Context } from "@components/Context/Context";
import MyInput from "@components/common/MyInput";

export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
export const VerifyBtn = styled.div<IButtonProps>`
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
  background-color: #15c1ba;
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
export const ErrorBox = styled.div``;
export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
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

  const [agree, setAgree] = useState(false);
  const [usernameVerify, setUsernameVerify] = useState(false);
  const [mobileVerify, setMobileVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [codeVerify, setCodeVerify] = useState(false);
  const [codeError, setCodeError] = useState("");

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

      setCodeError("");
      setIsModalVisible(false);
    } catch (error: any) {
      if (error.data.message) {
        setCodeError(error.data.message as string);
      } else {
        setCodeError("未知错误 请稍后重试");
      }

      // setCodeError(error as string);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const register = async () => {
    (formRef.current as any)
      .validateFields(["user", "phone", "code", "password"])
      .then(async () => {
        try {
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
          setLoc("userName", username);
          router.replace("/panel/fileManager");
        } catch (err) {
          console.log(err);
        }
        dispatch({
          type: "UPDATE_LOADING",
          payload: false,
        });
      });
  };

  return (
    <LoginFormBox>
      <Form name="loginForm" ref={formRef}>
        <Form.Item
          name="user"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <MyInput
            setValue={(e) => {
              setUsername(e);
              setUsernameVerify(usernameVerifyF(e));
            }}
            placeholder="用户名"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "请输入手机号" },
            {
              pattern: /^1[3456789]\d{9}$/,
              message: "请输入正确的手机号",
            },
          ]}
        >
          <MyInput
            setValue={(value) => {
              setMobile(value);
              setMobileVerify(mobileVerifyF(value));
            }}
            placeholder="手机号"
          />
        </Form.Item>
        <Form.Item
          name="code"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <BetweenFlexBox>
            <MyInput
              setValue={(e) => {
                setsmsCode(e);
                setCodeVerify(codeVerifyF(e));
              }}
              style={{
                width: "280px",
                height: "50px",
                background: "#F8F8F8",
                border: " 1px solid #DDDDDD",
                borderRadius: "8px",
              }}
              placeholder="验证码"
            />

            {countdownNum < 60 ? (
              <CountdownBtn style={{ width: "148px" }}>
                {countdownNum}s
              </CountdownBtn>
            ) : (
              <VerifyBtn
                onClick={() => {
                  if (usernameVerify && mobileVerify) {
                    verify();
                  }
                }}
                style={
                  usernameVerify && mobileVerify
                    ? { width: "148px", background: "#2cc8c2" }
                    : {
                        width: "148px",
                        background: "rgb(204, 204, 204)",
                      }
                }
              >
                发送验证码
              </VerifyBtn>
            )}
          </BetweenFlexBox>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            {
              max: 16,
              message: "密码必须在6~16位之间",
            },
            {
              min: 6,
              message: "密码必须在6~16位之间",
            },
          ]}
        >
          <MyInput
            setValue={(e) => {
              setPassword(e);
              setPasswordVerify(passwordVerifyF(e));
            }}
            type="password"
            placeholder="密码"
            maxLength={16}
          />
        </Form.Item>
        <Form.Item name="agree">
          <Checkbox checked={agree} onChange={() => setAgree(!agree)}>
            我已同意{" "}
            <a
              style={astyle}
              href={"/termofuse"}
              target={"_blank"}
              rel="noreferrer"
            >
              《用户协议》
            </a>{" "}
            和{" "}
            <a
              style={astyle}
              target={"_blank"}
              href={"/privacy"}
              rel="noreferrer"
            >
              《隐私协议》
            </a>{" "}
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 32 }}>
          {usernameVerify &&
          mobileVerify &&
          passwordVerify &&
          codeVerify &&
          agree ? (
            <Button type="button" onClick={() => register()} size="large">
              注册
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
      <Modal
        title="请输入验证码"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        cancelText="取消"
        okText="确定"
        footer={null}
      >
        <div
          onClick={() => getVerifyCodeImg()}
          style={verifyCodeImgStyle}
          dangerouslySetInnerHTML={{ __html: verifyCodeImg }}
        />
        <Form>
          <Form.Item
            validateStatus={codeError ? "error" : "validating"}
            help={codeError}
          >
            <MyInput
              setValue={(e) => setInputVerifyCodeImg(e)}
              placeholder="请输入验证码"
            />
          </Form.Item>
        </Form>

        <BtnBox>
          <Button
            style={{
              width: "45%",
              height: "40px",
              background: "rgba(44, 200, 194, 0.06)",
              border: "1px solid #2CC8C2",
              color: "#2CC8C2",
            }}
            onClick={() => setIsModalVisible(false)}
          >
            取消
          </Button>
          <Button
            style={{
              width: "45%",
              height: "40px",
            }}
            onClick={() => sendSms()}
          >
            确定
          </Button>
        </BtnBox>
      </Modal>
    </LoginFormBox>
  );
};
export default RegisterForm;
