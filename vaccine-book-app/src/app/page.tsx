import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <main
      className="
      bg-white
      items-center	
    "
    >
      <Banner />
      <PromoteCard />
    </main>
  );
}
