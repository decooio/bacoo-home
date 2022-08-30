import { COL, Row, RowFill, SpaceH } from "./common/layouts";
import Button from "./common/Button";
import { FiDownload, FiPlus } from "react-icons/fi";
import styled from "styled-components";
import { CopyText, EmptyText, Text, TextTitle } from "./common/texts";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { DOWN_GATEWAY, fileSizeLimitMb, GATEWAY } from "../src/helper/const";
import { createTokenSource, getFiles, getFilesCount } from "../lib/http";
import { IFile } from "../src/types/manager";
import {
  apiToDownload,
  apiToGateway,
  formatTime,
  getMsg,
} from "../src/helper/utils";
import { Pager } from "./common/Pager";
import _ from "lodash";
import { useLoading, withLoading } from "./common/Loading";
import { Tips } from "./common/tips";
import React from "react";
import { useError, useT } from "../src/hooks/utils";
import { Alert, Modal, Progress } from "antd";
import { CancelTokenSource } from "axios";
import { usePlanDetails, useUser } from "../lib/useUser";
import { TFunction } from "react-i18next";
import { useDecooIo } from "../lib/useDecooIo";
import { Phone } from "../src/assets/style";
import { EndpointSelect } from "./endpoint/EndpointSelect";
import { Anim } from "./effect/Anim";
import { FaRegHourglass } from "react-icons/fa";

const Table = styled(COL)`
  width: calc(100% - 62px);
  flex: 1;
  overflow: auto;
  ${Phone} {
    width: 100%;
  }
`;
const MCol = styled(COL)`
  padding: 32px 32px 20px 32px;
  align-items: flex-start;
  height: 100%;
  ${Phone} {
    padding: 24px;
  }
`;

const MText = styled.div`
  width: min-content;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DownBtn = styled.div<{ invisible?: boolean }>`
  width: 38px;
  color: #808080;
  flex-shrink: 0;
  cursor: pointer;
  font-size: 14px;
  text-decoration: unset;
  opacity: ${(p) => (p.invisible ? 0 : 1)};

  :hover {
    color: #666666;
  }
`;

const AddFilePanel = styled(Row)`
  ${Phone} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const MBtn = styled(Button)`
  width: 230px;
  height: 48px;
  font-size: 24px;

  ${Phone} {
    font-size: 22px;
    width: 100%;
  }
`;
const illegalFile = (f: IFile) => {
  return f.state === -3;
};

const getPinFileHash = (f: IFile) => {
  if (illegalFile(f)) return "********";
  return f.ipfsPinHash;
};

const getLink = (f: IFile, t: TFunction<string>, host?: string) => {
  if (illegalFile(f)) return t("File Illegal");
  return `${apiToGateway(host) ?? GATEWAY}/ipfs/${f.ipfsPinHash}?filename=${
    f.fileName
  }`;
};

