"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { chooseReservation } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interface";
import SelectHospital from "./SelectHospital";
import PersonalInput from "./PersonalInput";

export default function BookingVaccine() {
  const dispatch = useDispatch<AppDispatch>();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [id, setID] = useState("");
  const [hospital, setHospital] = useState("Chulalongkorn Hospital");
  const [reserverDate, setReserveDate] = useState<Dayjs | null>(null);

  const makeReservation = () => {
    if (firstname && lastname && id && hospital && reserverDate) {
      const item: BookingItem = {
        name: firstname,
        surname: lastname,
        id: id,
        hospital: hospital,
        date: dayjs(reserverDate).format("YYYY/MM/DD"),
      };
      console.log("Dispatching chooseReservation action with data:", item);

      dispatch(chooseReservation(item));
    }
  };

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-6 w-4/5 px-10  justify-center mb-[30px]">
      <div className="space-y-4">
        <PersonalInput
          onFirstnameChange={(value: string) => {
            setFirstName(value);
          }}
          onLastnameChange={(value: string) => {
            setLastname(value);
          }}
          onIdChange={(value: string) => {
            setID(value);
          }}
        />

        <div className="flex flex-row justify-evenly items-center">
          <div className="space-y-0">
            <SelectHospital
              onLocationChange={(value: string) => {
                setHospital(value);
                console.log("hospital " + hospital);
              }}
            />
          </div>
          <div>
            <p className="text-gray-600">Choose Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="bg-white"
                value={reserverDate}
                onChange={(val) => {
                  setReserveDate(val);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className="items-center w-[100%] py-[60px]">
        <button
          className="block rounded-md bg-sky-500 hover:bg-sky-900 px-3 py-2 shadow-sm text-white w-[100%]"
          onClick={makeReservation}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
