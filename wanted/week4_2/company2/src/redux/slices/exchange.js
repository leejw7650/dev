import { createSlice } from "@reduxjs/toolkit";

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    amountFrom: 0,
    currencyFrom: "USD",
    currencyList: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
    currencyTo: "",
    exchangeRate: 0,
    date: "2024-04-19",
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
      state.exchangeRate = action.payload;
    },
    refreshDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export default exchangeSlice.reducer;
export const {
  inputAmount,
  selectBaseCurrency,
  selectTargetCurrency,
  currentExchangeRate,
  refreshDate,
} = exchangeSlice.actions;
