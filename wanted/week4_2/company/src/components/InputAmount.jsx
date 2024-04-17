import React from "react";
import { useState } from "react";
import styled from "styled-components";

const InputAmount = () => {
  const [amount, setAmount] = useState("");

  const addComma = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length === 0) {
      setAmount("");
      return;
    }
    let formatted = e.target.value;
    setAmount(parseInt(formatted.replace(/,/g, "")));
  };

  return (
    <>
      <StyledInput
        value={amount.toLocaleString()}
        onChange={(event) => addComma(event)}
        min="0"
        placeholder="type..."
      />
      <>{amount}</>
    </>
  );
};

const StyledInput = styled.input`
  padding: 3px;
  width: 100%;
  color: #0000ff;
  grid-area: Input;
  box-sizing: border-box;
  text-align: right;
  font-size: 25px;
`;

export default InputAmount;
