import styled, {css} from "styled-components";

interface IErrorMsg {
    show: boolean
    inline?: boolean
}
const ErrorMsg = styled.div<IErrorMsg>`
    text-align: left;
    color: #F37565;
    font-size: 12px;
    visibility: hidden;
    ${props => props.show && css`
        visibility: visible;
    `}
    ${props => props.inline && css`
        position: absolute;
        bottom: -20px;
    `};
`
export default  ErrorMsg
