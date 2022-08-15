import s from "./Pager.module.scss";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import * as React from "react";
import {useMemo} from "react";
import { filter, isNumber, range } from 'lodash'
import {classNames} from "../../src/helper/utils";

export function Pager({ pageSize, pageIndex, setPageIndex} :
                        {pageSize: number, pageIndex: number, setPageIndex: (p: number) => void}) {

    if (pageSize <= 1) {
        return <div></div>
    }

    const elip = '···'
    const pageTabs = useMemo(() => {
        if (pageSize > 5) {
            const p = pageIndex + 1
            const leftElip = p > 3
            const rightElip = p < pageSize - 2
            const mid = range(Math.max(p - 1, 2), Math.min(p + 2, pageSize))
            return filter([1, leftElip ? elip : null, ...mid, rightElip ? elip : null, pageSize])
        } if (pageSize > 1) {
            return range(1, pageSize + 1)
        }
        return []
    }, [pageSize, pageIndex])

    return <div className={s.pager}>
        <div className={s.page} onClick={() => {setPageIndex(Math.max(0, pageIndex - 1))}} >
            <FaChevronLeft />
        </div>
        {
            pageTabs.map((tab, index) => <div
                key={`page_tab_${index}`}
                className={classNames(s.page, pageIndex + 1 === tab ? s.pageActive : null)}
                onClick={() => {
                    if (isNumber(tab)) {
                        setPageIndex(tab - 1)
                    }
                }}>{`${tab}`}</div>)
        }
        <div className={s.page} onClick={() => setPageIndex(Math.min(pageSize - 1, pageIndex + 1))}>
            <FaChevronRight />
        </div>
    </div>
}
