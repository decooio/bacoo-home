import s from "./main.module.scss";
// import RightSlide from "./RightSlide";
import { useT, useToast } from "../src/hooks/utils";
import { FiArrowUp, FiCheckCircle, FiPlus } from "react-icons/fi";
import { GrDocument, GrFolder } from "react-icons/gr";

import React, { ChangeEvent, useRef, useState } from "react";
import { ErrorDist, fileSizeLimitMb } from "../src/helper/const";
import i18next from "i18next";
import BgAnim from "./effect/BgAnim";
// import {pinFile} from "../lib/http";
import styled from "styled-components";
import { apiToGateway, formatSize, getMsg } from "../src/helper/utils";
import { Phone, useDevice } from "../src/assets/style";
import classNames from "classnames";
import { PinRes } from "@decooio/sdk/src/types";
import { COL } from "./common/layouts";
import { DecooIo, useDecooIo } from "../lib/useDecooIo";
import Button from "./common/Button";
import { EndpointSelect } from "./endpoint/EndpointSelect";
import { FaRegHourglass } from "react-icons/fa";
import { Anim } from "./common/Anim";
import { Progress } from "antd";
import copyToClipboard from "copy-to-clipboard";
import { getStrKey } from "../src/helper/oed";

const UpState = {
  init: "init",
  init2: "init2",
  up: "up",
  upFinish: "up-finish",
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

interface DcPanelComProps {
  file: File;
  doUpFile: (file: File) => void;
  decooIo: DecooIo;
}

function DcPanelCom(props: DcPanelComProps) {
  const { file, doUpFile, decooIo } = props;
  return (
    <DCPanel invisible={!decooIo.endpoint}>
      <div className={"title"}>Add File</div>
      <div className={"file_item"}>
        <div className={"file_name"}>{file.name}</div>
        <div className={"file_size"}>{formatSize(file.size)}</div>
      </div>
      {decooIo.endpoint ? (
        <>
          <EndpointSelect decooIo={decooIo} />
          <Button
            style={{
              width: "calc(100% - 40px)",
              height: 36,
              margin: "18px 20px",
            }}
            onClick={() => doUpFile(file)}
          >
            <FiArrowUp />{" "}
          </Button>
        </>
      ) : (
        <Anim
          name={"rotate"}
          duration={"1.5s"}
          style={{ marginTop: 60, width: 20, height: 20 }}
        >
          <FaRegHourglass size={20} />
        </Anim>
      )}
    </DCPanel>
  );
}

export default function Main() {
  const { t } = useT();
  const { isMobile } = useDevice();
  const [upState, setUpState] = useState(UpState.init);
  const isInit = upState === UpState.init;
  const isInit2 = upState === UpState.init2;
  const isUp = upState === UpState.up;
  const isUpFinish = upState === UpState.upFinish;
  const [shareUrl, setShareUrl] = useState("");
  const [showDc, setShowDc] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const toast = useToast();
  const decooIo = useDecooIo();
  // const {upload, progress} = useUpload()
  const [progress, setProgress] = useState(0);
  const [uploadFileTypeShow, setUploadFileTypeShow] = useState(false);

  const updateProgress = (p: number, auto = false) => {
    setProgress((oldP) => {
      if (auto) {
        const nP = oldP + p;
        return nP <= 99 ? nP : 99;
      }
      if (oldP > p) return oldP;
      return p;
    });
  };

  const inputFile = useRef<HTMLInputElement>(null);
  const onClickAdd = () => {
    const event = new MouseEvent("click");
    inputFile?.current?.dispatchEvent(event);
  };

  const doUpFile = (file: File) => {
    console.log(doUpFile);
    
    if (!decooIo.client || !file) return;
    setUpState(UpState.up);
    setShowDc(false);
    decooIo.client
      .pinFile(file, (p) => {
        updateProgress(p * 100);
      })
      .then((data: PinRes) => {
        console.info("pinFile", data);
        setUpState(UpState.upFinish);
        // clearInterval(autoProgress)
        setShareUrl(`${data.PinHash}?filename=${file.name}`);
        setProgress(0);
      })
      .catch((e: any) => {
        // clearInterval(autoProgress)
        setProgress(0);
        setUpState(UpState.init);
        toast.show(getMsg(e, "Upload Error"), 5000);
      });
  };

  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    // check null
    if (!e.target.files || e.target.files.length === 0 || !e.target.files[0])
      return;
    const file = e.target.files[0];
    e.target.value = "";
    if (file.size > fileSizeLimitMb * 1024 * 1024) {
      toast.show(t(ErrorDist.FileSizeError), 5000);
      return;
    }
    setFile(file);
    setShowDc(true);
  };

  const onClickCopy = () => {
    if (!decooIo.endpoint) return;
    copyToClipboard(
      `${apiToGateway(decooIo.endpoint.apiHost)}/ipfs/${shareUrl}`
    );
    toast.show(t("copied"));
  };

  const InputFile = () => {
    const isEn = i18next.language === "en";

    let fontSize = isEn ? 32 : 38;
    if (isMobile) fontSize = Math.round(fontSize * 0.7);
    return (
      <div>
        <div
          className={s.inputFile}
          style={{ fontSize }}
          onClick={() => {
            uploadFileTypeShow
              ? setUploadFileTypeShow(false)
              : setUploadFileTypeShow(true);
          }}
        >
          <FiPlus />
          <span>添加文件</span>
        </div>
        {uploadFileTypeShow && (
          <div className={s.uploadFileType}>
            <div className={s.uploadFileTypeItem} onClick={onClickAdd} >
              <GrDocument />
              <span className={s.uploadFileTypeItemText}>文件</span>
            </div>
            <div className={s.uploadFileTypeItem}>
              <GrFolder />
              <span className={s.uploadFileTypeItemText}>文件夹</span>
            </div>
          </div>
        )}
      </div>
    );
  };

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
          percent={progress}
        />
      </div>
    );
  };

  const UploadingFinish = () => {
    return (
      <div className={s.uploadFinish}>
        <div className={s.share_link}>
          <i className={s.icon}>
            <FiCheckCircle />
          </i>
          <span>{shareUrl}</span>
        </div>
        <div className={s.btns}>
          <div className={s.btn} onClick={onClickCopy}>
            {t("Share Link")}
          </div>
          <div className={s.btn2} onClick={onClickAdd}>
            {t("Continue to add")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classNames(s.main, isMobile && s.main_mobile)}>
      <BgAnim />
      <div className={s.content}>
        <div className={s.auto_padding} />
        {!showDc && (
          <div className={s.input_btn}>
            <input
              ref={inputFile}
              type={"file"}
              onChange={onFileSelected}
              style={{ visibility: "hidden", height: 0, display: "none" }}
            />
            <div className={s.toast}>{toast.Toast()}</div>
            <div className={s.baseFile} />
            {(isInit || isInit2) && InputFile()}
            {isUp && UploadingFile()}
            {isUpFinish && UploadingFinish()}
          </div>
        )}
        {showDc && file && (
          <DcPanelCom file={file} doUpFile={doUpFile} decooIo={decooIo} />
        )}
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
        >
          <div className={"w-full text-center md:w-auto"}>
            上海脆皮网络科技有限公司 Decoo Technologies Co.,Ltd
          </div>
          <a
            className={"md:hover:text-white"}
            target={"_blank"}
            rel="noreferrer"
            href={
              "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010902003263"
            }
          >
            沪公网安备 31010902003263号
          </a>
          <a
            className={"md:hover:text-white"}
            target={"_blank"}
            rel="noreferrer"
            href={"https://beian.miit.gov.cn/"}
          >
            沪ICP备2021017037号-1
          </a>
          <a className={"md:hover:text-white"} href={"/termofuse"}>
            用户协议
          </a>
          <a
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
