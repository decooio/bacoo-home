import React from "react";
import dynamic from "next/dynamic";

const ReactWEditor = dynamic(import("wangeditor-for-react"), {
  ssr: false,
});
const config = {
  height: 200,
  mode: "simple",
  menus: ["bold", "link", "image", "fontSize"],
};

const Editor = function ({
  setValue,
}: {
  setValue: (value: string) => void;
}) {
  return <ReactWEditor config={config} onChange={(e)=>setValue(e)}></ReactWEditor>;
};

export default Editor;
