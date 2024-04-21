import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const conditionSlice = createSlice({
  name: "condition",
  initialState: {
    weekDiff: 0,
    baseDay: dayjs().toISOString(),
    conditionToday: 0,
  },
  reducers: {
    inputConditionToday: (state, action) => {
      state.conditionToday = action.payload;
    },
    changeWeek: (state, action) => {
      state.weekDiff = state.weekDiff + action.payload;
    },
    resetWeek: (state, action) => {
      state.weekDiff = 0;
    },
  },
});

export default conditionSlice.reducer;
export const { inputConditionToday, changeWeek, resetWeek } =
  conditionSlice.actions;
