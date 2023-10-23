"use client";

import React from "react";
import { Provider as ReactReduxProvide } from "react-redux"; // เดี๋ยวชื่อซ้ำกับ Session
import { store } from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactReduxProvide store={store}>{children}</ReactReduxProvide>;
}
