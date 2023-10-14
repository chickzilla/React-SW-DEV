"use client";

import useWindowListener from "@/hooks/useWindowListener";
import VideoPlayer from "./VideoPlayer";
import { useState } from "react";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[50%] shadow-lg mx-auto my-10 p-2 rounded-lg border-dashed bg-gray-200 flex flex-row ">
      <VideoPlayer vdoSrc="/video/getvaccine.mp4" isplaying={playing} />
      <div className="mx-auto flex flex-col m-5 text-black text-2xl">
        Get your vaccine today.
        <button
          className="text-lg rounded-md w-[50%] h-[40%] mt-[20%] bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm "
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "pause" : "play"}
        </button>
      </div>
    </div>
  );
}
