import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { addAmount, setAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
