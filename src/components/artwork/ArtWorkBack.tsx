import Image from "next/image";
import React from "react";
interface Props {
  artworkBack: string;
  width: number;
  height: number;
  allBorderRadius?: boolean;
}

export default function ArtWorkBack({
  artworkBack,
  width,
  height,
  allBorderRadius,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#345b4b",
        width: "100%",
        height: height / 2,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: allBorderRadius ? 5 : 0,
        borderTopRightRadius: allBorderRadius ? 5 : 0,
        backgroundImage: `url(${artworkBack})`,
        backgroundPosition: "center",
        backgroundSize: "center",
      }}
    ></div>
  );
}
