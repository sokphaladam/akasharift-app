import Image from "next/image";
import React, { useRef } from "react";
interface Props {
  artworkBack: string;
  width: number;
  height?: number;
  allBorderRadius?: boolean;
  sizeinher?: Boolean
}

export default function ArtWorkBack({
  artworkBack,
  width,
  height,
  allBorderRadius,
  sizeinher 
}: Props) {
  const ref = useRef<HTMLDivElement| any>(null);

  return (
    <div
      ref={ref}
      style={{
        // backgroundColor: "#345b4b",
        width: "100%",
        height: height ? height : '100%',
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        // borderTopLeftRadius: allBorderRadius ? 5 : 0,
        // borderTopRightRadius: allBorderRadius ? 5 : 0,
        backgroundImage: `url(${artworkBack})`,
        // backgroundPosition: "center",
        backgroundSize: !!sizeinher && ref.current ? `${ref.current.offsetWidth}px ${ref.current.offsetHeight}px` : '100%',
        backgroundRepeat: "no-repeat",
        objectFit: 'contain'
      }}
    ></div>
  );
}
