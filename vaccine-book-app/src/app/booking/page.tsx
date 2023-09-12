import LocationDateReserve from "@/components/LocationDateReserve";
import SelectHospital from "@/components/SelectHospital";
import PersonalInput from "@/components/PersonalInput";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px]">
      <div className="w-fit text-black text-3xl font-bold justify-center">
        BOOKING FORM
      </div>
      <form className="">
        <div className="w-fit">
          <PersonalInput />
        </div>
        <div className="w-fit ">
          <LocationDateReserve />
        </div>
        <div className="w-fit">
          <SelectHospital />
        </div>
      </form>
    </main>
  );
}
