"use client";

import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function SelectHospital({
  onLocationChange,
}: {
  onLocationChange: Function;
}) {
  const [hospital, setHospital] = useState("Chulalongkorn Hospital");
  return (
    <div
      className="flex flex-col w-[100%] space-y-10 my-[50px]
    "
    >
      <div className="w-[100%] items-center text-black text-xl font-bold">
        Hospital
      </div>
      <Select
        variant="standard"
        name="hospital"
        id="hospital"
        className="h-[2em] w-[200px]"
        value={hospital}
        onChange={(e) => {
          setHospital(e.target.value);
          onLocationChange(e.target.value);
        }}
      >
        <MenuItem value="Chulalongkorn Hospital">
          Chulalongkorn Hospital
        </MenuItem>
        <MenuItem value="Rajavinit Hospital">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University Hospital">
          Thammasat University Hospital
        </MenuItem>
      </Select>
    </div>
  );
}
