"use client";

import PersonalInput from "./PersonalInput";
import LocationDateReserve from "./LocationDateReserve";
import SelectHospital from "./SelectHospital";
import { useState } from "react";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { BookingItem } from "../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function BookingForm() {
  // ------------------------- REDUX GLOBAL STATE --------------

  //const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  //const [bookingHospital, setBookingHospital] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    //if (bookingDate) {
    const item: BookingItem = {
      FirstName: "testname",
      LastName: "testlastname",
      Id: "testId",
      Hospital: "testHospital",
      /*BookingDate: dayjs(bookingDate).format("YYYY/MM/DD"),*/
      BookingDate: "hi",
    };
    dispatch(addBooking(item));
    // }
  };
  // ----------------------------------------------------------
  return (
    <>
      <div className="w-fit text-black text-3xl font-bold justify-center">
        BOOKING FORM
      </div>
      <form className="">
        <div className="w-fit">
          <PersonalInput />
        </div>
        <div className="w-fit ">
          <LocationDateReserve
          //onDateChange={(value: Dayjs) => {
          //setBookingDate(value);
          //}}
          />
        </div>
        <div className="w-fit">
          <SelectHospital
            onHospitalChange={(value: string) => {
              //setBookingHospital(value);
            }}
          />
        </div>
      </form>
      <button
        className="text-lg rounded-md w-[15%] my-[20px] bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm "
        onClick={makeBooking}
      >
        CONFIRM
      </button>
    </>
  );
}
