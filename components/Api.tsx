import { COL, RowFill } from "./common/layouts";
import styled from "styled-components";
import { CopyText, TextTitle, Text } from "./common/texts";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { Phone, useDevice } from "../src/assets/style";
import { GET_APIS_API } from "@request/apis";
import { getApisRes } from "@request/types";
import { Context } from "./Context/Context";

const MCol = styled(COL)`
  padding: 32px;
  align-items: flex-start;

  ${Phone} {
    padding: 20px;
  }
`;

const Table = styled(COL)`
  width: 100%;
  margin-top: 32px;
  flex: 1;
  overflow: auto;
  align-items: flex-start;
  ${Phone} {
    margin-top: 18px;
  }
`;

export const styleItemTxt = {
  paddingLeft: 20,
  paddingRight: 80,
};
const styleItemTxt_phone = {};
// const apis: any[] = [1, 2]
export default function Api() {
  const { dispatch } = useContext(Context) as any;
  const [apis, setApis] = useState<getApisRes["data"]>([]);
  const device = useDevice();
  const styleItem = device.isMobile ? styleItemTxt_phone : styleItemTxt;
  const flexRight = device.isMobile ? 1 : 1;
  const getApis = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_APIS_API();
      const apis = res.data;
      setApis([...apis]);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  useEffect(() => {
    getApis();
  }, []);
  
  return (
    <MCol>
      <Table>
        <RowFill style={{ height: 37 }}>
          <TextTitle flex={15} style={styleItem}>
            API Key
          </TextTitle>
          <TextTitle flex={flexRight} style={styleItem}>
            状态
          </TextTitle>
        </RowFill>

        {apis.length > 0 ? (
          apis.map((item, index) => (
            <RowFill
              key={`apis_${index}`}
              style={{ height: 44, borderTop: "1px solid #eeeeee" }}
            >
              <CopyText flex={15} style={styleItem}>
                {item.signature}
              </CopyText>
              <Text flex={flexRight} style={styleItem}>
                {item.valid? "无效" : "有效"}
              </Text>
            </RowFill>
          ))
        ) : (
          <RowFill style={{ height: 44, borderTop: "1px solid #eeeeee" }}>
            <div
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              暂无数据
            </div>
          </RowFill>
        )}
      </Table>
    </MCol>
  );
}
