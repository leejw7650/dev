import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { inputAmount } from "../redux/slices/exchange";

const InputAmount = () => {
  const amount = useSelector((state) => state.exchange.amountFrom);

  const dispatch = useDispatch();
  const addComma = (e) => {
    if (e.target.value.length === 0) {
      // NaN 나오는거 고쳐야함 (문자 입력하면 NaN 나옴)
      dispatch(inputAmount(""));
      return;
    }
    dispatch(inputAmount(parseInt(e.target.value.replace(/,/g, ""))));
  };

  return (
    <>
      <StyledInput
        value={amount.toLocaleString()}
        onChange={(event) => addComma(event)}
        min="0"
        placeholder="type..."
      />
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
