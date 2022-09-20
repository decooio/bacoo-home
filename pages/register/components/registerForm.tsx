import styled from "styled-components";
import React, { createRef, useContext, useState } from "react";
import { Checkbox, Form, message, Modal } from "antd";
import Button from "../../../components/common/Button";
import {
  GET_USER_INFO_API,
  REGISTERED_API,
  SEMDSMS_API,
  SEMD_MAILCODE_API,
  VERIFY_CODE_API,
} from "@request/apis";
import type { FormInstance } from "antd/es/form";
import { eloginStatus } from "@components/Context/types";
import {
  codeVerifyF,
  imgCodeVerifyF,
  mailVerifyF,
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
  @media (max-height: 800px) {
    transform: scale(0.9);
  }
`;
export const VerifyBtn = styled.div<IButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
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
  height: 44px;
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
  margin-top: 5px;
`;
interface IButtonProps {
  onClick?: () => void;
}
const astyle = {
  color: "#2CC8C2",
};
const RegisterForm = function () {
  const { dispatch } = useContext(Context) as any;
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [mailCode, setMailCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [smsCode, setsmsCode] = useState("");
  const [agree, setAgree] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verifyCodeImg, setVerifyCodeImg] = useState("");
  const [inputVerifyCodeImg, setInputVerifyCodeImg] = useState("");
  const [countdownNum, setCountdownNum] = useState(0);
  const [mailcountdownNum, setMailCountdownNum] = useState(0);

  const [usernameVerify, setUsernameVerify] = useState(false);
  const [mobileVerify, setMobileVerify] = useState(false);
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [codeVerify, setCodeVerify] = useState(false);
  const [mailVerify, setMailVerify] = useState(false);
  const [mailCodeVerify, setMailCodeVerify] = useState(false);
  const [inputVerifyCodeImgVerify, setInputVerifyCodeImgVerify] =
    useState(false);
  const [codeError, setCodeError] = useState("");

  const formRef = createRef<FormInstance>();
  // 获取手机验证码之前的验证
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
  //  发送短信
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
          setCountdownNum(0);
          clearInterval(time);
        } else {
          setCountdownNum(num--);
        }
      }, 1000);

      setCodeError("");
      setIsModalVisible(false);
      setInputVerifyCodeImg("");
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
  // 注册
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
            email: mail,
            emailCode: mailCode,
          });
          const token = `Bearer ${res.data.signature}`;
          setLoc("token", token);
          dispatch({
            type: "UPDATE_LOGIN_STATUS",
            payload: eloginStatus.login,
          });
          GET_USER_INFO_API().then((res) => {
            dispatch({
              type: "UPDATE_USER",
              payload: res.data.info,
            });
            dispatch({
              type: "UPDATE_PLAN",
              payload: res.data.plan,
            });
          });
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

  const sendEmailCode = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      await SEMD_MAILCODE_API(mail);
      message.success("验证码发送成功");
      let num = 60;
      const time = setInterval(() => {
        if (num == 0) {
          setMailCountdownNum(0);
          clearInterval(time);
        } else {
          setMailCountdownNum(num--);
        }
      }, 1000);
    } catch (error: any) {
      console.log(error);
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
          name="user"
          rules={[
            { required: true, message: "请输入用户名" },
            {
              min: 4,
              message: "请输入4至32位用户名",
            },
            {
              max:32,
              message: "请输入4至32位用户名",
            }
          ]}
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
          name="mail"
          rules={[
            { required: true, message: "请输入邮箱" },
            {
              pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
              message: "请输入正确的邮箱",
            },
          ]}
        >
          <MyInput
            setValue={(value) => {
              setMail(value);
              setMailVerify(mailVerifyF(value));
            }}
            placeholder="邮箱"
          />
        </Form.Item>

        <Form.Item
          name="mailCode"
          rules={[
            { required: true, message: "请输入验证码" },
            { pattern: /^\d{6}$/, message: "请输入6位数字验证码" },
          ]}
        >
          <BetweenFlexBox>
            <MyInput
              setValue={(e) => {
                setMailCode(e);
                setMailCodeVerify(codeVerifyF(e));
              }}
              width="280px"
              placeholder="验证码"
            />

            {mailcountdownNum <= 60 && mailcountdownNum !== 0 ? (
              <CountdownBtn style={{ width: "148px" }}>
                {mailcountdownNum}s
              </CountdownBtn>
            ) : (
              <VerifyBtn
                onClick={() => {
                  if (mailVerify) {
                    sendEmailCode();
                  }
                }}
                style={
                  mailVerify
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
          rules={[
            { required: true, message: "请输入验证码" },
            { pattern: /^\d{6}$/, message: "请输入6位数字验证码" },
          ]}
        >
          <BetweenFlexBox>
            <MyInput
              setValue={(e) => {
                setsmsCode(e);
                setCodeVerify(codeVerifyF(e));
              }}
              width="280px"
              placeholder="验证码"
            />

            {countdownNum <= 60 && countdownNum !== 0 ? (
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
          mailVerify &&
          mailCodeVerify &&
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
              注册
            </Button>
          )}
        </Form.Item>
      </Form>
      <Modal
        centered
        title="请输入验证码"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setInputVerifyCodeImg("");
        }}
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
              value={inputVerifyCodeImg}
              setValue={(e) => {
                setInputVerifyCodeImg(e);
                setInputVerifyCodeImgVerify(imgCodeVerifyF(e));
                setCodeError("");
              }}
              placeholder="请输入验证码"
            />
          </Form.Item>
        </Form>

        <BtnBox>
          <Button
            style={{
              width: "48%",
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
              width: "48%",
              height: "40px",
              background: inputVerifyCodeImgVerify ? "#2CC8C2" : "#CCCCCC",
            }}
            onClick={() => {
              inputVerifyCodeImgVerify && sendSms();
            }}
          >
            确定
          </Button>
        </BtnBox>
      </Modal>
    </LoginFormBox>
  );
};
export default RegisterForm;
