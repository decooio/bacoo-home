import React from "react";

const Omit = ({ value }: { value: string }) => {
  return (
    <span>
      {value.slice(0, 10)}
      ...
      {value.slice(-10)}
    </span>
  );
};
export default Omit;
