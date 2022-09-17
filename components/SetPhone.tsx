import { FormWrapper } from "@pages/signup/";

import {
  CountdownBtn,
  BetweenFlexBox,
  VerifyBtn,
} from "@pages/register/components/registerForm";
import { SET_MOBILE_API, SET_MOBILE_SMS_API } from "@request/apis";
import { codeVerifyF, mobileVerifyF } from "@src/index";
import { Form, FormInstance } from "antd";
import message from "antd/lib/message";
import router from "next/router";
import React, { createRef, useContext, useState } from "react";
import Button from "./common/Button";
import MyInput from "./common/MyInput";
import { Context } from "./Context/Context";
import { LoginTitle } from "@pages/resetPassword";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
const Goback = styled.div`
  position: absolute;
  top: 84px;
  left: 36px;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
  display: flex;
  align-items: center;
  z-index: 99999;
  cursor: pointer;
`;
const SetPhone = () => {
  const { dispatch } = useContext(Context) as any;
  const [mobile, setMobile] = useState("");
  const [smsCode, setsmsCode] = useState("");
  const [countdownNum, setCountdownNum] = useState(0);
  const [mobileVerify, setMobileVerify] = useState(false);
  const [codeVerify, setcodeVerify] = useState(false);

  const formRef = createRef<FormInstance>();

  const verify = () => {
    (formRef.current as any).validateFields(["phone"]).then(async () => {
      sendSms();
    });
  };
  const sendSms = async () => {
    try {
      dispatch({
        type: "UPDATE_LOADING",
        payload: true,
      });
      await SET_MOBILE_SMS_API(mobile);
      message.success("验证码发送成功");
      let num = 60;
      const time = setInterval(() => {
        if (num == 0) {
          setCountdownNum(0);
          clearInterval(time);
        } else {
          setCountdownNum(num--);
        }
      }, 1000);
    } catch (error) {
      message.error(error);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const setPhone = async () => {
    (formRef.current as any)
      .validateFields(["user", "phone", "code", "password"])
      .then(async () => {
        try {
          dispatch({
            type: "UPDATE_LOADING",
            payload: true,
          });
          await SET_MOBILE_API({
            mobile,
            smsCode,
          });
          dispatch({
            type: "UPDATE_LOADING",
            payload: false,
          });
          router.replace("panel/profile");
        } catch (e) {
          message.error(e);
          dispatch({
            type: "UPDATE_LOADING",
            payload: false,
          });
        }
      });
  };

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Goback onClick={() => router.back()}>
        <IoChevronBack />
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          返回
        </span>
      </Goback>

      <div className="w-full h-full flex relative items-center justify-center">
        <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
          <LoginTitle>更改手机号</LoginTitle>
          <Form
            name="loginForm"
            ref={formRef}
            style={{
              width: "457px",
            }}
          >
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
              <MyInput
                setValue={(e) => {
                  setMobile(e);
                  setMobileVerify(mobileVerifyF(e));
                }}
                placeholder="手机号"
              />
            </Form.Item>
            <Form.Item
              label=""
              name="code"
              rules={[{ required: true, message: "请输入验证码" }]}
            >
              <BetweenFlexBox>
                <MyInput
                  setValue={(e) => {
                    setsmsCode(e);
                    setcodeVerify(codeVerifyF(e));
                  }}
                  width="280px"
                  placeholder="验证码"
                  size="large"
                />

                {countdownNum <= 60 && countdownNum!=0 ? (
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
                        : { width: "148px", background: "rgb(204, 204, 204)" }
                    }
                  >
                    发送验证码
                  </VerifyBtn>
                )}
              </BetweenFlexBox>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 32 }}>
              {mobileVerify && codeVerify ? (
                <Button onClick={() => setPhone()} size="large">
                  提交
                </Button>
              ) : (
                <Button
                  disabled
                  size="large"
                  style={{
                    background: "#CCCCCC",
                  }}
                >
                  提交
                </Button>
              )}
            </Form.Item>
          </Form>
        </FormWrapper>
      </div>
    </div>
  );
};

export default SetPhone;