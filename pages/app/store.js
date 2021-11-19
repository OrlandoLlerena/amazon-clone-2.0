import { configureStore } from "@redux/toolkit";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
