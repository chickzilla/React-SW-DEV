"use client";

import styles from "./banner.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function () {
  const covers = [
    "/img/vaccine_banner.jpg",
    "/img/vaccine_banner2.jpg",
    "/img/vaccine_banner3.jpg",
    "/img/vaccine_banner4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const rounter = useRouter();

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
      <button
        className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-10 hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          rounter.push("/hospital");
          e.stopPropagation();
        }}
      >
        Hospital Info
      </button>
    </div>
  );
}
