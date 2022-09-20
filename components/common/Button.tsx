import * as React from "react";
import styled, {css} from "styled-components";
type TBtnSize = "small" | "middle" | "large"

const CtmButton = styled.button<IButtonProps>`
    background: #2CC8C2;
    display: inline-flex;
    justify-content:center;
    align-items: center;
    height: 36px;
    width: 100px;
    font-size: 16px;
    border-radius: 8px;
    color: #FFFFFF;
    cursor: pointer;
    max-width: 100%;
    ${props => props.size === 'large' && css`
        height: 44px;
        width: 457px;
    `}
    &:hover {
        background-color: #15C1BA;
    }
`

interface IButtonProps {
    size?: TBtnSize,
    onClick?: () => void
}
const Button:React.FC<IButtonProps|any> = (props) => {
    return <CtmButton {...props}/>;
}

export default Button
