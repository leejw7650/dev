import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectTargetCurrency } from "../redux/slices/exchange";

const TargetCurrencyTab = () => {
  const dispatch = useDispatch();
  const currencyFrom = useSelector((state) => state.exchange.currencyFrom);
  const currencyList = useSelector((state) => state.exchange.currencyList);
  const targets = currencyList.filter((currency) => currency !== currencyFrom);

  return (
    <StyledTabDiv>
      {targets.map((target) => {
        return (
          <StyledTargetsBtn
            key={`${target}`}
            onClick={() => {
              dispatch(selectTargetCurrency(target));
            }}
            target={target}
          >
            {target}
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
