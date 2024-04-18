import React from "react";
import styled from "styled-components";
import TargetCurrencyTab from "./TargetCurrencyTab";
import ExchangeInfo from "./ExchangeInfo";

const TargetCurrencyBody = () => {
  return (
    <StyledTargetsDiv>
      <TargetCurrencyTab></TargetCurrencyTab>
      <ExchangeInfo></ExchangeInfo>
    </StyledTargetsDiv>
  );
};

const StyledTargetsDiv = styled.div`
  margin: 0px;
  padding: 0px;
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px solid #000;
  grid-area: TargetCurrency;
  box-sizing: border-box;
`;

export default TargetCurrencyBody;
