import router from "next/router";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { eloginStatus, eloginType } from "./types";
interface initialStateType {
  loginStatus: eloginStatus;
  loginType: eloginType;
}
// 生成 state 以及 dispatch
export const Context = createContext({});

// 将 wrapper 暴露出去
const MyContextWrapper = ({ children: children }: any) => {
  const [initialState, setInitialState] = useState<initialStateType>({
    loginStatus: eloginStatus.notLogin,
    loginType: eloginType.login,
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

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default MyContextWrapper;
