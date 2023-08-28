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
