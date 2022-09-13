import React from "react";
import { Input, InputProps } from "antd";
const normalStyle = {
  background: " #F8F8F8",
  border: " 1px solid #DDDDDD",
  borderRadius: "8px",
  height: "50px",
  boxShadow: "none",
};
const placeholderStyle = {
  borderRadius: "8px",
  height: "50px",
  boxShadow: "none",
};
const MyInput = ({
  setValue,
  value,
  ...props
}: InputProps & { setValue: (value: string) => void }) => {
  return (
    <Input
      value={value}
      size="large"
      style={props.placeholder ? normalStyle : placeholderStyle}
      {...props}
      onInput={(e) => setValue((e.target as any).value)}
    ></Input>
  );
};
export default MyInput;
