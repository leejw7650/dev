import React from "react";

const TextComponent = ({ text, changeTextFn, inputType }) => {
  return <input type={inputType} onChange={changeTextFn} value={text} />;
};

export default TextComponent;
