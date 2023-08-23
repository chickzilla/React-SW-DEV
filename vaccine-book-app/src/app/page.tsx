import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Card />
      </div>
    </main>
  );
}
