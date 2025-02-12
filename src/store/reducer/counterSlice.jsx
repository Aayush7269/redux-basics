import { createSlice } from "@reduxjs/toolkit";

createSlice;

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, increamentByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
