import * as React from "react";
import {Tooltip} from "antd";
import {TooltipProps} from "antd/lib/tooltip";

export function Tips(p: TooltipProps) {
  return <Tooltip placement={"top"} {...p}/>
}

export function TipsWhite(p: TooltipProps) {
  return <Tooltip
    placement={"top"}
    color={'#ffffff'}
    overlayStyle={{
      top: 5
    }}
    {...p}
    title={() =>
      <div style={{
        fontSize: 14,
        color: '#333333'
      }}>
        {p.title}
      </div>
    }
  />
}
