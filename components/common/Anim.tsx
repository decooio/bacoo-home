import styled, {Keyframes, keyframes} from "styled-components";
import { HTMLAttributes} from "react";
import {Property} from "csstype";
import React from "react";

const rotate = keyframes`
  from {
  }
  to {
    transform: rotate(359deg);
  }
`

interface NameMap {
  rotate: Keyframes,
}

const nameMap: NameMap = {
  rotate,
}

export interface Props extends HTMLAttributes<HTMLDivElement>{
  name: keyof NameMap,
  duration?: string,
  count?: string | number,
  timing?: Property.AnimationTimingFunction
}

const Div = styled.div<Props>`
  animation: ${p => nameMap[p.name]} 
  ${p => p.duration ?? '2s'} 
  ${p => p.timing ?? 'linear'} 
  ${p => p.count != null ? p.count : 'infinite'};
`

export function Anim(p: Props) {
  return <Div {...p}/>
}
