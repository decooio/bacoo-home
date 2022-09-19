import s from "./main.module.scss";
// import RightSlide from "./RightSlide";
import { FiCheckCircle, FiChevronDown, FiPlus, FiFolder } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import React, { useContext, useEffect, useRef, useState } from "react";
import i18next from "i18next";
import BgAnim from "./effect/BgAnim";
// import {pinFile} from "../lib/http";
import styled from "styled-components";
import { Phone, useDevice } from "../src/assets/style";
import classNames from "classnames";
import { COL } from "./common/layouts";
import Button from "./common/Button";
import { Dropdown, Menu, message, Progress, Space, Upload } from "antd";
import { GET_GATEWAY_LIST_API, UPDATA_FILE_API } from "@request/apis";
import { changeSize, setLoc } from "@src/index";
import { getgatewayListRes } from "@request/types";
import { RcFile } from "antd/lib/upload";
import axios from "axios";
import copyToClipboard from "copy-to-clipboard";
import { Context } from "./Context/Context";
import { eloginStatus } from "./Context/types";
import router from "next/router";
export const SIZE_LIMIT = 100 * 1024 * 1024;

const token =
  "Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ";
export const upDataPorps = {
  showUploadList: false,
  name: "file",
  headers: {
    authorization: token,
  },
};

const DCPanel = styled(COL)<{ invisible: boolean }>`
  width: 348px;
  background: #ffffff;
  border-radius: 8px;
  align-items: flex-start;
  visibility: ${(p) => (p.invisible ? "invisible" : "visible")};

  .title {
    width: 100%;
    height: 65px;
    line-height: 65px;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
    text-align: left;
    padding-left: 20px;
  }

  .file_item {
    width: 100%;
    padding: 16px 24px;
    height: 78px;
    background: #eeeeee;

    .file_name {
      width: 100%;
      height: 22px;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 500;
      color: #333333;
      line-height: 22px;
      overflow: hidden;
    }

    .file_size {
      width: 100%;
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 4px;
    }
  }

  ${Phone} {
    width: calc(100% - 40px);
    max-width: 348px;
  }
`;
const CopyText = styled.span`
  position: absolute;
  width: 100%;
  top: -55px;
  text-align: center;
  left: 50%;
  transform: translateX(-53%);
  color: #fff;
  font-size: 24px;
`;

