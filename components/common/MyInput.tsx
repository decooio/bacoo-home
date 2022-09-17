import React, { useState } from "react";
import { Input, InputProps } from "antd";
const normalStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "44px",
    background: " #F8F8F8",
    border: " 1px solid #DDDDDD",
    borderRadius: "8px",
    boxShadow: "none",
    padding: "10px 24px"
  };
};
const placeholderStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "44px",
    borderRadius: "8px",
    boxShadow: "none",
    padding: "10px 24px"
  };
};
const inputStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "44px",
    border: " 1px solid #DDDDDD",
    borderRadius: "8px",
    boxShadow: "none",
    background: " #fff",
    padding: "10px 24px"
  };
};
const MyInput = ({
  setValue,
  value,
  width,
  ...props
}: InputProps & { setValue: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Input
      value={value}
      size="large"
      style={
        inputValue
          ? inputStyle(width)
          : props.placeholder
          ? normalStyle(width)
          : placeholderStyle(width)
      }
      {...props}
      onInput={(e) => {
        setInputValue((e.target as any).value);
        setValue((e.target as any).value);
      }}
    ></Input>
  );
};
export default MyInput;