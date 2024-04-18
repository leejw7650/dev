import React from "react";
import styled from "styled-components";
import InputAmount from "./InputAmount";
import SelectBaseCurrency from "./SelectBaseCurrency";
import TargetCurrencyBody from "./TargetCurrencyBody";

const Calculator = () => {
  return (
    <StyledCalcDiv>
      <InputAmount></InputAmount>
      <SelectBaseCurrency></SelectBaseCurrency>
      <TargetCurrencyBody></TargetCurrencyBody>
    </StyledCalcDiv>
  );
};

const StyledCalcDiv = styled.div`
  display: grid;
  grid-template-areas:
    "Input BaseCurrency"
    "TargetCurrency TargetCurrency";
  width: 50%;
  border: 2px solid #000;
  margin: 100px auto;
  padding: 30px;
  grid-gap: 30px;
  grid-auto-columns: 2fr 1fr;
`;

export default Calculator;
