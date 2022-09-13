import styled from "styled-components";
import { useEffect, useState } from "react";
import copyToClipboard from "copy-to-clipboard";
import React from "react";
import { useDevice } from "../../src/assets/style";

export const Text = styled.div<{ flex: number }>`
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  height: 43px;
  line-height: 44px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 20px;
  ${(p) => `flex: ${p.flex}`};
  @media (max-width: 768px) {
    flex: 0;
    min-width: 50%;
  }
`;
export const TextTitle = styled.div<{ flex: number }>`
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  height: 25px;
  line-height: 25px;
  padding-right: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(p) => `flex: ${p.flex}`};
  @media (max-width: 768px) {
    min-width: 50%;
  }
`;

const Copyed = styled.div`
  width: 56px;
  height: 30px;
  border-radius: 6px;
  background: #4a4a4a;
  position: fixed;
  line-height: 30px;
  text-align: center;
  overflow: visible;
  font-size: 14px;
  color: white;
`;
const Arrow = styled.div`
  position: absolute;
  transform: rotate(45deg);
  width: 6px;
  background: #4a4a4a;
  height: 6px;
  top: 27px;
  left: 24px;
`;

export const CopyText = (p: { flex: number } | any) => {
  const [copy, setCopy] = useState<{
    left: number;
    top: number;
  } | null>(null);
  useEffect(() => {
    const autoClear = setTimeout(() => {
      setCopy(null);
    }, 1000);
    return () => {
      clearTimeout(autoClear);
    };
  }, [copy]);
  const { isMobile } = useDevice();
  return (
    <Text
      {...p}
      style={{ cursor: "pointer", ...(p.style ?? {}) }}
      onClick={(e) => {
        const state = copyToClipboard( p.value || p.children );
        if (state) {
          console.info("----e-->", e);
          const offsetY = isMobile ? 100 : 42;
          setCopy({ left: e.clientX - 28, top: e.clientY - offsetY });
        }
      }}
    >
      {p.children}
      {copy && (
        <Copyed style={{ ...copy }}>
          {" "}
          {"已复制"} <Arrow />{" "}
        </Copyed>
      )}
    </Text>
  );
};

export const EmptyText = styled.div`
  color: #999999;
  font-size: 14px;
  margin-top: 35px;
`;
