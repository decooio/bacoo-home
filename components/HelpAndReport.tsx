import { Phone } from "@src/assets/style";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COL, RowFill } from "./common/layouts";
import { Pager } from "./common/Pager";
import { TextTitle } from "./common/texts";
import Button from "./common/Button";
import { GET_TICKETS_LIST_API } from "@request/apis";

const setPageIndex = () => {};

export const MCol = styled(COL)`
  padding: 0px 32px 20px 0px;
  align-items: flex-start;
  height: 100%;
  ${Phone} {
    padding: 24px;
  }
`;

const Tooltip = styled(COL)`
  padding: 24px 32px 20px 24px;
  width: 100%;
  display: flex;
  flex-direction: initial;
  justify-content: space-between;

  ${Phone} {
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: #333333;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 17px;
`;
const Tips = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #666666;
  ${Phone} {
    margin-bottom: 15px;
  }
`;

export const Table = styled(COL)`
  width: calc(100% - 62px);
  flex: 1;
  overflow: auto;
  padding: 32px 0px 0px 32px;
  ${Phone} {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 100%;
  background: #f8f8f8;
  height: 10px;
`;


export default function HelpAndReport() {
  const [pageNum, setPageNum] = useState(1);
  const getTicketsList = async () => {
    try {
      const res = await GET_TICKETS_LIST_API({ pageSize: 10, pageNum: 1 });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTicketsList();
  }, [pageNum]);
  return (
    <MCol>
      <Tooltip>
        <div>
          <Title>需要报告问题或寻求帮助？</Title>
          <Tips>
            *如您有任何疑问或希望反馈任何问题，请点击“发起报告”并填写提交。我们会尽快联系您并做出反馈。谢谢！
          </Tips>
        </div>
        <Button style={{ width: "148px", height: "50px" }}>发起报告</Button>
      </Tooltip>
      <Line></Line>
      <Table>
        <RowFill style={{ height: 37 }}>
          <TextTitle flex={3}>工单编号</TextTitle>
          <TextTitle flex={2}>类型</TextTitle>
          <TextTitle flex={6}>描述</TextTitle>
          <TextTitle flex={2}>状态</TextTitle>
          <TextTitle flex={6}>反馈信息</TextTitle>
        </RowFill>
      </Table>
      <Pager pageSize={10} pageIndex={1} setPageIndex={setPageIndex} />
    </MCol>
  );
}
