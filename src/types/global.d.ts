interface BasicUserInfo {
    email: string,
    password: string
    captchaVerification: string
}
interface RegisterForm extends BasicUserInfo{
    nickName?: string,
    thirdParty: number,
    host: string,
    inviteFrom?: string,
}
enum EUserState  {
    INACTIVE,
    ACTIVE
}

interface IUserInfo {
    role: number,
    email: string,
    id: number,
    mobile?: null,
    nickName: string
    status: EUserState,
    thirdParty: number,
    publicKey: string,
    beneficiaryAddress?: string,
    githubAccount?: string,
    userRsaPrivateKey: string,

}

interface IResponse<T> {
    Code: number,
    Data: T,
    Msg: string
}
