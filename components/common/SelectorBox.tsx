import React from "react";
type SelectorBoxList = Array<{
  id: number;
  text: string;
}>;

const selectorStyle = {
  width: " 100px",
  height: "35px",
  background: "#FFFFFF",
  border: "1px solid rgb(188 188 188)",
  borderRadius: " 8px",
  lineHeight: "35px",
  'text-align': "center",
  marginRight: "8px",
};

const activeStyle = {
  width: " 100px",
  height: "35px",
  background: "rgba(44, 200, 194, 0.06)",
  border: "1px solid #2CC8C2",
  borderRadius: " 8px",
  lineHeight: "35px",
  'text-align': "center",
  marginRight: "8px",
};
const SelectorBox = function (props: {
  list: SelectorBoxList;
  activeKey: number;
  onChange: any;
}) {
  const { list, activeKey, onChange } = props;

  const changeActiveKey = (id: number) => {
    onChange(id);
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {list.map((item) => {
        return (
          <span
            style={activeKey == item.id ? activeStyle : selectorStyle}
            onClick={() => changeActiveKey(item.id)}
            key={item.id}
          >
            {item.text}
          </span>
        );
      })}
    </div>
  );
};

export default SelectorBox;
