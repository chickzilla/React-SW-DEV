import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    bookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ให้คนที่จะมาใช้รู้จัก type นี้

export type AppDispatch = typeof store.dispatch;

// ให้ component ตัวอื่นมาใช้ state นี้ได้
// บอกว่าเป็น type ของ Rootstate
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// useSeleotr มี Argument เป็น selectorFunction
