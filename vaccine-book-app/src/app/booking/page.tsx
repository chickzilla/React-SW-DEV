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

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[50px] pt-[30px]">
      <div className="text-2xl bg-slate-200 text-black text-sm">
        {profile.data.name}
        <div className="block m-2">Email : {profile.data.email}</div>
        <div className="block m-2">Tel : {profile.data.tel}</div>
        <div className="block m-2">Member Since : {createdAt.toString()}</div>
      </div>

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
