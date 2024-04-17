import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SelectBaseCurrency = () => {
  const [currencySelected, setCurrencySelected] = useState("");
  const currencyList = ["KRW", "USD", "CND", "CHY", "JPY"];
  return (
    <DropCurrencySelect onChange={(event) => setCurrencySelected(event.value)}>
      {currencyList.map((currency) => {
        return (
          <option value={`${currency}`} key={`${currency}`}>
            {currency}
          </option>
        );
      })}
    </DropCurrencySelect>
  );
}; //compound component

const DropCurrencySelect = styled.select`
  padding: 3px;
  color: #ff0000;
  grid-area: BaseCurrency;
  width: 100%;
  box-sizing: border-box;
  font-size: 25px;
  text-align: center;
`;

export default SelectBaseCurrency;