export default function Main() {
  const { state } = useContext(Context) as any;
  const { loginStatus } = state;
  const { isMobile } = useDevice();
  const [shareUrl, setShareUrl] = useState("");
  const [uploadFileTypeShow, setUploadFileTypeShow] = useState(false);
  const [gayewayList, setGayewayList] = useState<getgatewayListRes["data"]>([]);
  const [activeGateway, setActiveGateway] = useState<{
    host: string;
    nodeType: number;
    name: string;
  } | null>();
  const [upLoadStatus, setUpLoadStatus] = useState<string | undefined>(
    "initial"
  );
  const [fileList, setFileList] = useState<RcFile[]>([]);
  const [folder, setFolder] = useState("");
  const [folderSize, setFolderSize] = useState(0);

  const [copytips, setCopytips] = useState(false);
  const [percent, setPercent] = useState(0);
  const bodyBox = useRef(null);

  /**
   *每次上传后清除文件列表
   * */
  const removeFileList = () => {
    setFileList([]);
    setFolder("");
    setFolderSize(0);
    setUploadFileTypeShow(false);
  };

  /**
   *  复制
   * */
  const onClickCopy = () => {
    copyToClipboard(shareUrl);
    setCopytips(true);
    setTimeout(() => {
      setCopytips(false);
    }, 1500);
  };

  /**
   * 获取节点列表
   * */
  const getGatewayList = async () => {
    setLoc("token", token);
    try {
      const res = await GET_GATEWAY_LIST_API();
      setGayewayList([...res.data]);
      setActiveGateway(res.data[0]);
    } catch (e) {
      console.log(e);
    }
    localStorage.removeItem("token");
  };

  /**
   * 手动上传方法
   * */
  const handleUpload = async () => {
    if (folderSize > SIZE_LIMIT) {
      message.error("文件大小不能超过100M");
      return;
    }
    const formData = new FormData();
    fileList.forEach((item) => {
      formData.append("file", item);
    });

    try {
      setUpLoadStatus("uploading");
      const res = await axios.post(
        `${activeGateway?.host}/api/v0/add?pin=true`,
        formData,
        {
          headers: {
            authorization: token,
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.lengthComputable) {
              const complete =
                ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              const percent = complete;
              setPercent(percent);
            }
          },
        }
      );
      let Hash = "";
      let Name = "";

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
        setLoc("token", token);
        const updatares = await UPDATA_FILE_API({
          cid: Hash,
          name: Name,
        });
        localStorage.removeItem("token");
        setUpLoadStatus("finish");
        const { cid } = (updatares as any).pin;
        setShareUrl(
          `https://099equ.${activeGateway?.host.replace(
            "https://",
            ""
          )}/ipfs/${cid}`
        );
      } catch (err) {
        removeFileList();
        message.error("服务器异常,请稍后再试");
        setUpLoadStatus("initial");
        setPercent(0);
      }
    } catch (error) {
      removeFileList();
      message.error("服务器异常,请稍后再试");
      setUpLoadStatus("initial");
      setPercent(0);
    }
  };
  /**
   * 上传文件的组件
   * */
  const InputFile = () => {
    const isEn = i18next.language === "en";
    let fontSize = isEn ? 32 : 38;
    if (isMobile) fontSize = Math.round(fontSize * 0.7);
    return (
      <div>
        <div
          id="upload"
          className={s.inputFile}
          style={{ fontSize }}
          onClick={() => {
            setUploadFileTypeShow(!uploadFileTypeShow);
            // e.stopPropagation();
          }}
        >
          <FiPlus />
          <span
            style={{
              fontSize: "32px",
            }}
          >
            添加文件
          </span>
        </div>
        {uploadFileTypeShow && (
          <div className={s.uploadFileType}>
            <Upload
              className={s.uploadFileTypeItem}
              action={`${activeGateway?.host}/api/v0/add?pin=true`}
              {...upDataPorps}
              beforeUpload={ (file) => {
                setUpLoadStatus("success");
                setFileList([file]);
                return false;
              }}
            >
              <div className={s.box}>
                <GrDocument />
                <span className={s.uploadFileTypeItemText}>文件</span>
              </div>
            </Upload>

            <Upload
              className={s.uploadFileTypeItem}
              directory
              {...upDataPorps}
              beforeUpload={async (file: any) => {
                setFolder(
                  file.webkitRelativePath.substring(
                    0,
                    file.webkitRelativePath.indexOf("/")
                  )
                );

                const locFolder = fileList;
                locFolder.push(file);
                setFileList([...locFolder]);
                setUpLoadStatus("success");
                return false;
              }}
            >
              <div className={s.box}>
                <FiFolder
                  style={{
                    transform: "scale(1.2)",
                  }}
                />
                <span className={s.uploadFileTypeItemText}>文件夹</span>
              </div>
            </Upload>
          </div>
        )}
      </div>
    );
  };
  /**
   * 文件上传中的组件 展示进度
   * */
  const UploadingFile = () => {
    const stroke = isMobile ? 20 : 25;
    const margin = isMobile ? "0 15px" : "0 20px";
    return (
      <div className={s.inputFile}>
        <Progress
          strokeWidth={stroke}
          style={{ margin }}
          strokeColor={"#333333"}
          showInfo={false}
          percent={percent}
        />
      </div>
    );
  };
  /**
   *  分享文件的组件
   * */
  const UploadingFinish = () => {
    return (
      <div>
        {copytips && <CopyText>已复制链接</CopyText>}
        <div className={s.uploadFinish}>
          <div className={s.share_link}>
            <i className={s.icon}>
              <FiCheckCircle />
            </i>
            <span>{shareUrl}</span>
          </div>
          <div className={s.btns}>
            <div className={s.btn} onClick={onClickCopy}>
              分享链接
            </div>
            <div
              className={s.btn2}
              onClick={() => {
                removeFileList();
                setPercent(0);
                setUpLoadStatus("initial");
              }}
            >
              继续添加
            </div>
          </div>
        </div>
      </div>
    );
  };

  /**
   * 展示节点和文件列表的组件
   * */
  function DcPanelCom(list: getgatewayListRes["data"]) {
    return (
      <DCPanel invisible={false}>
        <div className={"title"}>
          {folder && folderSize ? "添加文件夹" : "添加文件"}
        </div>

        {folder && folderSize ? (
          <div className={"file_item"}>
            <div className={"file_name"}>
              {folder} （{fileList.length}个文件）
            </div>
            <div className={"file_size"}>{changeSize(folderSize)}</div>
          </div>
        ) : (
          <div
            style={{
              width: " 100%",
            }}
          >
            {fileList.map((item, index) => {
              return (
                <div key={index} className={"file_item"}>
                  <div className={"file_name"}>{item.name}</div>
                  <div className={"file_size"}>{changeSize(item.size)}</div>
                </div>
              );
            })}
          </div>
        )}

        <div
          style={{
            padding: "10px 0 0 20px",
          }}
        >
          <Dropdown
            overlay={
              <Menu>
                {list.map((item, index) => {
                  return (
                    <Menu.Item
                      key={index}
                      onClick={() => setActiveGateway(item)}
                    >
                      {item.name}
                    </Menu.Item>
                  );
                })}
              </Menu>
            }
          >
            <Space>
              上传节点: {activeGateway?.name} <FiChevronDown></FiChevronDown>
            </Space>
          </Dropdown>
        </div>
        <>
          <Button
            style={{
              width: "calc(100% - 40px)",
              height: 36,
              margin: "18px 20px",
            }}
            onClick={() => {
              handleUpload();
            }}
          >
            上传
          </Button>
        </>
      </DCPanel>
    );
  }

  useEffect(() => {
    if (loginStatus == eloginStatus.login) {
      router.replace("/panel/fileManager");
      return;
    }
    getGatewayList();
  }, []);

  useEffect(() => {
    const totalSize = fileList
      .map((item) => item.size)
      .reduce((prev, curr) => prev + curr, 0);
    setFolderSize(totalSize);
  }, [fileList]);

  return (
    <div
      className={classNames(s.main, isMobile && s.main_mobile)}
      ref={bodyBox}
      // onClick={() => {
      //   setUploadFileTypeShow(false);
      // }}
    >
      <BgAnim />
      <div className={s.content}>
        <div className={s.auto_padding} />

        {upLoadStatus !== "success" && (
          <div className={s.input_btn}>
            <div className={s.baseFile} />
            {upLoadStatus == "initial" && InputFile()}
            {upLoadStatus == "uploading" && UploadingFile()}
            {upLoadStatus == "finish" && UploadingFinish()}
          </div>
        )}
        {upLoadStatus == "success" && DcPanelCom(gayewayList)}

        {
          <div className={s.homeSlog}>
            <span className={s.title}>百工链存-创新性分布式存储</span>
            <p className={s.info}>
              百工链存探索与拓宽分布式存储技术的发展潜力与应用边界，为企业级IPFS存储需求提供完整可用的解决方案。
            </p>
          </div>
        }
        <div className={s.auto_padding} />
      </div>
      {
        <div
          className={
            "text-12 text-gray-300 bottom-1 absolute h-12 md:h-auto w-full flex flex-wrap md:flex-nowrap " +
            " justify-center gap-2.5 items-center mb-2"
          }
          style={{
            fontSize: "14px",
            color: "#999999",
          }}
        >
          <div className={"w-full text-center md:w-auto"}>
            百工智联（上海）工业科技有限公司
          </div>
          <a
            className={"md:hover:text-white"}
            style={{
              fontSize: "14px",
              color: "rgb(153, 153, 153)",
            }}
            target={"_blank"}
            rel="noreferrer"
            href={
              "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2022024704"
            }
          >
            沪ICP备2022024704号
          </a>
          <a
            style={{
              fontSize: "14px",
              color: "rgb(153, 153, 153)",
            }}
            className={"md:hover:text-white"}
            target={"_blank"}
            rel="noreferrer"
            href={"https://beian.miit.gov.cn/"}
          ></a>
          <a
            style={{
              fontSize: "14px",
              color: "rgb(153, 153, 153)",
            }}
            target={"_blank"}
            rel="noreferrer"
            className={"md:hover:text-white"}
            href={"/termofuse"}
          >
            用户协议
          </a>
          <a
            style={{
              fontSize: "14px",
              color: "rgb(153, 153, 153)",
            }}
            className={"md:hover:text-white"}
            target={"_blank"}
            href={"/privacy"}
            rel="noreferrer"
          >
            隐私政策
          </a>
        </div>
      }
    </div>
  );
}
