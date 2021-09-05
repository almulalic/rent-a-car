import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import orderReducer from "./Order/orderReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
