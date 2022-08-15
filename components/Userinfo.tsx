import react, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {FiChevronDown} from "react-icons/fi";
import Button from "./common/Button";
import {useRouter} from "next/router";
import React from "react";
import {TipsWhite} from "./common/tips";
import {useUser} from "../lib/useUser";
import {Phone} from "../src/assets/style";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Phone}{
    padding-right: 12px;
  }
`
const DropDown = styled.div`
  position: relative;
`

interface IDropDownBtn {
  show?: boolean
}

const DropDownBtn = styled.div<IDropDownBtn>`
  display: inline-block;
  position: absolute;
  left: 25px;
  top: 40px;
  width: 78px;
  height: 36px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 36px;
  text-align: center;
  visibility: hidden;
  ${props => props.show && css`
    visibility: visible;

  `}
`
const IconWrapper = styled.div<{ fold: boolean }>`
  display: inline-block;
  transition: all 0.2s cubic-bezier(.09, .71, 1, .62);
  vertical-align: top;
  ${p => p.fold ? 'transform:rotate(-180deg);' : ''}
`
const UserName = styled.div`
  display: inline-block;
  height: 100%;
  width: min-content;
  max-width: 80px;
  padding-left: 5px;
  padding-right: 8px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const CButton = styled(Button)`
  ${Phone}{
    width: 62px;
    height: 28px;
    background: #2CC8C2;
    border-radius: 4px;
    font-size: 14px;
  }

`



const needLogin = [
  '/panel',
  '/panel/api',
  '/panel/fileManager',
  '/panel/profile',
  '/billing',
  '/bind_phone'
]

const isNeedLogin = ( path: string) => {
 return  needLogin.findIndex((item) => item === path) >= 0
}

const needUnlogin = [
  '', '/', '/pricing','/signup','/login'
]
const isNeedUnlogin = (path: string) => {
  return needUnlogin.findIndex(item => item === path) >= 0
}

const Userinfo: react.FC = () => {
  const [fold, toggleFold] = useState(true);
  const router = useRouter()
  const {user,update} = useUser()
  const {t} = useTranslation()
  const handleToggle = () => {
    toggleFold(!fold)
  }
  const handleLogin = () => {
    router.push('/login')
  }
  const handleSignup = () => {
    router.push('/signup')
  }
  const handleLogout = () => {
    update(null)
    window.localStorage.removeItem('JWT')
    window.localStorage.removeItem('userinfo')
    window.localStorage.removeItem('showNeedBindGithubAccountDot')
    toggleFold(true)
    router.push('/login')
  }

  const nickName = user ? user.nickName : ''

  useEffect(() => {
    if (user && !user.userRsaPrivateKey && router.pathname !== '/login'){
      window.localStorage.removeItem('JWT')
      window.localStorage.removeItem('userinfo')
      window.localStorage.removeItem('showNeedBindGithubAccountDot')
      update(null)
      router.replace('/login')
      return
    }

    if (!user && isNeedLogin(router.pathname)) {
      router.push('/login')
    }
    if (user && isNeedUnlogin(router.pathname)) {
      router.push('/panel')
    }

  }, [router.pathname, user])
  return <Wrapper>{
    !user ? <>
        {
          router.pathname === '/login' ?
            <CButton onClick={handleSignup}>{t('Sign Up')}</CButton> :
            <CButton onClick={handleLogin}>{t('Login')}</CButton>
        }
      </>
      :
      <>
        <DropDown>
          <div onClick={handleToggle} style={{display: "inline-block", paddingTop: 8}}>
            <TipsWhite title={nickName} autoAdjustOverflow={false} placement={'left'}>
              <UserName>
                {nickName}
              </UserName>
            </TipsWhite>
            <IconWrapper fold={fold}> <FiChevronDown/></IconWrapper>
          </div>
          <DropDownBtn onClick={handleLogout} show={!fold} className="btn">{t("Logout")}</DropDownBtn>
        </DropDown>
      </>
  }</Wrapper>
}
export default Userinfo
