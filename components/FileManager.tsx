import { COL, Row, RowFill, SpaceH } from "./common/layouts";
import Button from "./common/Button";
import { FiBox, FiDownload, FiPlus } from "react-icons/fi";
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
  const { t } = useT();
  const inputFile = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<IFile[]>([
    {
      cosUrl: null,
      createAt: 123,
      cumulativeSize: 123,
      deleteTime: "",
      fileName: "",
      folderPinHash: "",
      id: 123,
      ipfsPinHash: "",
      lastUpdateAt: 123,
      metaData: "",
      orderId: "",
      pinAt: 123,
      state: 123,
      thirdParty: 123,
      userId: 123,
      uuid: "",
    },
  ]);

  const { showAppLoading } = useLoading();

  const setPageIndex = () => {};

  return (
    <MCol>
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
                <Tips title="文件名Tips">
                  <MText>文件名</MText>
                </Tips>
              </Text>
              <CopyText flex={6}>cid</CopyText>
              <CopyText flex={6}>地址</CopyText>

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
              <Text flex={1}>18kb</Text>
              <Text flex={3}>时间戳</Text>
            </RowFill>
          );
        })}
      </Table>
      <Pager pageSize={10} pageIndex={1} setPageIndex={setPageIndex} />
    </MCol>
  );
}
