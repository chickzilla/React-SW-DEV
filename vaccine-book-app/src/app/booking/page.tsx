<<<<<<< HEAD
"use client";

import BookingForm from "@/components/BookingForm";
import BookingHospital from "@/components/BookingHistory";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import PersonalInput from "../../components/PersonalInput";
import LocationDateReserve from "../../components/LocationDateReserve";
import SelectHospital from "../../components/SelectHospital";

export default function Booking() {
  /*const session = await getServerSession(authOptions);
  //console.log(session?.user);

  if (!session || !session.user || !session.user.token) {
    return null;
  }

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);*/
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
||||||| 008586a (Week 10)
import LocationDateReserve from "@/components/LocationDateReserve";
import SelectHospital from "@/components/SelectHospital";
import PersonalInput from "@/components/PersonalInput";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
=======
import LocationDateReserve from "@/components/LocationDateReserve";
import SelectHospital from "@/components/SelectHospital";
import PersonalInput from "@/components/PersonalInput";
>>>>>>> parent of 008586a (Week 10)

export default function Booking() {
  return (
<<<<<<< HEAD
    /*
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px] py-[100px]">
      <div className="text-2xl bg-slate-200 text-black text-sm">
        {profile.data.name}
        <div className="block m-2">Email : {profile.data.email}</div>
        <div className="block m-2">Tel : {profile.data.tel}</div>
        <div className="block m-2">Member Since : {createdAt.toString()}</div>
      </div>
      <BookingForm></BookingForm>
    </main>*/

    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px] py-[100px]">
||||||| 008586a (Week 10)
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px]">
      <div className="text-2xl bg-slate-200 text-black text-sm">
        {profile.data.name}
        <div className="block m-2">Email : {profile.data.email}</div>
        <div className="block m-2">Tel : {profile.data.tel}</div>
        <div className="block m-2">Member Since : {createdAt.toString()}</div>
      </div>

=======
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px]">
>>>>>>> parent of 008586a (Week 10)
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
    </main>
  );
}
