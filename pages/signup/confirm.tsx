import {useRouter} from "next/router";
import {ConfirmMessage, FormWrapper, LoginWrapper, Logo} from "./index";
import React, {useEffect, useState} from "react";
import {verifyCode} from "../../lib/http";
import styled from "styled-components";
import {getLogoDark, getMsg} from "../../src/helper/utils";

const InvalidVertified = styled.p`
    color: #F37565;
    font-size: 14px;
`
enum VerifiedStatus {
    Vertifing,
    Success,
    Failed
}


const SignUpConfirm = () => {
    const router =  useRouter()
    const [vertified, setVertified] = useState(0)
    const [msg, setMsg] = useState('')
    useEffect(() => {
        const {user_id, confirmation_code} = router.query
        if (user_id && confirmation_code) {
            verifyCode(user_id.toString(), confirmation_code.toString()).then(() => {
                setVertified(VerifiedStatus.Success)
            }).catch(e =>{
                setVertified(VerifiedStatus.Failed)
                setMsg(getMsg(e))
            })

        }
    }, [router.query]);
    return <LoginWrapper>
        <FormWrapper>
            <Logo src={getLogoDark()}/>
            {
                vertified === VerifiedStatus.Vertifing &&
                <div>
                  Vertifing...
                </div>
            }
            {
                vertified === VerifiedStatus.Failed && <InvalidVertified>
                Error: {msg}
                </InvalidVertified>
            }
            {
                vertified === VerifiedStatus.Success && <ConfirmMessage>
                    Your email has been verified, please <span className={'link'} onClick={() => { router.push('/login') }}>Login</span>
                </ConfirmMessage>
            }
        </FormWrapper>
    </LoginWrapper>
}
export default  SignUpConfirm
