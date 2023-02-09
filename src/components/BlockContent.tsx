import dynamic from "next/dynamic";
import React from "react";
import { useWindowSize } from "../hook/useWindowSize";

const ButtonAninme = dynamic(() => import("./ButtonAnime"), {
  ssr: false,
});

interface Props {
  title: string;
  id?: string;
}

export function BlockContent(props: React.PropsWithChildren<Props>) {
  const { innerWidth } = useWindowSize();

  return (
    <div>
      <div
        style={{
          padding: innerWidth < 1500 ? "0rem 5%" : "0rem 10%",
          marginTop: "-3%",
        }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            width: "100%",
            padding: "1rem",
            borderRadius: 5,
            textAlign: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
