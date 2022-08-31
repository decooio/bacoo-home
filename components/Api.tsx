import {COL, RowFill, SpaceH} from "./common/layouts";
import styled from "styled-components";
import {CopyText, TextTitle, Text} from "./common/texts";
import {useEffect, useState} from "react";
import {getApiKeys} from "../lib/http";
import {Api as ApiType} from "../src/types/manager";
import {useUser} from "../lib/useUser";
import React from "react";
import {useTranslation} from "react-i18next";
import {Phone, useDevice} from "../src/assets/style";

const MCol = styled(COL)`
  padding: 32px;
  align-items: flex-start;

  ${Phone} {
    padding: 20px;
  }
`

const Table = styled(COL)`
  width: 100%;
  margin-top: 32px;
  flex: 1;
  overflow: auto;
  align-items: flex-start;
  ${Phone}{
    margin-top: 18px;
  }
`
const Verification = styled(COL)`
  padding: 28px 32px 12px 52px;
  width: calc(100% + 62px);
  margin-top: -32px;
  margin-left: -32px;
  flex-shrink: 0;
  align-items: flex-start;

  ${Phone} {
    width: 100%;
    padding: 4px 0;
    margin-top: 0;
    margin-left: 0;
  }
`

const styleItemTxt = {
  paddingLeft: 20,
  paddingRight: 0
}
const styleItemTxt_phone = {
}
// const apis: any[] = [1, 2]
export default function Api() {
  const [apis, setApis] = useState<ApiType[]>([])
  const {user} = useUser()
  const {t} = useTranslation()
  const device = useDevice();
  const styleItem = device.isMobile? styleItemTxt_phone: styleItemTxt;
  const flexRight = device.isMobile? 1:5;
  return <MCol>
    <Verification>
      <TextTitle flex={1}>{t("Verification Key")}</TextTitle>
      <CopyText flex={1} style={{width: '100%'}}>{user?.userRsaPrivateKey}</CopyText>
    </Verification>
    <SpaceH style={{width: 'calc(100% + 64px)', background: '#f8f8f8', marginLeft: -32,}}/>
    <Table>
      <RowFill style={{height: 37}}>
        <TextTitle flex={4} style={styleItem}>{t("API JWT")}</TextTitle>
        <TextTitle flex={flexRight} style={styleItem}>{t("Status")}</TextTitle>
      </RowFill>
      {
        apis.map((item, index) =>
          <RowFill key={`apis_${index}`} style={{height: 44, borderTop: '1px solid #eeeeee'}}>
            <CopyText flex={4} style={styleItem}>{item.jwt}</CopyText>
            <Text flex={flexRight} style={styleItem}>{item.status === 0 ? 'Valid' : 'Invalid'}</Text>
          </RowFill>)
      }
      <RowFill style={{height: 44, borderTop: '1px solid #eeeeee'}}/>
    </Table>
  </MCol>
}
