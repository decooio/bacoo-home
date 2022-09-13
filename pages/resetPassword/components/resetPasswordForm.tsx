import styled from "styled-components";
import React, { createRef, useContext, useState } from "react";
import { Form, FormInstance,  message, Modal } from "antd";
import Button from "../../../components/common/Button";
import {
  BtnBox,
  CountdownBtn,
  VerifyBtn,
  verifyCodeImgStyle,
} from "../../register/components/registerForm";
import {
  FORGET_PASSWORD_API,
  SEMDSMS_API,
  VERIFY_CODE_API,
} from "@request/apis";
import MyInput from "@components/common/MyInput";
import {
  codeVerifyF,
  mobileVerifyF,
  passwordVerifyF,
} from "@src/index";
import { Context } from "@components/Context/Context";
export const BetweenFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormBox = styled.div`
  width: 100%;
`;
const ResetPasswordForm = function () {
  const { dispatch } = useContext(Context) as any;

  const [mobile, setMobile] = useState("");
  const [smsCode, setsmsCode] = useState("");
  const [password, setPassword] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verifyCodeImg, setVerifyCodeImg] = useState("");
  const [inputVerifyCodeImg, setInputVerifyCodeImg] = useState("");
  const [countdownNum, setCountdownNum] = useState(60);

  const [mobileVerify, setMobileVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [codeVerify, setCodeVerify] = useState(false);
  const [codeError, setCodeError] = useState("");

  const formRef = createRef<FormInstance>();

  const verify = () => {
    (formRef.current as any).validateFields(["phone"]).then(async () => {
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
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const resetPassword = async () => {
    (formRef.current as any)
      .validateFields(["phone", "code", "password"])
      .then(async () => {
        try {
          dispatch({
            type: "UPDATE_LOADING",
            payload: true,
          });
          await FORGET_PASSWORD_API({
            password,
            mobile,
            smsCode,
          });
        } catch (e) {
          console.log(e);
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
            placeholder="手机号"
            setValue={(value) => {
              setMobile(value);
              setMobileVerify(mobileVerifyF(value));
            }}
          />
        </Form.Item>
        <Form.Item
          label=""
          name="code"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <BetweenFlexBox>
            <MyInput
              placeholder="验证码"
              style={{
                width: "280px",
                height: "50px",
                background: "#F8F8F8",
                border: " 1px solid #DDDDDD",
                borderRadius: "8px",
              }}
              setValue={(value) => {
                setsmsCode(value);
                setCodeVerify(codeVerifyF(value));
              }}
            />

            {countdownNum < 60 ? (
              <CountdownBtn style={{ width: "148px" }}>
                {countdownNum}s
              </CountdownBtn>
            ) : (
              <VerifyBtn
                onClick={() => {
                  if (mobileVerify) {
                    verify();
                  }
                }}
                style={
                  mobileVerify
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

        <Form.Item wrapperCol={{ span: 32 }}>
          {mobileVerify && passwordVerify && codeVerify ? (
            <Button type="button" onClick={() => resetPassword()} size="large">
              重置密码
            </Button>
          ) : (
            <Button
              type="button"
              size="large"
              style={{ background: "#CCCCCC" }}
            >
              重置密码
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
export default ResetPasswordForm;
