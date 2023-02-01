import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hook/useWindowSize";
import { BlockContent } from "../BlockContent";

export function Story({ story }: { story: any }) {
  const { innerWidth } = useWindowSize();

  return (
    <BlockContent title="">
      {/* {innerWidth >= 1900 && (
        <span
          style={{
            position: "absolute",
            left: "-15%",
            top: "-40%",
          }}
        >
          <Image
            src={story.artwork_left}
            alt="Vercel Logo"
            style={{
              objectFit: "cover",
            }}
            width={650}
            height={550}
          />
        </span>
      )} */}
      <h4
        style={{
          width: innerWidth > 1000 ? "55%" : "100%",
          color: "#f3f3f3",
          // margin: innerWidth >= 1900 ? "auto" : "20px",
          margin: innerWidth > 1000 ? "auto" : "0px",
          marginBottom: "5rem",
          marginTop: "4.5rem",
          textAlign: "justify",
          padding: innerWidth > 1000 ? "0" : "20px 0px",
          textJustify: "inter-word",
          fontFamily: "martelsan",
        }}
        dangerouslySetInnerHTML={{ __html: story.content + "" }}
      ></h4>
      {/* {innerWidth >= 1900 && (
        <span
          style={{
            position: "absolute",
            right: "-15%",
            top: "-40%",
          }}
        >
          <Image
            src={story.artwork_right}
            alt="Vercel Logo"
            style={{
              objectFit: "cover",
            }}
            width={650}
            height={650}
          />
        </span>
      )} */}
    </BlockContent>
  );
}
