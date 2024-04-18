import { createSlice } from "@reduxjs/toolkit";

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    amountFrom: 0,
    currencyFrom: "USD",
    currencyList: ["USD", "KRW", "CND", "JPY", "CHY"],
    currencyTo: "KRW",
    currency_arr: {
      USD: 0,
      KRW: 0,
      CND: 0,
      JPY: 0,
      CHY: 0,
    },
    $exchangeRate: {
      USD: 0,
      KRW: 0,
      CND: 0,
      JPY: 0,
      CHY: 0,
    },
  },
  reducers: {
    inputAmount: (state, action) => {
      state.amountFrom = action.payload;
    },
    selectBaseCurrency: (state, action) => {
      state.currencyFrom = action.payload;
    },
    selectTargetCurrency: (state, action) => {
      state.currencyTo = action.payload;
    },
    currentExchangeRate: (state, action) => {
      //action으로부터 현재 환율을 받는다.
      // state.$exchangeRate.KRW = 1200
      // state.$exchangeRate.CND = 2
      // state.$exchangeRate.JPY = 120
      // state.$exchangeRate.CHY = 500
    },
    exchange: (state, action) => {
      // action으로부터 환전 금액과 베이스 통화를 받는다
      // state.currency_arr.USD =
    },
  },
});

export default exchangeSlice.reducer;
export const {
  inputAmount,
  selectBaseCurrency,
  selectTargetCurrency,
  exchange,
  currentExchangeRate,
} = exchangeSlice.actions;
