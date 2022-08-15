import {Badge, BadgeProps} from "antd";
import React from "react";

export interface MBadgeProps extends BadgeProps {
  visible?: boolean
  children?: any
}

export function MBadge(p: MBadgeProps) {
  if (!p.visible) {
    return p.children
  }
  return <Badge {...p}>
    {p.children}
  </Badge>
}
