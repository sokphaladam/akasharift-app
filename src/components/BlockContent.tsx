import dynamic from "next/dynamic";
import React from "react";

const ButtonAninme = dynamic(() => import("./ButtonAnime"), {
  ssr: false,
});

interface Props {
  title: string;
  id?: string;
}

export function BlockContent(props: React.PropsWithChildren<Props>) {
  return (
    <div
      style={{
        padding: "0rem 10%",
        marginTop: "-3%",
      }}
      id={props.id + ""}
    >
      <div
        style={{
          backgroundColor: "#7d2e2e",
          width: "100%",
          padding: "1rem",
          borderRadius: 5,
          textAlign: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "transparent",
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
          <ButtonAninme title={props.title} />
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
  );
}
