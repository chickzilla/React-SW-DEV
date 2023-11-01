import BookingVaccine from "@/components/BookingVaccine";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Booking() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="bg-white w-[100%] flex flex-col items-center space-y-6">
      <div className="text-2xl bg-slate-200 text-black text-sm">
        {profile.data.name}
        <div className="block m-2">Email : {profile.data.email}</div>
        <div className="block m-2">Tel : {profile.data.tel}</div>
        <div className="block m-2">Member Since : {createdAt.toString()}</div>
      </div>

      <div className="text-xl font-medium text-black mt-5">Booking Page</div>
      <BookingVaccine />
      <AddHospitalForm></AddHospitalForm>
    </main>
  );
}
