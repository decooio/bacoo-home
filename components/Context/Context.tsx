import { getUserInfoRes } from "@request/types";
import { getLoc } from "@src/index";
import router from "next/router";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { eloginStatus, eloginType } from "./types";
interface initialStateType {
  loginStatus: eloginStatus;
  loginType: eloginType;
  loading: boolean;
  userName: string;
  uuid: string;
  user: getUserInfoRes["data"]["info"];
  plan: getUserInfoRes["data"]["plan"] | null;
}
// 生成 state 以及 dispatch
export const Context = createContext({});

// 将 wrapper 暴露出去
const MyContextWrapper = ({ children: children }: any) => {
  const [initialState] = useState<initialStateType>({
    loginStatus: eloginStatus.login,
    loginType: eloginType.login,
    loading: false,
    userName: "",
    uuid: "",
    user: {
      username: "尚未登录",
      mobile: "暂无信息",
      email: "",
    },
    plan: null,
  });

  function reducer(
    state = initialState,
    action: {
      type: string;
      payload: any;
    }
  ) {
    const { type, payload } = action || {};
    switch (type) {
      case "UPDATE_LOGIN_STATUS":
        return {
          ...state,
          loginStatus: payload,
        };
      case "UPDATE_LOGIN_TYPE":
        return {
          ...state,
          loginType: payload,
        };
      case "UPDATE_LOADING":
        return {
          ...state,
          loading: payload,
        };
      case "UPDATE_UUID":
        return {
          ...state,
          uuid: payload,
        };
      case "UPDATE_USER_NAME":
        return {
          ...state,
          userName: payload,
        };
      case "UPDATE_USER":
        return {
          ...state,
          user: payload,
        };
      case "UPDATE_PLAN":
        return {
          ...state,
          plan: payload,
        };

      default:
        return state;
    }
  }
  useEffect(() => {
    const loginStatus =
      getLoc("token") &&
      getLoc("token") !=
        "Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ"
        ? eloginStatus.login
        : eloginStatus.notLogin;
    const userName = getLoc("userName") ? getLoc("userName") : "";

    const uuid = getLoc("uuid") ? getLoc("uuid") : "";

    dispatch({
      type: "UPDATE_UUID",
      payload: uuid,
    });

    dispatch({
      type: "UPDATE_LOGIN_STATUS",
      payload: loginStatus,
    });

    dispatch({
      type: "UPDATE_USER_NAME",
      payload: userName,
    });

    if (
      loginStatus !== eloginStatus.login &&
      router.pathname.indexOf("/panel") !== -1
    ) {
      router.replace("/login");
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default MyContextWrapper;
