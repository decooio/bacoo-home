/* eslint-disable */
import Head from 'next/head'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {SWRConfig} from 'swr'
import {useStore} from '../store'
import 'antd/dist/antd.css'
import '../src/assets/global.scss'
import 'tailwindcss/tailwind.css'
import {useEffect, useState} from "react";
import i18next from "i18next";
import detectLang from 'detect-browser-language'
import {initReactI18next} from "react-i18next";
import resources from '../lang'
import {useT} from "../src/hooks/utils";
import Nav from '../components/nav';
import {useRouter} from "next/router";
import {AppLoading} from '../components/common/Loading'
import React from "react";
import {prefSelector, updatePref} from "../redux/main";
import {Alert} from "antd";
import {getStrKey} from "../src/helper/oed";
import MyContextWrapper from '@components/Context/Context'
import Request from '../request/request'

function getFavicon(){
  return '/favicon.ico'
}
function MApp({Component, pageProps}) {
  const r = useRouter()
  const isActivity = r.pathname.startsWith('/activity')
  const pref = useSelector(prefSelector)
  const put = useDispatch()
  useEffect(() => {
    if (!pref.alert) return
    const closeTimer = setTimeout(() => {
      put(updatePref({alert: null}))
    }, 10000)
    return () => {
      clearTimeout(closeTimer)
    };
  }, [pref.alert])
  // console.info('page-->', r)
  return <SWRConfig
    value={{
      refreshInterval: 1000,
      fetcher: (req, init) => fetch(req, init).then(res => res.json())
    }}
  >
    <Head>
      <link rel="shortcut icon" href={getFavicon()}/>
      <title>百工链存-创新性分布式存储</title>
    </Head>
    <div style={{
      position: 'absolute', left: 0, top: 0,
      zIndex: 0,
      overflow: "hidden", width: '100vw', height: '100vh'
    }}>
      {!isActivity && <Nav/>}
      <Component {...pageProps} />
      {pref.alert &&
      <Alert
        style={{zIndex: 100,
          position: 'absolute',
          left:'calc(50vw - 250px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          borderRadius: 4,
          top: 100,
          width: 500}}
        afterClose={() => put(updatePref({alert: null}))}
        closable={true}
        icon={true}
        message={pref.alert.msg}
        type={pref.alert.type}/>}
    </div>
    <AppLoading/>
  </SWRConfig>
}

function InitI18n(props) {
  useEffect(() => {
    const lng = window.localStorage.getItem('userLang') ??
      (detectLang() === 'zh-CN' ? 'zh-CN' : 'en').replace('-', '')
    i18next.use(initReactI18next)
      .init({
        resources,
        lng: 'zhCN',
        fallbackLng: 'zhCN',
        debug: true
      }, props.onInit)
    console.info('detectLan-->', lng)
  }, [props])
  return null
}

export default function App({Component, pageProps}) {
  const store = useStore(pageProps.initialReduxState)
  const [inited, setInited] = useState(false)
  return (
    <MyContextWrapper>
        <Provider store={store}>
          {!inited && <InitI18n onInit={() => setInited(true)}/>}
          {inited && <MApp Component={Component} pageProps={Component}/>}
        </Provider>
    </MyContextWrapper>
  )
}