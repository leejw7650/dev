import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectBaseCurrency,
  selectTargetCurrency,
} from "../redux/slices/exchange";

const SelectBaseCurrency = () => {
  const dispatch = useDispatch();
  const currencyFrom = useSelector((state) => state.exchange.currencyFrom);
  const currencyList = useSelector((state) => state.exchange.currencyList);
  console.log(currencyFrom);
  return (
    <>
      <DropCurrencySelect
        value={currencyFrom}
        onChange={(event) => {
          dispatch(selectBaseCurrency(event.target.value));
          dispatch(selectTargetCurrency(""));
        }}
      >
        {currencyList.map((currency) => {
          return (
            <option value={`${currency}`} key={`${currency}`}>
              {currency}
            </option>
          );
        })}
      </DropCurrencySelect>
    </>
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
