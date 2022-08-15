import React, {useCallback, useEffect, useState} from "react";
import Button from '../../components/common/Button';
import Captcha from '../../components/Captcha';
import styled, {css} from "styled-components";
import Input from "../../components/common/Input";
import {singUp, login, resendEmail, resetPwd} from "../../lib/http";
import ErrorMsg from "../../components/common/ErrorMsg";
import {getLogoDark, getMsg, validate} from '../../src/helper/utils';
import {useRouter} from "next/router";
import {isBaitech} from "../../src/helper/const";
import {useLoading} from "../../components/common/Loading";
import {Info} from "../../components/Profile";
import {useUser} from "../../lib/useUser";
import {Trans, useTranslation} from "react-i18next";
import {Checkbox} from "antd";
import {Phone} from "../../src/assets/style";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormWrapper = styled.div`
  @media (min-width: 768px){
    width: 457px;  
  }
`
export const Logo = styled.embed`
  width: 165px;
  //height: 55px;
  margin-bottom: 63px;
`
export const ConfirmMessage = styled.p`
  text-align: left;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
  font-size: 14px;
  padding-bottom: 20px;
`
const ErrorWrapper = styled.div<{ isSignup: boolean }>`
  width: 100%;
  text-align: left;
  position: absolute;
  bottom: 100px;
  ${props => props.isSignup && css`
    bottom: 80px;
  `}
  ${Phone} {
    padding-left: 15px;
  }
`

const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding-top: 19px;

  span {
    font-size: 16px;
  }
