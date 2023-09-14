"use client";

import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";

export default function () {
  const covers = [
    "/img/vaccine_banner.jpg",
    "/img/vaccine_banner2.jpg",
    "/img/vaccine_banner3.jpg",
    "/img/vaccine_banner4.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.Banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        className="object-cover"
        priority
        sizes="100vh"
      />
      <div className={styles.bannerText}>
        <h1 className="text-6xl font-bold mb-2">VaxServe</h1>
        <h3 className="text-base mt-3 font-medium">
          "Your Pathway to a Safer Tomorrow"
        </h3>
      </div>
    </div>
  );
}
