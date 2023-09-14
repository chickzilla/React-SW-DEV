"use client";

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function ({
  hospitalName,
  hospitalSrc,
  Func,
  ratingParent,
}: {
  hospitalName: string;
  hospitalSrc: string;
  Func: Function;
  ratingParent: number;
}) {
  //const [value, setValue] = useState<number>(0);

  //  console.log(`Rendering HospitalRating ${hospitalName} - value: ${value}`);

  return (
    <InteractiveCard>
      <div className="w-full h-4/6 relative">
        <Image src={hospitalSrc} alt="card" fill={true} objectFit="cover" />
      </div>
      <div className="h-1-6 p-[10px] text-black text-center text-base">
        {hospitalName}
      </div>
      <div className="h-1/6 text-center">
        <Rating
          name="simple-controlled"
          value={ratingParent}
          onChange={(event, newValue) => {
            //setValue(newValue || 0);
            Func(hospitalName, newValue);
          }}
        />
      </div>
    </InteractiveCard>
  );
}
