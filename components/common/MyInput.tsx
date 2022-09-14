import React, { useState } from "react";
import { Input, InputProps } from "antd";
const normalStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "50px",
    background: " #F8F8F8",
    border: " 1px solid #DDDDDD",
    borderRadius: "8px",

    boxShadow: "none",
  };
};
const placeholderStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "50px",
    borderRadius: "8px",

    boxShadow: "none",
  };
};
const inputStyle = (w?: string | number) => {
  return {
    width: w || "100%",
    height: "50px",
    border: " 1px solid #DDDDDD",
    borderRadius: "8px",

    boxShadow: "none",
    background: " #fff",
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
