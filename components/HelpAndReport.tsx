import { Phone } from "@src/assets/style";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COL, RowFill } from "./common/layouts";
import { Pager } from "./common/Pager";
import { EmptyText, TextTitle, Text } from "./common/texts";
import Button from "./common/Button";
import {
  GET_TICKETS_DETAILS_API,
  GET_TICKETS_LIST_API,
  SUBMIT_TICKETS_API,
  SET_SOLVEd_API,
  SET_UNSOLVEd_API,
} from "@request/apis";
import { Context } from "./Context/Context";
import { message, Modal, Select } from "antd";
import { HeightBox, ModalText } from "./Profile";
import TextArea from "antd/lib/input/TextArea";
import { getticketsListRes } from "@request/types";
import { MText } from "./FileManager";
import { Tips } from "./common/tips";

const { Option } = Select;
interface detailInfo {
  description: string;
  feedback: string;
  reportTime: string;
  status: number;
  ticketNo: string;
  type: number;
}
export const MCol = styled(COL)`
  padding: 0px 32px 20px 0px;
  align-items: flex-start;
  height: 100%;
  ${Phone} {
    padding: 24px;
  }
`;
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
const TipsText = styled.div`
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
const Reporter = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #666666;
`;

const typeMap = new Map([
  [0, "技术支持"],
  [1, "用户意向"],
]);
const typeList = [
  {
    type: 0,
    text: "技术支持",
  },
  {
    type: 1,
    text: "用户意向",
  },
];

export default function HelpAndReport() {
  const { state, dispatch } = useContext(Context) as any;
  const { userName } = state;
  const [pageNum, setPageNum] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("1");
  const [pageSize, setPageSize] = useState(0);
  const [ticketsList, setTicketsList] = useState<
    getticketsListRes["data"]["results"]
  >([]);
  const [detailsmodalOpen, setDetailsModalOpen] = useState(false);
  const [detail, setDetail] = useState<detailInfo>();
  const [activeId, setActiveId] = useState(0);

  const getTicketsList = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_TICKETS_LIST_API({ pageSize: 10, pageNum });
      setPageSize(res.data.count);
      setTicketsList([...res.data.results]);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };

  const submitReport = async () => {
    try {
      const res = await SUBMIT_TICKETS_API({
        description,
        type,
        feedback: "测试",
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getDetails = async (id: number) => {
    setActiveId(id);
    try {
      const res = await GET_TICKETS_DETAILS_API(id);
      console.log(res);
      setDetailsModalOpen(true);
      setDetail(res.data[0]);
    } catch (e) {
      message.error(e);
    }
  };

  const setStates = async (id: number, type: number) => {
    try {
      if (type == 1) {
        await SET_SOLVEd_API(id);
      } else {
        await SET_UNSOLVEd_API(id);
      }
      message.success("修改成功");
    } catch (e) {
      message.error(e);
    }
    getTicketsList();
    setDetailsModalOpen(false);
  };

  useEffect(() => {
    getTicketsList();
  }, [pageNum]);

  return (
    <MCol>
      <Tooltip>
        <div>
          <Title>需要报告问题或寻求帮助？</Title>
          <TipsText>
            *如您有任何疑问或希望反馈任何问题，请点击“发起报告”并填写提交。我们会尽快联系您并做出反馈。谢谢！
          </TipsText>
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          style={{ width: "148px", height: "50px" }}
        >
          发起报告
        </Button>
      </Tooltip>
      <Line></Line>
      <Table>
        <RowFill style={{ height: 37 }}>
          <TextTitle flex={3}>工单编号</TextTitle>
          <TextTitle flex={2}>类型</TextTitle>
          <TextTitle flex={6}>描述</TextTitle>
          <TextTitle flex={2}>状态</TextTitle>
          <TextTitle flex={6}>反馈</TextTitle>
          <TextTitle flex={2}></TextTitle>
        </RowFill>
        {ticketsList && ticketsList.length === 0 && (
          <EmptyText>暂无数据</EmptyText>
        )}
        {ticketsList.map((item, index) => {
          return (
            <RowFill
              key={`file_${index}`}
              style={{ height: 44, borderTop: "1px solid #eeeeee" }}
            >
              <Text flex={3}>
                <MText>{item.ticketNo}</MText>
              </Text>
              <Text flex={2}>
                <MText>{typeMap.get(item.type)}</MText>
              </Text>
              <Text flex={6}>
                <Tips title={item.description}>
                  <MText>{item.description}</MText>
                </Tips>
              </Text>
              <Text flex={2}>
                <MText>
                  {item.status == 0
                    ? "已提交"
                    : item.status == 1
                    ? "已回复"
                    : "已解决"}
                </MText>
              </Text>
              <Text flex={6}>
                <Tips title={item.feedback}>
                  <MText>{item.feedback}</MText>
                </Tips>
              </Text>
              <Text flex={2}>
                {item.status !== 0 && (
                  <span
                    onClick={() => {
                      getDetails(item.id);
                    }}
                    style={{
                      color: "#2CC8C2",
                      cursor: "pointer",
                    }}
                  >
                    查看
                  </span>
                )}
              </Text>
            </RowFill>
          );
        })}
      </Table>

      <Pager
        pageSize={Math.ceil(pageSize / 10)}
        pageIndex={1}
        setPageIndex={(e) => setPageNum(e)}
      />

      <Modal
        width={480}
        title="发起报告"
        visible={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <ModalText>类型</ModalText>
        <Select
          defaultValue="技术支持"
          style={{ width: "100%" }}
          onChange={(e) => setType(e)}
        >
          {typeList.map((item) => {
            return (
              <Option value={item.type} key={item.type}>
                {item.text}
              </Option>
            );
          })}
        </Select>
        <HeightBox></HeightBox>
        <ModalText>报告人</ModalText>
        <Reporter>{userName}</Reporter>
        <HeightBox></HeightBox>
        <ModalText>报告内容</ModalText>
        <TextArea
          rows={2}
          onInput={(e) => setDescription((e.target as any).value)}
        />
        <HeightBox></HeightBox>
        <Button
          style={{
            width: "100%",
          }}
          onClick={() => submitReport()}
        >
          确认提交
        </Button>
      </Modal>

      <Modal
        width={480}
        title={detail?.ticketNo}
        visible={detailsmodalOpen}
        footer={null}
        onCancel={() => setDetailsModalOpen(false)}
      >
        <ModalText>类型</ModalText>
        <Select
          disabled
          defaultValue={detail?.type == 0 ? "技术支持" : "用户意向"}
          style={{ width: "100%" }}
        ></Select>
        <HeightBox></HeightBox>
        <ModalText>报告人</ModalText>
        <Reporter>{userName}</Reporter>
        <HeightBox></HeightBox>
        <ModalText>报告内容</ModalText>
        <TextArea rows={2} disabled value={detail?.description} />
        <HeightBox></HeightBox>
        <TipsText>提交时间：{detail?.reportTime}</TipsText>
        <HeightBox></HeightBox>
        <FlexBox>
          <Button
            style={{
              width: "45%",
              background: "rgba(44, 200, 194, 0.06)",
              border: " 1px solid #2CC8C2",
              color: "#2CC8C2",
            }}
            onClick={() => setStates(activeId, 0)}
          >
            未解决
          </Button>
          <Button
            style={{
              width: "45%",
            }}
            onClick={() => setStates(activeId, 1)}
          >
            已解决
          </Button>
        </FlexBox>
      </Modal>
    </MCol>
  );
}
