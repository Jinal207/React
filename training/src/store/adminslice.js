import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  data: [],
};

export const counterSlice = createSlice({
  name: "abc",
  initialState,
  reducers: {
    message: (state) => {
      console.log(state.value);
    },
    chnageVal: (state, payload) => {
    state.value = state.value + 1;
    },
    // incrment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changese
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
  },
  extraReducers:{
    
  }
});

// Action creators are generated for each case reducer function
export const { increment, chnageVal } = counterSlice.actions;

export default counterSlice.reducer;
