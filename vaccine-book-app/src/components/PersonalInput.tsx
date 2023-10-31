"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

export default function PersonalInput({
  onFirstnameChange,
  onLastnameChange,
  onIdChange,
}: {
  onFirstnameChange: Function;
  onLastnameChange: Function;
  onIdChange: Function;
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [id, setId] = useState("");
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
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
            onFirstnameChange(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          className="w-[100%]"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
            onLastnameChange(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Citize ID"
          variant="outlined"
          className="w-[70%]"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            onIdChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
