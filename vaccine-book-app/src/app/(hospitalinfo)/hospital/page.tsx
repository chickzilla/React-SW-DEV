import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function HospitalPage() {
  const hospital = getHospitals();

  return (
    <main className="mt-[50px]">
      <h1 className="text-xl font-medium">Select Your Hospital</h1>

      <Suspense
        fallback={
          <h1 className="mt-[20px] text-black text-center mb-[20px]">
            Relax and wait...
            <LinearProgress />
          </h1>
        }
      >
        <HospitalCatalog HospitalJson={hospital}></HospitalCatalog>
      </Suspense>
    </main>
  );
}
