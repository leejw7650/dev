import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ExchangeInfo = () => {
  const currencyTo = useSelector((state) => state.exchange.currencyTo);
  let amount = 0;
  if (!currencyTo) {
    return (
      <StyledExchangeDiv>Choose Target Currency Above...</StyledExchangeDiv>
    );
  }

  return (
    <StyledExchangeDiv>
      <div style={{ margin: "20px", fontWeight: "Bold" }}>
        <span style={{ marginRight: "10px" }}>{currencyTo}</span>
        <span>{amount}</span>
      </div>
      <div style={{ margin: "40px auto 0px 20px" }}>기준일 :</div>
      <div style={{ margin: "5px auto 20px 20px" }}>"날짜 넣기"</div>
    </StyledExchangeDiv>
  );
};

const StyledExchangeDiv = styled.div`
  margin: 0px;
  padding: 10px;
`;

export default ExchangeInfo;
