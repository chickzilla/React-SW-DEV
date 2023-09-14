"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TextField from "@mui/material/TextField";

export default function LocationDateReserve() {
  return (
    <div
      className="flex flex-col w-[100%] space-y-10 my-[50px]
    "
    >
      <div className="w-[100%] items-center text-black text-xl font-bold">
        Appointment date
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>
    </div>
  );
}