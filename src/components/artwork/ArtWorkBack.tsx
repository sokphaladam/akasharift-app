import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
interface Props {
  artworkBack: string;
  width: number;
  height?: any;
  allBorderRadius?: boolean;
  sizeinher?: Boolean;
}

export default function ArtWorkBack({
  artworkBack,
  width,
  height,
  allBorderRadius,
  sizeinher,
}: Props) {
  const ref = useRef<HTMLDivElement | any>(null);
  const [widths, setWidth] = useState(0);
  const [heights, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        // backgroundColor: "#345b4b",
        width: "100%",
        height: height ? height : "100%",
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        // borderTopLeftRadius: allBorderRadius ? 5 : 0,
        // borderTopRightRadius: allBorderRadius ? 5 : 0,
        backgroundImage: `url(${artworkBack})`,
        // backgroundPosition: "center",
        backgroundSize: !!sizeinher
          ? `${widths > 0 ? widths : 0}px ${heights > 0 ? heights : 0}px`
          : "100%",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
      }}
    ></div>
  );
}
