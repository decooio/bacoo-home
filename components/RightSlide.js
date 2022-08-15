import s from './RightSlide.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {prefSelector, updatePref} from "../redux/main";
import { FiX } from 'react-icons/fi'
import {useState} from "react";
import {useOnClickOutside, useT} from "../src/hooks/utils";
import React from "react";

const TAB = {
    one: 'ipfsPingService',
    two: 'help',
    thr: 'aboutOur',
}
export default function RightSlide(){
    const { showRightSlide } = useSelector(prefSelector)
    const put = useDispatch()
    const [tab, setTab] = useState()
    const onClose = () => {
        setTab(undefined)
        put(updatePref({ showRightSlide: false }))
    }

    const slideClass = showRightSlide ? (tab? s.expand: s.small): s.hidden
    const { t } = useT()
    const slideRef = useOnClickOutside(onClose)
    return <div className={slideClass} ref={slideRef}>
        <div className={s.close} onClick={onClose}> <FiX/> </div>
        <div className={s.tabs}>
            <span onClick={() => setTab(TAB.one)}
                  className={TAB.one === tab? s.selected: ''}>{t(TAB.one)}</span>
            <div className={s.space}/>
            <span onClick={() => setTab(TAB.two)}
                  className={TAB.two === tab? s.selected: ''}>{t(TAB.two)}</span>
            <div className={s.space}/>
            <span onClick={() => setTab(TAB.thr)}
                  className={TAB.thr === tab? s.selected: ''}>{t(TAB.thr)}</span>
        </div>
        {
            tab && <div className={s.details}>
                <div className={s.title}>{t(tab)}</div>
                <p className={s.content} dangerouslySetInnerHTML={{__html: t(tab + 'Details')}}/>
            </div>
        }
    </div>
}
