
import Popup from 'reactjs-popup';
import { EventType, PopupPosition } from 'reactjs-popup/dist/types'
import _ from 'lodash'
import React from "react";

export function Tooltip({ data, children, maxW = 330, position = 'top center', on = 'hover' }: {
  data: any,
  children: any,
  maxW?: number | string,
  position?: PopupPosition | PopupPosition[],
  on?: EventType | EventType[],
}) {
  if (_.isEmpty(data)) return children
  return <Popup
    position={position}
    trigger={children}
    arrow={true}
    on={on}
    contentStyle={{
      padding: 10,
      fontSize: 14,
      borderRadius: 5,
      color: 'white',
      maxWidth: maxW,
      whiteSpace: 'pre-wrap',
      backgroundColor: 'rgba(0,0,0,0.8)',
    }}
    arrowStyle={{
      color: 'rgba(0,0,0,0.8)'
    }}
    keepTooltipInside={true}
  >
    {data}
  </Popup>
}
