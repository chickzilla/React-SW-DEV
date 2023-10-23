import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div
      className="h-12 
        bg-sky-950 
        fixed 
        top-0 right-0 left-0 z-30 
        flex flex-row 
        justify-end 
        pr-2
        "
    >
<<<<<<< HEAD
      {session ? (
        <Link
          href="/api/auth/signout"
          className="text-white my-auto font-semibold relative right-[70%]"
        >
          Sign-out
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="text-white my-auto font-semibold relative right-[70%]"
        >
          Sign-in
        </Link>
      )}
      <Link
        href="/mybooking"
        className="text-white my-auto font-semibold relative right-[65%] py-auto"
      >
        My Booking
      </Link>

||||||| 008586a (Week 10)
      {session ? (
        <Link
          href="/api/auth/signout"
          className="text-white my-auto font-semibold relative right-[80%]"
        >
          Sign-out
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="text-white my-auto font-semibold relative right-[80%]"
        >
          Sign-in
        </Link>
      )}

=======
>>>>>>> parent of 008586a (Week 10)
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
  );
}
