import styled from "styled-components";
import { COL, Row, RowFill, SpaceW } from "./common/layouts";
import {
  FiFileText,
  FiGitCommit,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import {AiOutlineQuestionCircle} from "react-icons/ai"
import { IconType } from "react-icons";
import FileManager from "./FileManager";
import React, { useState } from "react";
import Api from "./Api";
import Profile from "./Profile";
import HelpAndReport from './HelpAndReport'
import { NavOtherLayout } from "./nav";
import { useRouter } from "next/router";
import { MBadge } from "./common/badge";
import { Phone } from "../src/assets/style";

const AnimDuration = "300ms";
const Side = styled(COL)<{ show: boolean }>`
  align-items: flex-start;
  width: 256px;
  background: white;
  height: 100%;
  padding: 16px;
  flex-shrink: 0;
  transition: all ease-in-out ${AnimDuration};
  position: relative;
  ${Phone} {
    transform: ${(p) => (p.show ? "translateX(0px)" : "translateX(-256px)")};
  }
`;

const MRowFill = styled(RowFill)<{ showSide: boolean }>`
  overflow: hidden;
  position: relative;

  .menu_icon {
    visibility: hidden;
    position: absolute;
    transition: left ease-in-out ${AnimDuration};
    left: ${(p) => (p.showSide ? "256px" : "0px")};
    bottom: 30px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 20px;
    height: 30px;
    padding: 0 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 0 5px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Phone} {
      visibility: visible;
    }
  }
`;

const Content = styled.div<{ showSide: boolean }>`
  width: calc(100% - 256px - 12px);
  background: white;
  height: 100%;
  transition: all ease-in-out ${AnimDuration};
  flex-shrink: 0;
  ${Phone} {
    width: 100%;
    transform: ${(p) =>
      p.showSide ? "translateX(0px)" : "translateX(-268px)"};
  }
`;

const ItemTab = styled(Row)<{ selected: boolean }>`
  height: 41px;
  width: 100%;
  cursor: pointer;
  ${(p) => `color: ${p.selected ? "#2CC8C2" : "#666666"}`};
  font-size: 18px;
  position: relative;

  span {
    font-size: 18px;
    ${(p) => `color: ${p.selected ? "#2CC8C2" : "#666666"}`};

    &:hover {
      ${(p) => `color: ${p.selected ? "#15C1BA" : "#333333"}`};
    }
  }

  &:hover {
    ${(p) => `color: ${p.selected ? "#15C1BA" : "#333333"}`};
  }
`;

interface ComMap {
  fileManager: any;
  api: any;
  profile: any;
  helpAndReport:any;
}

type TAB = keyof ComMap;

export interface Tab {
  name: string;
  icon: IconType | any;
  id: TAB;
  badge?: boolean;
  showBadge?: boolean;
}

const tabs: Tab[] = [
  { name: "文件管理", icon: FiFileText, id: "fileManager" },
  { name: "API", icon: FiGitCommit, id: "api" },
  { name: "用户信息", icon: FiUser, id: "profile" },
  { name: "帮助与报告", icon: AiOutlineQuestionCircle, id: "helpAndReport" },
];

const comMap: ComMap = {
  fileManager: FileManager,
  api: Api,
  profile: Profile,
  helpAndReport:HelpAndReport
};

export interface PropsPanel {
  tab: TAB;
}

export function Panel(p: PropsPanel) {
  const ContentCom = comMap[p.tab];
  const router = useRouter();
  const [showSide, setShowSide] = useState(false);
  const mTabs = tabs.map((tab) => {
    tab.showBadge = false;
    return tab;
  });
  return (
    <NavOtherLayout>
      <MRowFill showSide={showSide}>
        <div className={"menu_icon"} onClick={() => setShowSide(!showSide)}>
          {showSide ? <FiX /> : <FiMenu />}
        </div>
        <Side show={showSide}>
          {mTabs.map((item) => (
            <ItemTab
              key={item.id}
              selected={item.id === p.tab}
              onClick={() => {
                setShowSide(false);
                router.push(`/panel/${item.id}`);
              }}>
              <item.icon />
              <SpaceW />
              <MBadge visible={item.showBadge}>
                <span style={{
                  fontSize:'16px'
                }}>{item.name}</span>
              </MBadge>
            </ItemTab>
          ))}
        </Side>
        <SpaceW style={{ background: "#f8f8f8" }} />
        <Content showSide={showSide}>
          <ContentCom />
        </Content>
      </MRowFill>
    </NavOtherLayout>
  );
}
