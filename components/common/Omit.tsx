import React from "react";

const Omit = ({ value }: { value: string }) => {
  return (
    <span>
      {value.slice(0, 6)}
      ...
      {value.slice(-6)}
    </span>
  );
};
export default Omit;
