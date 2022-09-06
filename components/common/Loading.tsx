import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updatePref } from "../../redux/main";
import { wStore } from "../../store";
import { Context } from "@components/Context/Context";

const spin = keyframes`
  from {}
  to {
    transform: rotate(359deg);
  }
`;

const MLoading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;

  // background-color: rgba($color: #000000, $alpha: 0.1);
  svg {
    animation: ${spin} 1s infinite;
  }
`;

export function AppLoading() {
  const { state } = useContext(Context) as any;
  const { loading } = state;
  console.log(loading);
  
  if (!loading) {
    return null;
  } else {
    return (
      <MLoading>
        <FaSpinner size={"3rem"} color={"rgba(0 , 0, 0 , 0.5)"} />
      </MLoading>
    );
  }
}

export function useLoading() {
  const showAppLoading = useSelector(
    (state: any) => state.reducerPref.showAppLoading
  );
  const put = useDispatch();
  const setShowAppLoading = (show: boolean) => {
    put(updatePref({ showAppLoading: show }));
  };
  return { showAppLoading, setShowAppLoading };
}

export function withLoading<T>(p: Promise<T>) {
  // eslint-disable-next-line
  // @ts-ignore
  const put = wStore.store.dispatch;
  put(updatePref({ showAppLoading: true }));
  return p
    .then((d) => {
      put(updatePref({ showAppLoading: false }));
      return d;
    })
    .catch((e) => {
      put(updatePref({ showAppLoading: false }));
      throw e;
    });
}
