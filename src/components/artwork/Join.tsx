/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BlockContent } from "../BlockContent";

export function Join({ join }: { join: any }) {
  return (
    <BlockContent title="Join the play" id="enter">
      <p
        style={{
          width: "55%",
          color: "#f3f3f3",
          margin: "auto",
          marginBottom: "5rem",
          marginTop: "4.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: join.content }}
      ></p>
      <a
        className="btn btn-light"
        target={"_blank"}
        href={join.btn.link ? join.btn.link : "#"}
      >
        {join.btn.label}
      </a>
    </BlockContent>
  );
}
