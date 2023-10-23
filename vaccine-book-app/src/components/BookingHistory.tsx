"use client";

import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingHospital() {
  // เลือก state
  const BookItems = useAppSelector((state) => state.bookSlice.BookItems);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 mt-[50px] text-black">
      Hi
      {BookItems.map((BookingItems) => (
        <div
          className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
          key={BookingItems.Id}
        >
          <div className="text-xl">{BookingItems.FirstName}</div>
          <div className="text-xl">{BookingItems.LastName}</div>
          <div className="text-sm">{BookingItems.BookingDate} from</div>
          <button
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={() => dispatch(removeBooking(BookingItems.Id))}
          >
            Remove from card
          </button>
        </div>
      ))}
    </div>
  );
}
