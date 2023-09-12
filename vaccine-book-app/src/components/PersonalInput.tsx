"use client";

import { TextField } from "@mui/material";

export default function PersonalInput() {
  return (
    <div className="flex flex-col w-[100%] space-y-10 my-[50px] ">
      <div className="w-[100%] items-center text-black text-xl font-bold">
        Personal Information
      </div>
      <div className="flex flex-row w-[100%] space-x-10">
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          className="w-[100%]"
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          className="w-[100%]"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Citize ID"
          variant="outlined"
          className="w-[70%]"
        />
      </div>
    </div>
  );
}
