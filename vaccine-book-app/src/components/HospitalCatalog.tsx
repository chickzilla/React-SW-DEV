import Card from "./Card";
import Link from "next/link";

export default async function HospitalCatalog({
  HospitalJson,
}: {
  HospitalJson: Object;
}) {
  const HospitalReady = await HospitalJson;
  return (
    <>
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
        {HospitalReady.data.map((cardItem: Object) => (
          <Link className="w-1/5" href={`/hospital/${cardItem.id}`}>
            <Card hospitalName={cardItem.name} hospitalSrc={cardItem.picture} />
          </Link>
        ))}
      </div>
    </>
  );
}
