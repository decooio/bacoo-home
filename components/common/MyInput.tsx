import React from "react";
import { Input, InputProps } from "antd";

const MyInput = ({
  setValue,
  ...props
}: InputProps & { setValue: (value: string) => void }) => {
  return (
    <Input
      size="large"
      style={
        props.placeholder
          ? {
              background: " #F8F8F8",
              border: " 1px solid #DDDDDD",
              borderRadius: "8px",
              height: "50px",
            }
          : {
              borderRadius: "8px",
              height: "50px",
            }
      }
      {...props}
      onInput={(e) => setValue((e.target as any).value)}
    ></Input>
  );
};
export default MyInput;
