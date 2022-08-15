import {useTranslation, UseTranslationOptions} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {AlertProps, updatePref} from "../../redux/main";
import {getMsg} from "../helper/utils";

export function useOnClickOutside(
  handler: () => void
) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current?.contains(e.target) ?? false) {
        return
      }
      if (handler) handler()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref.current])
  return ref
}

export function useToast(){
  const [isShow, setShow] = useState(false)
  const [duration, setDuration] = useState(2000)
  const [text, setText] = useState('')
  useEffect(() => {
    if (isShow){
      const hidden = setTimeout(() => {
        setShow(false)
      }, duration)
      return () => clearTimeout(hidden)
    }
  },[isShow, duration])
  const show = (text: string, _duration = duration) => {
    setText(text)
    setDuration(_duration)
    setShow(true)
  }
  function Toast () {
    return isShow ? text : ''
  }
  return { show, Toast }
}

export function useT(ns?: string, opts?: UseTranslationOptions) {
  return useTranslation(ns, opts)
}

export function useAlert(){
  const put = useDispatch()
  const show = (alert: AlertProps) => {
    put(updatePref({ alert }))
  }
  return { show }
}

export function useError(){
  const a = useAlert()
  return (e: any, error?:string) => {
    a.show({type:'error', msg: error ?? getMsg(e)})
  }
}
