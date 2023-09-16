"use client";

import Card from "./Card";
import { useReducer, useState } from "react";
import Link from "next/link";

export default function CardPanel() {
  const RatingReducer = (
    RatingMap: Map<string, number>,
    action: { type: string; HostName: string; Rating: number }
  ) => {
    switch (action.type) {
      case "change": {
        return new Map(RatingMap.set(action.HostName, action.Rating));
      }
      case "delete": {
        RatingMap.delete(action.HostName);
        console.log("after delete", new Map(RatingMap));

        return new Map(RatingMap);
      }
      default:
        return RatingMap;
    }
  };

  const [RatingMap, dispatchRating] = useReducer(
    RatingReducer,
    new Map<string, number>()
  );
  console.log("RatingMap", RatingMap);

  /**
   * Mock Data
   */
  const CardRepo = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignContent: "space-around",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {CardRepo.map((cardItem) => (
        <Link className="w-1/5" href={`/hospital/${cardItem.hid}`}>
          <Card
            hospitalName={cardItem.name}
            hospitalSrc={cardItem.image}
            Func={(Hospital: string, Rate: number) => {
              dispatchRating({
                type: "change",
                HostName: Hospital,
                Rating: Rate,
              });
            }}
            ratingParent={RatingMap.get(cardItem.name) || 0}
          />
        </Link>
      ))}

      <div className="w-full text-xl font-medium text-black mt-[25px] ml-[100px] space-y-5">
        {Array.from(RatingMap).map(([hostMap, valueMap]) => (
          <div
            className="cursor-pointer"
            key={hostMap}
            onClick={() => {
              dispatchRating({
                type: "delete",
                HostName: hostMap,
                Rating: valueMap,
              });
            }}
          >
            {hostMap} Rate = {valueMap}
          </div>
        ))}
      </div>
    </div>
  );
}
