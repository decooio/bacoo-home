import { COL, Row, RowFill, SpaceH } from "./common/layouts";
import Button from "./common/Button";
import { FiBox, FiChevronDown, FiDownload, FiPlus } from "react-icons/fi";
import styled from "styled-components";
import { CopyText, EmptyText, Text, TextTitle } from "./common/texts";
import { useEffect, useState } from "react";
import { IFile } from "../src/types/manager";
import { Pager } from "./common/Pager";
import _ from "lodash";
import { useLoading, withLoading } from "./common/Loading";
import { Tips } from "./common/tips";
import React from "react";
import { Phone } from "../src/assets/style";
import { getFilesRes, getgatewayListRes } from "@request/types";
import {
  GET_FILE_LIST_API,
  GET_GATEWAY_LIST_API,
  UPDATA_FILE_API,
} from "@request/apis";
import { Dropdown, Menu, Space, Upload } from "antd";
import { getLoc } from "@src/index";

export const Table = styled(COL)`
  width: calc(100% - 62px);
  flex: 1;
  overflow: auto;
  ${Phone} {
    width: 100%;
  }
`;
export const MCol = styled(COL)`
  padding: 32px 32px 20px 32px;
  align-items: flex-start;
  height: 100%;
  ${Phone} {
    padding: 24px;
  }
`;

export const MText = styled.div`
  width: min-content;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const AddIcon = styled.span`
  color: #fff;
  margin-right: 5px;
  font-size: 24px;
`;
export const DownBtn = styled.div<{ invisible?: boolean }>`
  width: 38px;
  height: 100%;
  color: #808080;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${(p) => (p.invisible ? 0 : 1)};

  :hover {
    color: #666666;
  }
`;

export default function FileManager() {
  const [files, setFiles] = useState<getFilesRes["data"]>([]);
  const [gatewayList, setGatewayList] = useState<getgatewayListRes["data"]>([]);
  const [activeGateway, setActiveGateway] = useState<{
    host: string;
    nodeType: number;
    name: string;
  }>({
    host: "",
    nodeType: 0,
    name: "",
  });

  const [pageNum, setPageNum] = useState("1");

  const { showAppLoading } = useLoading();

  const setPageIndex = () => {};
  //获取节点列表
  const getGatewayList = async () => {
    try {
      const res = await GET_GATEWAY_LIST_API();
      console.log(res);
      const data = res.data;
      setGatewayList([...data]);
      setActiveGateway(data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  //获取已经上传的文件
  const getFiles = async () => {
    try {
      const res = await GET_FILE_LIST_API({
        pageSize: "10",
        pageNum,
      });

      console.log(res);
      setFiles([...res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFiles();
  }, [pageNum]);

  useEffect(() => {
    getGatewayList();
  }, []);

  return (
    <MCol>
      <div style={{ display: "flex" }}>
        <Upload
          showUploadList={false}
          name="file"
          action={`${activeGateway.host}/api/v0/add?pin=true`}
          headers={{ authorization: getLoc("token") as string }}
          onChange={async (info) => {
            console.log(info);
            if (info.file.status === "done" || info.file.status === "success") {
              console.log(info.file.response);
              const { Hash, Name } = info.file.response;
              const res = await UPDATA_FILE_API({
                cid: Hash,
                name: Name,
              });
              console.log(res);
              getFiles();
            }
          }}
        >
          <Button
            style={{
              marginRight: "24px",
            }}
          >
            <AddIcon>+</AddIcon> 添加文件
          </Button>
        </Upload>

        <Dropdown
          overlay={
            <Menu>
              {gatewayList.map((item, index) => {
                return (
                  <Menu.Item key={index} onClick={() => setActiveGateway(item)}>
                    {item.name}
                  </Menu.Item>
                );
              })}
            </Menu>
          }
        >
          <Space>
            上传节点: {activeGateway.name} <FiChevronDown></FiChevronDown>
          </Space>
        </Dropdown>
      </div>
      <Table>
        <RowFill style={{ height: 37 }}>
          <TextTitle flex={2}>文件名</TextTitle>
          <TextTitle flex={6}>CID</TextTitle>
          <TextTitle flex={6}>访问域名</TextTitle>
          <TextTitle flex={1}>
            <DownBtn>
              <FiDownload />
            </DownBtn>
          </TextTitle>
          <TextTitle flex={1}>体积</TextTitle>
          <TextTitle flex={3}>Pin时间戳</TextTitle>
        </RowFill>
        {files && files.length === 0 && !showAppLoading && (
          <EmptyText>暂无数据</EmptyText>
        )}
        {files.map((file, index) => {
          return (
            <RowFill
              key={`file_${index}`}
              style={{ height: 44, borderTop: "1px solid #eeeeee" }}
            >
              <Text flex={2}>
                <MText>{file.name}</MText>
              </Text>
              <CopyText flex={6}>{file.cid}</CopyText>
              <Text flex={6}>
                <Tips title="文件名Tips">
                  <MText>{file.name}</MText>
                </Tips>
              </Text>

              <Text flex={1}>
                <DownBtn>
                  <Tips title="点击下载">
                    <FiDownload />
                  </Tips>
                  <Tips title="在IPFS Scan查看文件副本分布">
                    {" "}
                    <FiBox />
                  </Tips>
                </DownBtn>
              </Text>
              <Text flex={1}>{file.fileSize} kb</Text>
              <Text flex={3}>{file.createTime}</Text>
            </RowFill>
          );
        })}
      </Table>
      <Pager pageSize={10} pageIndex={1} setPageIndex={setPageIndex} />
    </MCol>
  );
}
