import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { Link } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div
      className="h-12 
        bg-sky-950 
        fixed 
        top-0 right-0 left-0 z-30 
        flex flex-row 
        justify-between
        pr-2
        "
    >
      <div className="w-[20%] flex flex-row justify-center space-x-10">
        {session ? (
          <TopMenuItem title="Sign-out" pageRef="/api/auth/signout" />
        ) : (
          <TopMenuItem title="Sign-in" pageRef="/api/auth/signin" />
        )}
        <TopMenuItem title="myBooking" pageRef="/mybooking" />
      </div>

      <div className="w-[20%] flex flex-row justify-center space-x-10">
        <TopMenuItem title="Hospitals" pageRef="/hospital" />

        <TopMenuItem title="Booking" pageRef="/booking" />

        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={0}
          height={0}
          className="h-4/5 
        w-auto
        my-1
        mr-2"
          sizes="100vh"
        />
      </div>
    </div>
  );
}
