import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main
      className="
      bg-zinc-900	
    "
    >
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Card
          hospitalName="Chulalongkorn Hospital"
          hospitalSrc="/img/chula.jpg"
        />
        <Card
          hospitalName="Rajavithi Hospital"
          hospitalSrc="/img/rajavithi.jpg"
        />
        <Card
          hospitalName="Thammasat University Hospital
          "
          hospitalSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
