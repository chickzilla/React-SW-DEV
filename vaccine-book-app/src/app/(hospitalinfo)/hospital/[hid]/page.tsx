import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospital = await getHospital(params.hid);

  return (
    <main className="mt-[200px]">
      <div className="flex flex-row my-10 justify-evenly">
        <Image
          src={hospital.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className=" font-medium text-black y-30 ">
          <h1 className="text-4xl mb-[60px] text-center">
            {hospital.data.name}
          </h1>
          <p className="text-lg my-[10px]">Address : {hospital.data.address}</p>
          <p className="text-lg my-[10px]">
            District : {hospital.data.district}
          </p>
          <p className="text-lg my-[10px]">
            province : {hospital.data.province}
          </p>
          <p className="text-lg my-[10px]">
            postalcode : {hospital.data.postalcode}
          </p>
          <p className="text-lg my-[10px]">phone : {hospital.data.tel}</p>
        </div>
      </div>
    </main>
  );
}
