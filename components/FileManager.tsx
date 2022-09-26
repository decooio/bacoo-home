import { COL, RowFill } from "./common/layouts";
import { FiBox, FiChevronDown, FiDownload, FiFolder } from "react-icons/fi";
import styled from "styled-components";
import { EmptyText, Text, TextTitle } from "./common/texts";
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
  GET_USER_INFO_API,
  UPDATA_FILE_API,
} from "@request/apis";
import {
  Alert,
  Dropdown,
  Menu,
  message,
  Modal,
  Progress,
  Space,
  Upload,
} from "antd";
import { changeSize, getLoc } from "@src/index";
import { Context } from "./Context/Context";
import Omit from "./common/Omit";
import axios, { CancelTokenSource } from "axios";
import { SIZE_LIMIT } from "./main";
import { RcFile } from "antd/lib/upload";

import s from "./fileManager.module.scss";
import CopyTips from "./common/CopyTips";
import { GrDocument } from "react-icons/gr";

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FileBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Table = styled(COL)`
  width: calc(100% - 18px);
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
  max-width: calc(100% - 10px);
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
  cursor: pointer;
  :hover {
    background: #15c1ba;
  }
`;
const UploadBtnBox = styled.div`
  position: relative;
`;

export default function FileManager() {
  const { state, dispatch } = useContext(Context) as any;
  const { loading, uuid, plan } = state;
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
  const [pageNum, setPageNum] = useState(0);
  const [upLoadOpen, setUpLoadOpen] = useState(false);
  const [upLoadStatus, setUpLoadStatus] = useState<string | undefined>("");
  const [pageSize, setPageSize] = useState(0);

  const [percent, setPercent] = useState(0);
  const [errorText, steErrorText] = useState("");
  // 上传文件请求控制器
  const [cancelUp, setCancelUp] = useState<CancelTokenSource | null>(null);
  // 上传文件框是否显示
  const [uploadFileTypeShow, setUploadFileTypeShow] = useState(false);

  const [fileList, setFileList] = useState<RcFile[]>([]);
  // const [folder, setFolder] = useState("");

  // 更新用户plan
  const updataPlan = async () => {
    try {
      const res = await GET_USER_INFO_API();
      dispatch({
        type: "UPDATE_PLAN",
        payload: res.data.plan,
      });
    } catch (e) {
      console.log(e);
    }
  };

  //获取节点列表
  const getGatewayList = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_GATEWAY_LIST_API();
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
  //获取已经上传的文件列表
  const getFiles = async () => {
    dispatch({
      type: "UPDATE_LOADING",
      payload: true,
    });
    try {
      const res = await GET_FILE_LIST_API({
        pageSize: 10,
        pageNum: pageNum + 1,
      });
      setFiles([...res.data]);
    } catch (e) {
      console.log(e);
      setFiles([]);
    }
    dispatch({
      type: "UPDATE_LOADING",
      payload: false,
    });
  };
  // 获取文件列表大小
  const getFileSize = async () => {
    try {
      const res = await GET_FILE_SIZE_API();
      setPageSize(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   *每次上传后清除文件列表
   * */
  const removeFileList = () => {
    setFileList([]);
    setUpLoadStatus("");
  };

  // 上传前检查大小和用户过期时间
  const censorSizeAndTime = () => {
    const errFun = () => {
      removeFileList();
      setUpLoadOpen(false);
      return false;
    };

    const remainingStorageSize = plan.maxStorageSize - plan.usedStorageSize;
    const totalSize = fileList
      .map((item) => item.size)
      .reduce((prev, curr) => prev + curr, 0);

    //到期时间判断
    if (new Date() > new Date(plan.storageExpireTime)) {
      message.error("存储计划已到期，请更新存储计划。");
      return errFun();
    }
    // 非付费会员不能上传大于100M的文件
    if (plan.orderType == 0) {
      if (totalSize > SIZE_LIMIT) {
        message.error("试用计划用户上传单个文件不得大于100M");
        return errFun();
      }
    }
    // 文件大于属于储存空间时限制上传
    if (totalSize > remainingStorageSize) {
      message.error(
        `大于${
          plan.orderType == 0 ? "试用计划" : "当前存储计划"
        }的使用容量上限。如需继续上传，请更新存储计划。`
      );
      return errFun();
    }

    return true;
  };
  /**
   * 手动上传文件
   * */
  const handleUpload = async () => {
    setUploadFileTypeShow(false);
    setUpLoadStatus("");
    let Hash = "";
    let Name = "";
    const url = `${activeGateway.host}/api/v0/add?pin=true`;
    const headers = { authorization: getLoc("token") as string };

    // 检查是否可以上传（大小和时间）
    if (!censorSizeAndTime()) {
      return;
    }

    // 循环添加文件到form
    const formData = new FormData();
    fileList.forEach((item) => {
      formData.append("file", item);
    });

    setUploadFileTypeShow(false);
    const cancel = axios.CancelToken.source();
    setCancelUp(cancel);
    axios
      .post(url, formData, {
        headers,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const complete =
              ((progressEvent.loaded / progressEvent.total) * 100) | 0;
            const percent = complete;
            setPercent(percent);
          }
        },
        cancelToken: cancel.token,
      })
      .then(async (res) => {
        setPercent(100);
        if (typeof res.data == "string") {
          const resultArr = res.data.split("\n");
          const folder = JSON.parse(resultArr[resultArr.length - 2]);
          Hash = folder.Hash;
          Name = folder.Name;
        } else {
          Hash = res.data.Hash;
          Name = res.data.Name;
        }
        try {
          await UPDATA_FILE_API({
            cid: Hash,
            name: Name,
          });
          setUpLoadStatus("success");
          getFiles();
          getFileSize();
          updataPlan();
        } catch (e: any) {
          setUpLoadStatus("error");
          if (e.response) {
            steErrorText(
              e.response.data.code == 500
                ? "上传失败，请稍后重试"
                : e.response.data.message || "上传失败，请稍后重试"
            );
          }
        }
      })
      .catch((err) => {
        setUpLoadStatus("error");
        if (err.response) {
          steErrorText(
            err.response.data.code == 500
              ? "上传失败，请稍后重试"
              : err.response.data.message || "上传失败，请稍后重试"
          );
        } else {
          steErrorText("上传失败，请稍后重试");
          setPercent(0);
        }
      });
  };

  useEffect(() => {
    getFiles();
    getFileSize();
  }, [pageNum]);

  useEffect(() => {
    getGatewayList();
  }, []);

  useEffect(() => {
    if (upLoadOpen) {
      handleUpload();
    }
  }, [upLoadOpen]);

  return (
    <MCol
      onClick={() => {
        if (uploadFileTypeShow) {
          setUploadFileTypeShow(false);
        }
      }}
    >
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <UploadBtnBox>
          <UploadBtn onClick={() => setUploadFileTypeShow(!uploadFileTypeShow)}>
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

          <div
            className={s.uploadFileType}
            style={{
              display: uploadFileTypeShow ? "block" : "none",
            }}
          >
            <Upload
              showUploadList={false}
              name="file"
              action={`${activeGateway.host}/api/v0/add?pin=true`}
              headers={{ authorization: getLoc("token") as string }}
              beforeUpload={async (file) => {
                setFileList([file]);
                setUpLoadOpen(true);
                return false;
              }}
            >
              <div className={s.box}>
                <GrDocument />
                <span className={s.uploadFileTypeItemText}>文件</span>
              </div>
            </Upload>

            <Upload
              directory
              showUploadList={false}
              name="file"
              action={`${activeGateway.host}/api/v0/add?pin=true`}
              headers={{ authorization: getLoc("token") as string }}
              beforeUpload={async (file: any) => {
                const locFolder = fileList;
                locFolder.push(file);
                setFileList([...locFolder]);
                setUpLoadOpen(true);
                return false;
              }}
            >
              <div className={s.box}>
                <FiFolder
                  style={{
                    transform: "scale(1.1)",
                  }}
                />
                <span className={s.uploadFileTypeItemText}>文件夹</span>
              </div>
            </Upload>
          </div>
        </UploadBtnBox>

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
          <TextTitle
            flex={3}
            style={{
              paddingLeft: 20,
              paddingRight: 50,
            }}
          >
            文件名
          </TextTitle>
          <TextTitle flex={4}>CID</TextTitle>
          <TextTitle flex={6}>访问域名</TextTitle>
          <TextTitle flex={1}></TextTitle>
          <TextTitle flex={2}>大小</TextTitle>
          <TextTitle mw="160px" flex={3}>
            Pin时间戳
          </TextTitle>
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
              <Text
                flex={3}
                style={{
                  paddingLeft: 20,
                  paddingRight: 50,
                }}
              >
                <Tips
                  title={file.name}
                  placement="topLeft"
                  align={{
                    offset: [0, 15],
                  }}
                >
                  <FileBox>
                    <MText
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      {file.name}
                    </MText>
                    {file.fileType ? (
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                        }}
                      >
                        <FiFolder />
                      </div>
                    ) : null}
                  </FileBox>
                </Tips>
              </Text>

              <Text flex={4}>
                <CopyTips
                  title={file.cid}
                  placement="topLeft"
                  align={{
                    offset: [0, 15],
                  }}
                >
                  <div>
                    <Omit value={file.cid}></Omit>
                  </div>
                </CopyTips>
              </Text>

              <Text flex={6}>
                {file.valid !== 1 ? (
                  <FlexBox>
                    <CopyTips
                      placement="topLeft"
                      align={{
                        offset: [0, 15],
                      }}
                      title={`https://${uuid}.${file.host.replace(
                        "https://",
                        ""
                      )}/ipfs/${file.cid}`}
                    >
                      <Text flex={1}>{`https://${uuid}.${file.host.replace(
                        "https://",
                        ""
                      )}/ipfs/${file.cid}`}</Text>
                    </CopyTips>
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
                          <FiDownload color="#666666" />
                        </a>
                      </Tips>
                      <Tips title="在IPFS Scan查看文件副本分布">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`https://ipfs-scan.io/?cid=${file.cid}`}
                        >
                          <FiBox color="#666666" />
                        </a>
                      </Tips>
                    </DownBtn>
                  </FlexBox>
                ) : (
                  <FlexBox>
                    <Tips
                      title={
                        "因遵守当地相关法律法规要求，暂不提供针对该内容的服务。"
                      }
                    >
                      <Text flex={1}>
                        因遵守当地相关法律法规要求，暂不提供针对该内容的服务。
                      </Text>
                    </Tips>
                    <DownBtn></DownBtn>
                  </FlexBox>
                )}
              </Text>

              <Text flex={1}></Text>
              <Text flex={2}>
                <Tips title={changeSize(file.fileSize)}>
                  {changeSize(file.fileSize)}
                </Tips>{" "}
              </Text>
              <Text mw="160px" flex={3}>
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
        centered
        visible={upLoadOpen}
        footer={null}
        maskClosable={false}
        onCancel={() => {
          setPercent(0);
          setUpLoadOpen(false);
          setUpLoadStatus("");
          if (cancelUp) {
            cancelUp.cancel();
          }
        }}
      >
        {upLoadStatus === "success" && (
          <Alert message="上传成功" type="success" />
        )}
        {upLoadStatus === "error" && <Alert message={errorText} type="error" />}

        {upLoadStatus !== "success" && upLoadStatus !== "error" && (
          <Progress
            strokeWidth={20}
            strokeColor={"rgb(51 51 51)"}
            percent={percent}
            status={"active"}
          />
        )}
      </Modal>
    </MCol>
  );
}
