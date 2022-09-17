import React from "react";
import { message, Tooltip, TooltipProps } from "antd";
import { IoCopyOutline } from "react-icons/io5";
import copyToClipboard from "copy-to-clipboard";

const CopyTips = ({ ...props }: TooltipProps) => {
  const copyTitle = () => {
    return (
      <span>
        {props.title}
        <IoCopyOutline
          onClick={() => {
            copyToClipboard(props.title as string);
            message.success("已复制");
          }}
          style={{
            display: "inline",
            marginLeft:'10px'
          }}
        />
      </span>
    );
  };
  return (
    <Tooltip {...props} title={copyTitle}>
      {props.children}
    </Tooltip>
  );
};
export default CopyTips;