import styled from "styled-components";
import { Phone } from "../../src/assets/style";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

export const RowFill = styled(Row)`
  width: 100%;
  height: 100%;
  :nth-child(1) {
    background: #fff !important;
  }
  :nth-child(odd) {
    background: #f5f5f5;
  }
`;

export const RowFillAuto = styled(RowFill)`
  ${Phone} {
    min-width: 900px;
    align-items: flex-start;
  }
`;

export const COL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

export const COLFill = styled(COL)`
  width: 100%;
  height: 100%;
`;

interface PropsSpace {
  width?: string;
  height?: string;
}

export const SpaceW = styled.div<PropsSpace>`
  ${(props) => `width: ${props.width ?? "12px"}`};
  ${(props) => `height: ${props.height ?? "100%"}`};
  flex-shrink: 0;
`;

export const SpaceH = styled.div<PropsSpace>`
  ${(props) => `width: ${props.width ?? "100%"}`};
  ${(props) => `height: ${props.height ?? "12px"}`};
  flex-shrink: 0;
`;
