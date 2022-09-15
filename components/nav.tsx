import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import React from "react";
import Userinfo from "./Userinfo";
import _ from "lodash";
import styled, { css } from "styled-components";
import { WIKI_URL } from "../src/helper/const";
import { useUser } from "../lib/useUser";
import { Phone, useDevice } from "../src/assets/style";
import { Drawer } from "antd";
import { FiMenu, FiX } from "react-icons/fi";
import { COL, Row, SpaceW } from "./common/layouts";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";

export const NavOtherLayout = styled.div`
  height: calc(100% - 80px);
  margin-top: 68px;

  ${Phone} {
    height: calc(100% - 60px);
    margin-top: 60px;
  }
`;

const NavDiv = styled.div<{ isHome: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 68px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: white;
  box-sizing: border-box;
  background-color: black;
  ${(props) =>
    props.isHome &&
    css`
      background-color: transparent;
    `};

  .nav_right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav_left {
    font-size: 24px;
    display: flex;
    align-items: center;

    .split {
      display: inline-block;
      margin-left: 15px;
      margin-right: 15px;
      vertical-align: bottom;
      width: 1px;
      height: 18px;
      background-color: #999999;

      ${Phone} {
        height: 12px;
        margin-right: 10px;
        margin-left: 10px;
      }
    }

    span {
      display: inline-block;
      vertical-align: bottom;
      font-weight: 400;
      line-height: 24px;
      font-size: 14px;
    }
    a {
      font-size: 14px;
    }
  }

  .item {
    display: inline-block;
    padding-right: 20px;
    font-size: 14px;
    cursor: pointer;
    color:#fff !important;

    &:hover {
      color: #2cc8c2;
    }
  }
  ${Phone} {
    padding: 0 20px;
    height: 56px;
  }
`;

const Menus = styled(COL)`
  color: white;
  align-items: flex-start;

  .item {
    display: inline-block;
    padding-right: 20px;
    font-size: 18px;
    cursor: pointer;
    ${Phone} {
      padding: 10px 20px 10px;
    }
    &:hover {
      color: #2cc8c2;
    }
  }
`;
export const getLogo = (isMobile: boolean) => {
  return {
    src: "/logo.png",
    width: isMobile ? 60 : 110,
    height: isMobile ? 20 : 37,
  };
};

const NAV_TITLE = {
  "/billing": "Upgrade & Renew",
  "/pricing": "Pricing",
  "/pay": "Pay",
};

const getNavTitle = (path: string) => {
  if (path.startsWith("/panel")) {
    return "控制台";
  }
  return _.get(NAV_TITLE, path, "");
};
// const langMap: any = {
//   en: '中',
//   zhCN: 'EN'
// }
const MMenu = styled(FiMenu)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Nav = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { isMobile } = useDevice();
  const [visible, setVisible] = useState(false);
  const isHome = router.pathname === "/";
  const handleLogoClick = useCallback(() => {
    router.push("/");
  }, []);
  const navTitle = getNavTitle(router.pathname);
  const showNavTitle = !!navTitle;
  const panelStyle = { fontSize: 18 };
  if (isMobile) panelStyle.fontSize = 12;
  const { user } = useUser();
  const unPrice = router.pathname !== "/pricing";
  const showDocumentation = unPrice;
  const showMenu = showDocumentation;

  return (
    <NavDiv isHome={isHome}>
      <div className={"nav_left"}>
        <img
          onClick={handleLogoClick}
          alt="LOGO"
          className={"pointer"}
          {...getLogo(isMobile)}
        />
        {showNavTitle && <div className={"split"} />}
        {showNavTitle && (
          <span style={{ color: "#CCCCCC", ...panelStyle }}>{navTitle}</span>
        )}
      </div>
      {isMobile ? (
        <>
          <Row>
            {user ? (
              <>
                <Userinfo />
                <SpaceW />
                {showMenu && <MMenu onClick={() => setVisible(true)} />}
              </>
            ) : (
              <>
                {showMenu && <MMenu onClick={() => setVisible(true)} />}
                <SpaceW />
                <Userinfo />
              </>
            )}
          </Row>
          <Drawer
            visible={visible}
            onClose={() => setVisible(false)}
            placement={"right"}
            height={120}
            closeIcon={<FiX color={"#fff"} size={24} />}
            contentWrapperStyle={{ background: "gray" }}
            drawerStyle={{ background: "rgb(45,45,45)" }}
          >
            <Menus>
              {showDocumentation && (
                <span
                  className={"item"}
                  children={t("Documentation")}
                  onClick={() => {
                    setVisible(false);
                    window.open(WIKI_URL, "_blank");
                  }}
                />
              )}
            </Menus>
          </Drawer>
        </>
      ) : (
        <div className={"nav_right"}>
          {showDocumentation && (
            <div>
              <a
                rel="noreferrer"
                href={"https://beta-docs.baitech-ipfs.net/"}
                className={"item"}
                target="_blank"
              >
                文档
              </a>
              <a
                rel="noreferrer"
                href={"mailto:may.to@baitech.com"}
                className={"item"}
                target="_blank"
              >
                联系我们
              </a>
            </div>
          )}
          <Userinfo />
        </div>
      )}
    </NavDiv>
  );
};

export default Nav;
