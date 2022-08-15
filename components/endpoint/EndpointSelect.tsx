import {Dropdown, Menu} from "antd";
import _ from "lodash";
import {SpaceW} from "../common/layouts";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import React, {CSSProperties, useState} from "react";
import {DecooIo} from "../../lib/useDecooIo";
import styled from "styled-components";
import {useT} from "../../src/hooks/utils";

export interface Props {
  decooIo: DecooIo,
  style?: CSSProperties
}

const MDiv = styled.div`
  max-width: 100%;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`

export function EndpointSelect(
  {
    decooIo,
    style
  }: Props) {
  const [visibleEndpoints, setVisibleEndpoints] = useState(false)
  const {t} = useT()

  return <MDiv style={style}>
    {`${t("Upload Endpoint")}：`}
    <Dropdown
      placement={"bottomRight"}
      visible={visibleEndpoints}
      overlay={<Menu
        style={{width: 86}}
        onClick={(e) => {
          const find = _.find(decooIo.endpoints, p => `menu_dc_${p.id}` === e.key);
          if (find && find.apiHost !== decooIo.endpoint?.apiHost)
            decooIo.changeEndpoint(find)
          setVisibleEndpoints(false)
        }}>
        {decooIo.endpoints.map(p =>
          <Menu.Item
            key={`menu_dc_${p.id}`}
            style={{
              background: p.id === decooIo?.endpoint?.id ? '#eeeeee' : '#ffffff'
            }}>
            {p.name}
          </Menu.Item>)}
      </Menu>}>
      <div
        onClick={() => setVisibleEndpoints(!visibleEndpoints)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          cursor: "pointer",
        }}>
        {decooIo.endpoint?.name}
        <SpaceW width={'5px'}/>
        {visibleEndpoints ? <FiChevronUp/> : <FiChevronDown/>}
      </div>
    </Dropdown>
  </MDiv>
}
