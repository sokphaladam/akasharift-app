import Image from "next/image";
import React from "react";
import { BlockContent } from "../BlockContent";

export function Story({ story }: { story: any }) {
  return (
    <BlockContent title="Story" id="story">
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
      <p
        style={{
          width: "55%",
          color: "#f3f3f3",
          margin: "auto",
          marginBottom: "5rem",
          marginTop: "4.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: story.content + "" }}
      ></p>
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
    </BlockContent>
  );
}
