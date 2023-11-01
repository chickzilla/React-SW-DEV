import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";

export default function HospitalPage() {
  const hospital = getHospitals();

  return (
    <main className="mt-[50px]">
      <div className="text-center">
        <h1 className="text-xl font-medium">Select Your Hospital</h1>
      </div>

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
      <div className="flex items-center mx-auto text-center w-[100vw] justify-center">
        <AddHospitalForm></AddHospitalForm>
      </div>
    </main>
  );
}
