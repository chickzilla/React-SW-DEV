import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const HRepo = new Map();
  HRepo.set("001", { name: "Chulalongkorn Hospital", image: "/img/chula.jpg" });
  HRepo.set("002", { name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" });
  HRepo.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
  });

  return (
    <main className="mt-[90px]">
      <div className="flex flex-row my-10 justify-evenly">
        <Image
          src={HRepo.get(params.hid).image}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <h1 className="text-4xl font-medium text-black">
          {HRepo.get(params.hid).name}
        </h1>
      </div>
    </main>
  );
}

export async function GenerateParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
