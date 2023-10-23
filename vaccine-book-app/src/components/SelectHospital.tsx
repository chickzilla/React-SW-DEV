"use client";

import { Select, MenuItem } from "@mui/material";

export default function SelectHospital() {
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
      >
        <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavinit">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
      </Select>
    </div>
  );
}
