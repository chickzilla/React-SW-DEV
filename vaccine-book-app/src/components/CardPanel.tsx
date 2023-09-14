"use client";

import Card from "./Card";
import { useReducer, useState } from "react";

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
      <Card
        hospitalName="Chulalongkorn Hospital"
        hospitalSrc="/img/chula.jpg"
        Func={(Hospital: string, Rate: number) => {
          dispatchRating({
            type: "change",
            HostName: Hospital,
            Rating: Rate,
          });
        }}
        ratingParent={RatingMap.get("Chulalongkorn Hospital") || 0}
      />
      <Card
        hospitalName="Rajavithi Hospital"
        hospitalSrc="/img/rajavithi.jpg"
        Func={(Hospital: string, Rate: number) => {
          dispatchRating({
            type: "change",
            HostName: Hospital,
            Rating: Rate,
          });
        }}
        ratingParent={RatingMap.get("Rajavithi Hospital") || 0}
      />
      <Card
        hospitalName="Thammasat University Hospital"
        hospitalSrc="/img/thammasat.jpg"
        Func={(Hospital: string, Rate: number) => {
          dispatchRating({
            type: "change",
            HostName: Hospital,
            Rating: Rate,
          });
        }}
        ratingParent={RatingMap.get("Thammasat University Hospital") || 0}
      />
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
