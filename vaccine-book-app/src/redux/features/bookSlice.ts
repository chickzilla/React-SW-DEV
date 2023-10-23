import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
  //BookItem: BookingItem | null;
  BookItems: BookingItem[];
};

const initialState: BookState = { BookItems: [] };

export const bookSlice = createSlice({
  name: "mybooking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.BookItems.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.BookItems = state.BookItems.filter(
        (item) => item.Id !== action.payload
      );
    },
  },
});

//export const { addBooking, removeBooking } = bookSlice.actions;
export const { addBooking, removeBooking } = bookSlice.actions;

export default bookSlice.reducer;
