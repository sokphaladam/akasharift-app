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
          <div
            id={props.id + ""}
            style={{ position: "absolute", top: -50 }}
          ></div>
          <div
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              width: "100%",
              height: 50,
              borderRadius: 5,
              top: -25,
              left: "50%",
              transform: "translate(-50%, 0)",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <ButtonAninme title={props.title} /> */}
            <h3 style={{ fontSize: "40pt", textShadow: "0px 2px 4px #d0aca2" }}>
              {props.title}
            </h3>
          </div>
          {/* <div
          style={{
            backgroundColor: "#737374",
            position: "absolute",
            width: 250,
            height: 50,
            borderRadius: 5,
            top: -25,
            left: "50%",
            transform: "translate(-50%, 0)",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>{props.title}</h3>
        </div> */}
          {props.children}
        </div>
      </div>
    </div>
  );
}
