"use client";
import { useRef, useEffect } from "react";

export default function VideoPlayer({
  vdoSrc,
  isplaying,
}: {
  vdoSrc: string;
  isplaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isplaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isplaying]);

  return (
    <video src={vdoSrc} className="w-[40%]" controls loop muted ref={vdoRef} />
  );
}