`

enum ERegisterState {
  Filling,
  Verifying
}

const getThirdParty = () => {
  if (isBaitech) return 2
  return 0
}

const mlinksyle = {
  paddingLeft: 20
}
export default function () {
  const router = useRouter()
  const [slideShow, toggleSlideShow] = useState(false)
  const {setShowAppLoading} = useLoading()
  const [email, setMailbox] = useState('')
  const [password, setPassword] = useState('')
  const [nickName, setNickName] = useState('')
  const [registerState, setRegisterState] = useState<ERegisterState>(0);
  const [userId, setUserId] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [errMsg1, setErrMsg1] = useState('')
  const [info, setInfo] = useState('')
  const {update} = useUser()
  const {t} = useTranslation()
  const [invalidMsg, setInvalidMsg] = useState<any>({
    email: '',
    password: '',
    nickName: '',
  })
  const [disSignup, setDisSignup] = useState(true)
  const inviteFrom = router.query.inviteFrom as string
  useEffect(() => {
    setErrMsg('')
  }, [errMsg1, invalidMsg])
  useEffect(() => {
    setErrMsg1('')
  }, [errMsg, invalidMsg])
  useEffect(() => {
    setErrMsg('')
    setErrMsg1('')
    setRegisterState(ERegisterState.Filling)
  }, [router.pathname])
  const emitCaptcha = () => {
    if (isReset) {
      handleVerify("")
    } else {
      toggleSlideShow(true)
    }
  }

  const handleVerify = (captchaVerification: string) => {
    setInfo('')
    const validEmail = validateOne('email', email)
    const validName = validateOne('nickName', nickName)
    const validPassword = validateOne('password', password)
    const valid = isSignup ? validEmail && validPassword && validName :
      isReset ? validEmail :
        validEmail && validPassword
    if (!valid) {
      return
    }
    setShowAppLoading(true)
    if (isSignup) {
      singUp({
        email,
        password,
        nickName,
        inviteFrom,
        thirdParty: getThirdParty(),
        host: window.location.host,
        captchaVerification
      }).then(res => {
        setShowAppLoading(false)
        setUserId(res.id.toString())
        setRegisterState(ERegisterState.Verifying)
      }).catch(e => {
        setShowAppLoading(false)
        setErrMsg1(getMsg(e))
      })

    } else if (isReset) {
      resetPwd(email)
        .then(() => {
          setShowAppLoading(false)
          setInfo('Send Success')
        })
        .catch(e => {
          setShowAppLoading(false)
          setErrMsg1(getMsg(e))
        })
    } else {
      handleLogin(captchaVerification)
    }
  }
  const handleLogin = (captchaVerification: string) => {
    login({email, password, captchaVerification}).then(res => {
      console.log(res);
      setShowAppLoading(false)
      setUserId(res.id.toString())
      update(res)
      router.push('/panel')
    }).catch(e => {
      if (e.response && e.response.data.Code === 401) {
        setUserId(e.response.data.Data.id.toString())
      }
      setShowAppLoading(false)
      if (e.response) {
        setErrMsg1(getMsg(e))
      }
    })
  }
  const handleSignup = (captchaVerification: string) => {
    // use email and password to login
    // then clear info
    handleLogin(captchaVerification)
  }
  const handleResent = useCallback(() => {
    setShowAppLoading(true)
    resendEmail(userId, window.location.host).then(() => {
      setShowAppLoading(false)
    }).catch(() => {
      setShowAppLoading(false)
    })
  }, [userId])
  const validateOne = (name: 'email' | 'nickName' | 'password', value: string) => {
    const invalid = !validate(name, value)
    const invalidMsgDict = {
      email: t("invalid email"),
      password: t("Password length should between 6 to 16"),
      nickName: t("nick name can not be empty")
    }
    if (invalid) {
      setInvalidMsg((prev: any) => ({...prev, [name]: invalidMsgDict[name]}))
      return false
    } else {
      setInvalidMsg({...invalidMsg, [name]: ''})
      return true
    }
  }
  const isSignup = router.pathname === '/signup'
  const isReset = router.pathname === '/reset'

  return <div className="w-full h-full flex relative items-center justify-center"
      onKeyPress={(e) => e.code === 'Enter' ? emitCaptcha() : 0}>
    <FormWrapper className="relative flex  flex-col	items-center w-full px-8 md:px-0">
      <Logo src={getLogoDark()}/>
      {
        registerState === ERegisterState.Filling ?
          <>
            {isSignup && inviteFrom && <Input name={'inviteCode'}
                                              label={'Invite code'}
                                              inputProp={{
                                                readOnly: true,
                                                disabled: true
                                              }}
                                              showClear={false}
                                              inputStyle={{
                                                borderRadius: 4,
                                                borderBottom: "unset",
                                                paddingLeft: 12,
                                              }}
                                              value={inviteFrom}/>}
            <Input onBlur={() => validateOne('email', email)}
                   msg={invalidMsg['email']}
                   name="email"
                   onChange={setMailbox}
                   label={"Email"}
                   value={email}/>
            {isSignup && <Input onBlur={() => validateOne('nickName', nickName)}
                                msg={invalidMsg['nickName']}
                                name="nickName"
                                onChange={setNickName}
                                label={t("Nick name")}
                                value={nickName}/>}
            {!isReset && <Input onBlur={() => validateOne('password', password)}
                                msg={invalidMsg['password']}
                                name="password"
                                type="password"
                                onChange={setPassword}
                                label={t("Password")}
                                value={password}/>}

            <ErrorWrapper isSignup={isSignup || isReset}>
              <ErrorMsg className={"px-4 md:px-0"} show={!!errMsg1}>
                {errMsg1 || 'error'}
              </ErrorMsg>
            </ErrorWrapper>
            {!!info && <Info success={true} style={{
              position: "absolute",
              bottom: 78,
              fontSize: 12,
              left: 0
            }}>{info}</Info>}
            <>
              {
                isSignup &&
                <Checkbox defaultChecked={false}
                          style={{marginBottom: 30}}
                          onChange={(e) => setDisSignup(!e.target.checked)}>
                  我已同意
                  <a href={'/termofuse'} style={{ textDecoration: "unset", color: '#15C1BA'}}>《用户协议》</a>
                  和
                  <a href={'/privacy'} style={{ textDecoration: "unset", color: '#15C1BA'}}>《隐私政策》</a>
                </Checkbox>
              }
              {
                isSignup ? <Button size="large" disabled={disSignup} onClick={emitCaptcha}>{t('Sign Up')}</Button> :
                  isReset ? <Button size="large" onClick={handleVerify}>{t('Send')}</Button> :
                    <Button size="large" onClick={emitCaptcha}>{t('Login')}</Button>
              }
              {slideShow && <Captcha isSlideShow={slideShow} verifyPointFixedChild={toggleSlideShow} onSuccess={handleVerify}/>}
            </>
            <InfoWrapper>
              {
                !isSignup && !isReset &&
                <>
                  {
                    errMsg1.toLocaleLowerCase() === 'user unconfirmed' ?
                      <span className="text-14 md:text-16">
                        {t(`Don't receive a link`)}?
                        <span onClick={handleResent} style={mlinksyle} className="link">{t("Resend it")}</span>
                      </span> :
                      <span className="text-14 md:text-16">
                        {t("Forgot your password")}
                        <span style={mlinksyle} className="link"
                              onClick={() => router.push('/reset')}>{t("Reset my password")}</span>
                      </span>
                  }
                </>
              }
            </InfoWrapper>
          </> : <>
            <ConfirmMessage>
              <Trans t={t} i18nKey="confirmMessage" values={{email}}>
                We have sent an email to {email}.Please
                check your email, follow the instructions to verify
                your email address, and then click the button below
                to continue.
              </Trans>
            </ConfirmMessage>

            <Button className="mb-2" size="large" onClick={emitCaptcha}>{t("Continue")}</Button>
            {slideShow && <Captcha isSlideShow={slideShow} verifyPointFixedChild={toggleSlideShow} onSuccess={handleSignup}/>}
            <ErrorMsg className={"px-4 md:px-0"} show={!!errMsg1}>{errMsg1}</ErrorMsg>
            <ConfirmMessage>
              {t(`Don't receive a link`)}?
              <span style={mlinksyle} className={"link"} onClick={handleResent}>{t("Resend it")}</span>
            </ConfirmMessage>
          </>
      }
    </FormWrapper>
  </div>
}

