import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart : [],
};

export const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addData: (state , data) => {
      state.cart.push(data.data);
    },
  },
});

export const { addData } = addToCartSlice.actions;
export default addToCartSlice.reducer;
