import { COL, RowFill } from "./common/layouts";
import { FiBox, FiChevronDown, FiDownload } from "react-icons/fi";
import styled from "styled-components";
import { CopyText, EmptyText, Text, TextTitle } from "./common/texts";
import { useContext, useEffect, useState } from "react";
import { Pager } from "./common/Pager";
import { Tips } from "./common/tips";
import React from "react";
import { Phone } from "../src/assets/style";
import { getFilesRes, getgatewayListRes } from "@request/types";
import {
  GET_FILE_LIST_API,
  GET_FILE_SIZE_API,
  GET_GATEWAY_LIST_API,
  UPDATA_FILE_API,
} from "@request/apis";
import { Alert, Dropdown, Menu, Modal, Progress, Space, Upload } from "antd";
import { changeSize, getLoc } from "@src/index";
import { Context } from "./Context/Context";

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
  margin-right: 12px;
  font-size: 24px;
  margin-bottom: 1px;
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
export const UploadBtn = styled.div`
  width: 150px;
  height: 44px;
  background: #2cc8c2;
  border-radius: 8px;
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export default function FileManager() {
  const { state, dispatch } = useContext(Context) as any;
  const { loading, uuid } = state;
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
  const [pageNum, setPageNum] = useState(1);
  const [upLoadOpen, setUpLoadOpen] = useState(false);
  const [upLoadStatus, setUpLoadStatus] = useState<string | undefined>("");
  const [pageSize, setPageSize] = useState(0);

  //获取节点列表
  const getGatewayList = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_GATEWAY_LIST_API();
      console.log(res);
      const data = res.data;
      setGatewayList([...data]);
      setActiveGateway(data[0]);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };
  //获取已经上传的文件
  const getFiles = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_FILE_LIST_API({
        pageSize: 10,
        pageNum,
      });
      console.log(res);
      setFiles([...res.data]);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };
  const getFileSize = async () => {
    try {
      const res = await GET_FILE_SIZE_API();
      setPageSize(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFiles();
    getFileSize();
  }, [pageNum]);

  useEffect(() => {
    getGatewayList();
  }, []);

  return (
    <MCol>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Upload
          showUploadList={false}
          name="file"
          action={`${activeGateway.host}/api/v0/add?pin=true`}
          headers={{ authorization: getLoc("token") as string }}
          onChange={async (info) => {
            setUpLoadStatus(info.file.status);
            if (info.file.status == "uploading") {
              setUpLoadOpen(true);
            }

            if (info.file.status === "done" || info.file.status === "success") {
              setUpLoadOpen(false);
              const { Hash, Name } = info.file.response;
              await UPDATA_FILE_API({
                cid: Hash,
                name: Name,
              });
              getFiles();
            }
          }}
        >
          <UploadBtn>
            <span
              style={{
                marginRight: "12px",
                transform: "scale(2) translateY(-0.5px)",
              }}
            >
              +
            </span>
            <span
              style={{
                fontSize: "18px",
              }}
            >
              添加文件
            </span>
          </UploadBtn>
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
          <TextTitle flex={1}></TextTitle>
          <TextTitle flex={1}>体积</TextTitle>
          <TextTitle flex={3}>Pin时间戳</TextTitle>
        </RowFill>
        {files && files.length === 0 && !loading && (
          <EmptyText>暂无数据</EmptyText>
        )}
        {files.map((file, index) => {
          return (
            <RowFill
              key={`file_${index}`}
              style={{ height: 44, borderTop: "1px solid #eeeeee" }}
            >
              <Text flex={2}>
                <Tips title={file.name}>
                  <MText>{file.name}</MText>
                </Tips>
              </Text>
              <CopyText flex={6}>{file.cid}</CopyText>
              <Text flex={6}>
                {file.valid !== 1 ? (
                  <CopyText flex={6}>{`https://${uuid}.${file.host.replace(
                    "https://",
                    ""
                  )}/ipfs/${file.cid}`}</CopyText>
                ) : (
                  <Tips
                    title={
                      "因遵守当地相关法律法规要求，暂不提供针对该内容的服务。"
                    }
                  >
                    <MText>
                      因遵守当地相关法律法规要求，暂不提供针对该内容的服务。
                    </MText>
                  </Tips>
                )}
              </Text>

              <Text flex={1}>
                {file.valid !== 1 ? (
                  <DownBtn>
                    <Tips title="点击下载">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={`https://${uuid}.${file.host.replace(
                          "https://",
                          ""
                        )}/ipfs/${file.cid}`}
                      >
                        <FiDownload />
                      </a>
                    </Tips>
                    <Tips title="在IPFS Scan查看文件副本分布">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={`https://ipfs-scan.io/?cid=${file.cid}`}
                      >
                        <FiBox />
                      </a>
                    </Tips>
                  </DownBtn>
                ) : null}
              </Text>
              <Text flex={1}>
                <Tips title={changeSize(file.fileSize)}>
                  {changeSize(file.fileSize)}
                </Tips>{" "}
              </Text>
              <Text flex={3}>
                <Tips title={file.createTime}>{file.createTime}</Tips>
              </Text>
            </RowFill>
          );
        })}
      </Table>
      <Pager
        pageSize={Math.ceil(pageSize / 10)}
        pageIndex={pageNum}
        setPageIndex={(e) => setPageNum(e)}
      />

      <Modal
        title="上传文件"
        visible={upLoadOpen}
        footer={null}
        onCancel={() => setUpLoadOpen(false)}
      >
        {upLoadStatus === "done" ||
          (upLoadStatus === "success" && (
            <Alert message="上传成功" type="success" />
          ))}
        {upLoadStatus === "done" ||
          (upLoadStatus === "error" && (
            <Alert message="上传失败" type="error" />
          ))}
        <Progress
          strokeWidth={20}
          strokeColor={"rgb(51 51 51)"}
          percent={99}
          status="active"
        />
      </Modal>
    </MCol>
  );
}
