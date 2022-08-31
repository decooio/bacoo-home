import { getLoc } from "@src/index";
import router from "next/router";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { eloginStatus, eloginType } from "./types";
interface initialStateType {
  loginStatus: eloginStatus;
  loginType: eloginType;
  loading: boolean;
  userName: string;
}
// 生成 state 以及 dispatch
export const Context = createContext({});

// 将 wrapper 暴露出去
const MyContextWrapper = ({ children: children }: any) => {
  const [initialState, setInitialState] = useState<initialStateType>({
    loginStatus: eloginStatus.login,
    loginType: eloginType.login,
    loading: false,
    userName: "",
  });
  const [initialization, setInitialization] = useState(false);

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

      default:
        return state;
    }
  }
  useEffect(() => {
    const loginStatus = getLoc("token")
      ? eloginStatus.login
      : eloginStatus.notLogin;
    const userName = getLoc("token") ? getLoc("token") : "";

    dispatch({
      type: "UPDATE_LOGIN_STATUS",
      payload: loginStatus,
    });
    dispatch({
      type: "userName",
      payload: userName,
    });
    setInitialization(true);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default MyContextWrapper;
