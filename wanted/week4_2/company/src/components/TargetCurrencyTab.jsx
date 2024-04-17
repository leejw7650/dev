import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TargetCurrencyTab = () => {
  const [amount, setBaseCurrency] = useState(0);
  const currencyList = ["KRW", "USD", "CND", "CHY", "JPY"];
  const currencyFrom = "KRW";
  const targets = currencyList.filter((currency) => currency !== currencyFrom);
  const [currencyTo, setCurrencyTo] = useState([]);

  return (
    <StyledTabDiv>
      {targets.map((currency) => {
        return (
          <StyledTargetsBtn
            key={`${currency}`}
            onClick={() => {
              setCurrencyTo(currency);
            }}
          >
            {currency}
          </StyledTargetsBtn>
        );
      })}
    </StyledTabDiv>
  );
};

const StyledTabDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledTargetsBtn = styled.button`
  margin: 0px;
  padding: auto;
  background-color: #fff;
  border: none;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  flex: 1;
  height: 50px;
  &:focus {
    border-bottom: 1px solid rgb(0, 255, 0, 0);
  }
  &:last-child {
    border-right: none;
  }
`;

export default TargetCurrencyTab;
