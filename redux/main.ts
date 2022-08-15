import {loadFromLocalStorage} from "../src/helper/utils";

export interface AlertProps{
    msg: string,
    type: 'success' | 'info' | 'warning' | 'error',
}

export interface Pref {
    showRightSlide: boolean,
    showAppLoading: boolean,
    jwt: string
    alert?: AlertProps,
    userinfo: IUserInfo | null
}

export type UpPref = {
    [K in keyof Pref]?: Pref[K]
}

export const UPDATE_PREF = 'UPDATE_PREF'
export type UpPrefAction = {
    type: 'UPDATE_PREF',
    pref: UpPref
}
export const updatePref = (pref: UpPref) => ({ type: UPDATE_PREF, pref})

const initState: Pref = {
    showRightSlide: false,
    showAppLoading: false,
    jwt: '',
    userinfo:  loadFromLocalStorage('userinfo'),
}
export const reducerPref = (state = initState, action: UpPrefAction) => {
    if(action.type === UPDATE_PREF){
        return { ...state, ...action.pref }
    }
    return state
}

export const prefSelector = (state: any) => state.reducerPref as Pref
