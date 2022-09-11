import react, { useContext } from "react";
import { Context } from "@components/Context/Context";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import Button from "./common/Button";
import { useRouter } from "next/router";
import React from "react";
import { Phone } from "../src/assets/style";

import { eloginStatus, eloginType } from "@components/Context/types";
import { Dropdown, Menu, Space } from "antd";

const Wrapper = styled.div`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Phone} {
    padding-right: 12px;
  }
`;

const CButton = styled(Button)`
  ${Phone} {
    width: 62px;
    height: 28px;
    background: #2cc8c2;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const Userinfo: react.FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Context) as any;
  const { loginStatus, loginType, userName } = state;
  const goLoginAndRegister = (type: eloginType) => {
    dispatch({
      type: "UPDATE_LOGIN_TYPE",
      payload: type,
    });
    if (router.pathname === "/login") {
      return;
    }
    router.push("/login");
  };

  const loginOut = async () => {
    localStorage.removeItem("token");
    dispatch({
      type: "UPDATE_LOGIN_STATUS",
      payload: eloginStatus.notLogin,
    });
    router.replace("/login");
  };
  return (
    <Wrapper>
      {loginStatus !== eloginStatus.login ? (
        <>
          {loginType === eloginType.login && router.pathname == "/login" ? (
            <CButton onClick={() => goLoginAndRegister(eloginType.register)}>
              注册
            </CButton>
          ) : (
            <CButton onClick={() => goLoginAndRegister(eloginType.login)}>
              登录
            </CButton>
          )}
        </>
      ) : (
        <Dropdown
          placement={"bottomRight"}
          trigger={["click"]}
          overlay={
            <Menu style={{ width: 86 }}>
              <Menu.Item
                onClick={() => {
                  loginOut();
                }}
              >
                退出登录
              </Menu.Item>
            </Menu>
          }
        >
          <Space size={14}>
            <span
              style={{
                fontSize: "14px",
              }}
            >
              {userName}
            </span>
            <FiChevronDown></FiChevronDown>
          </Space>
        </Dropdown>
      )}
    </Wrapper>
  );
};
export default Userinfo;
