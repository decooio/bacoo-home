import React from "react";
import dynamic from "next/dynamic";

const ReactWEditor = dynamic(import("wangeditor-for-react"), {
  ssr: false,
});
const config = {
  height: 160,
  mode: "simple",
  menus: ["bold", "link", "image", "fontSize"],
  showLinkImgHref:false
};

const Editor = function ({
  setValue,
  value,
}: {
  setValue: (value: string) => void;
  value: string;
}) {
  return (
    <ReactWEditor
      value={value}
      config={config}
      onChange={(e) => setValue(e)}
    ></ReactWEditor>
  );
};

export default Editor;
