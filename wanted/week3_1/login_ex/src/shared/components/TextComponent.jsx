import React from "react";

const TextComponent = ({ userDetail, changeDetailFn, type }) => {
  return (
    <input
      className="input-text"
      value={userDetail}
      onChange={changeDetailFn}
      type={type}
    />
  );
};

export default TextComponent;
