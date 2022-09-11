import styled from "styled-components";
import React, { CSSProperties, InputHTMLAttributes } from "react";
import { MdCancel } from "react-icons/md";
import ErrorMsg from "./ErrorMsg";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
`;
const CustomInput = styled.input`
  display: inline-block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #858b9c;
  outline: none;
  height: 30px;
  font-size: 14px;
  color: #000;
  line-height: 30px;
`;
interface InputProps {
  name: string;
  label: string;
  value: string;
  msg?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  type?: "password" | "text";
  showClear?: boolean;
  inputStyle?: CSSProperties;
  inputProp?: InputHTMLAttributes<any>;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  msg,
  onChange,
  onBlur,
  inputStyle,
  inputProp,
  showClear = true,
}: InputProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <label className={"text-18 weight-semi text-gray-800"}>{t(label)}</label>
      <CustomInput
        onBlur={onBlur}
        style={inputStyle}
        type={type}
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        {...(inputProp ?? {})}
      />
      {showClear && (
        <i
          className={"absolute right-0 bottom-1 pointer text-18"}
          onClick={() => {
            if (onChange) onChange("");
          }}
        >
          <MdCancel color="#c5cad5" />
        </i>
      )}
      <ErrorMsg inline show={!!msg}>
        {msg || "error"}
      </ErrorMsg>
    </Wrapper>
  );
};
export default Input;
