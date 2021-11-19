import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const createSlice = {
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
};

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull Info form the Global Store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
