"use client";

import React from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function OnCardAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="w-1/5 h-[300px] rounded-lg shadow-xl bg-zinc-700	pt-[10px]"
      onMouseOver={(e) => OnCardAction(e)}
      onMouseOut={(e) => OnCardAction(e)}
    >
      {children}
    </div>
  );
}