export default function FileManager() {
  const { t } = useT();
  const inputFile = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<IFile[]>([]);
  const [fileCount, setFileCount] = useState(0);
  const [page, setPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cancelUp, setCancelSource] = useState<CancelTokenSource | null>(null);
  const { showAppLoading } = useLoading();
  const decooIo = useDecooIo();
  const onError = useError();
  const { user } = useUser();
  const { plan } = usePlanDetails(user);
  const setPageIndex = (pIndex: number) => {
    setPage(pIndex + 1);
  };
  const loadFiles = () => {
    withLoading(getFiles(page).then(setFiles)).catch(onError);
  };
  const loadFileCount = () => {
    getFilesCount().then(setFileCount).catch(onError);
  };
  useEffect(() => {
    loadFiles();
  }, [page]);
  useEffect(() => {
    loadFileCount();
  }, []);

  const onFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !e.target.files[0])
      return;
    const file = e.target.files[0];
    e.target.value = "";
    if (file.size > fileSizeLimitMb * 1024 * 1024) {
      onError(null, t("FileSizeError"));
      return;
    }
    if (plan && plan.maxSize - plan.usedSize < file.size) {
      onError(null, t("Insufficient remaining storage space"));
      return;
    }
    setUploading(true);
    setErrorMsg(null);
    const source = createTokenSource();
    setCancelSource(source);
    decooIo.client
      ?.pinFile(
        file,
        (p: any) => {
          console.info("progress:", p);
          setProgress(_.round(p * 99));
        },
        source
      )
      .then(() => {
        setProgress(100);
        loadFiles();
        loadFileCount();
      })
      .catch((e: Error) => {
        const isCancel = e.message && e.message === "Cancel";
        if (!isCancel) {
          setErrorMsg(getMsg(e, "Upload Failed"));
        }
      });
  };
  const onClickAdd = useCallback(() => {
    const event = new MouseEvent("click");
    inputFile.current?.dispatchEvent(event);
  }, []);

  return (
    <MCol>
      <input
        ref={inputFile}
        type={"file"}
        onChange={onFileSelected}
        style={{ visibility: "hidden", height: 0 }}
      />
      <AddFilePanel>
        {decooIo.endpoint ? (
          <>
            <MBtn onClick={onClickAdd}>
              <Row>
                <FiPlus style={{ marginRight: 12 }} />
                {t("Add File")}
              </Row>
            </MBtn>
            <EndpointSelect decooIo={decooIo} />
          </>
        ) : (
          <Anim name={"rotate"} style={{ margin: 20, width: 20, height: 20 }}>
            <FaRegHourglass size={20} />
          </Anim>
        )}
        <Modal
          visible={uploading}
          footer={null}
          centered
          focusTriggerAfterClose={true}
          title={t("Upload File")}
          closable={true}
          onCancel={() => {
            if (cancelUp) cancelUp.cancel("Cancel");
            setErrorMsg(null);
            setUploading(false);
            setProgress(0);
          }}
          destroyOnClose={false}
          maskClosable={false}>
          {errorMsg !== null && (
            <Alert
              type={"error"}
              style={{ borderRadius: 4, overflow: "hidden" }}
              message={errorMsg}
              afterClose={() => setErrorMsg(null)}
            />
          )}
          {errorMsg !== null && <SpaceH />}
          <Progress
            strokeWidth={20}
            strokeColor={"#333333"}
            status={progress === 100 ? "success" : "active"}
            showInfo
            percent={progress}
          />
        </Modal>
      </AddFilePanel>

      <Table>
        <RowFill style={{ height: 37 }}>
          <TextTitle flex={2}>文件名</TextTitle>
          <TextTitle flex={6}>CID</TextTitle>
          <TextTitle flex={6}>访问域名</TextTitle>
          <TextTitle flex={1}>体积</TextTitle>
          <TextTitle flex={3}>Pin时间戳</TextTitle>

        </RowFill>
        {files.length === 0 && !showAppLoading && (
          <EmptyText>{t("empty")}</EmptyText>
        )}
        {files.map((file, index) => {
          const illegal = illegalFile(file);
          return (
            <RowFill
              key={`file_${index}`}
              style={{ height: 44, borderTop: "1px solid #eeeeee" }}>
              <Text flex={1}>
                <Tips title={file.fileName}>
                  <MText>{file.fileName}</MText>
                </Tips>
              </Text>
              <CopyText flex={2}>{getPinFileHash(file)}</CopyText>
              <CopyText flex={2}>
                {getLink(file, t, decooIo.endpoint?.apiHost)}
              </CopyText>
              <DownBtn
                onClick={() => {
                  if (illegal) return;
                  window.open(
                    `${
                      apiToDownload(decooIo.endpoint?.apiHost) ?? DOWN_GATEWAY
                    }/ipfs/${file.ipfsPinHash}`,
                    "_blank"
                  );
                }}
                invisible={illegal}>
                <FiDownload />
              </DownBtn>
              <Text flex={1}>{formatTime(file.pinAt)}</Text>
            </RowFill>
          );
        })}
      </Table>
      <Pager
        pageSize={_.ceil(fileCount / 10)}
        pageIndex={page - 1}
        setPageIndex={setPageIndex}
      />
    </MCol>
  );
}
