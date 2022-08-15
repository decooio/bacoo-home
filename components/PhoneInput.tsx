import React, {useState} from "react";
import OtpInput from "react-otp-input";
import {validate} from "../src/helper/utils";
import styled from "styled-components";
import useCountDown from "../lib/useCountDown";
import {requestCode} from "../lib/http";
import {useTranslation} from "react-i18next";
import {Phone, useDevice} from "../src/assets/style";

const Wrapper = styled.div`
    text-align: center;
    ${Phone} {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
    }
`
const CtmButton = styled.button`
    border-radius: 8px;
    color: #2CC8C2;
    font-size: 16px;
    cursor: pointer;
    width: 156px;
    height: 52px;
    background: rgba(44, 200, 194, 0.06);
    border: 1px solid #2CC8C2;
    &:hover {
        background: rgba(44, 200, 194, 0.12);
    }
    &:disabled {
        cursor: not-allowed;
        background: #CCCCCC;
        border-radius: 8px;
        border-color: #CCCCCC;
        color: #FFFFFF
    }
    @media (min-width: 768px) {
        width: 100%;
    }
`
const Input = styled.input`
    width: 180px;
    height: 52px;
    border-radius: 8px;
    border: 1px solid #CCCCCC;
    line-height: 44px;
    padding: 0 16px;
    outline: unset;
    &:focus {
        border: 1px solid #999;
    }

`
const CoundDown = styled.span`
    position: absolute;
    right: -50px;
    top: 35px;
    display: inline-block;
    padding-left: 18px;
    font-size: 16px;
    font-weight: 400;
    color: #999999;
    line-height: 22px;
`

interface IPhoneInput {
    setError: (error: string) => void
}
const PhoneInput = (props: IPhoneInput) => {
    const {isMobile} = useDevice()
    const {setError} = props
    const [phone, setPhone] = useState('')
    const [inputStyle, setInputStyle] = useState({})
    const {countDown, startCountDown} = useCountDown()
    const {t} = useTranslation()
    const onChange = (value: string) => {
        setInputStyle({})
        setError('')
        setPhone(value)
    }
    const onRequestCode = async () => {
        // valid phone
        setError('')
        setInputStyle({})
        try {
            if (!validate("phone", phone)) {
                return setInputStyle({border: "2px solid #F37565"})
            }
            await requestCode(phone)
            startCountDown()
        } catch(e) {
            setError(e.message)
            setInputStyle({border: "1px solid #F37565"})
        }
    }

    return <Wrapper>
        {
            isMobile ? <Input
                className="mr-1"
                style={{...inputStyle}}
                value={phone}
                onChange={(e) => { onChange(e.target.value) }}
            />: <OtpInput
                inputStyle={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    outline: "unset",
                    border: "1px solid #CCCCCC",
                    ...inputStyle
                }}
                focusStyle={{
                    border: "1px solid #999999"
                }}
                value={phone}
                onChange={onChange}
                numInputs={11}
                separator={<span>&nbsp;&nbsp;</span>}
            />
        }
        <div className={"hidden md:block relative"}>
            <CtmButton className="mt-5 mb-6" disabled={!!countDown} onClick={onRequestCode}>{t("Send Me Verification Code")}</CtmButton>
            {countDown > 0 && <CoundDown>{countDown} s</CoundDown>}
        </div>
        <div className={"block md:hidden relative"}>
            <CtmButton className="mt-5 mb-6 ml-5" disabled={!!countDown} onClick={onRequestCode}>{countDown > 0 ? `${countDown}s后可重新发送` : t("Send Me Verification Code")}</CtmButton>
        </div>
    </Wrapper>
}
export default PhoneInput
