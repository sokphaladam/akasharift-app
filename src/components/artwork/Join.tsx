/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { doc } from "firebase/firestore";
import { database } from "../../store/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

export default function Join({ join }: { join: any }) {
  const ref = useRef<HTMLDivElement | any>(null);
  const [value, loading, error] = useDocument(
    doc(database, "custom_page", "end-layout"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [width, setWidth] = useState(process.browser ? window.innerWidth : 0);
  const [height, setHeight] = useState(
    process.browser ? window.innerHeight : 0
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(process.browser ? window.innerWidth : 0);
      setHeight(process.browser ? window.innerHeight : 0);
    });
  }, []);

  if (!process.browser || loading) return <></>;

  return (
    <div>
      <div className="snap-center">
        <div className="h-screen w-screen flex flex-col justify-center items-center relative">
          <Image
            src={value?.data() ? (value.data() as any).file : ""}
            fill
            alt=""
            className="w-2/4 h-2/4 object-contain absolute z-0"
          />
          <div className="w-2/4 h-2/4 z-1 items-center justify-center flex flex-col mt-[5%]">
            <p
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: 20,
                textAlignLast: "center",
              }}
              className="sm:text-lg md:text-xl text-justify"
            >
              {(value?.data() as any).description.split("\n").length > 1
                ? (value?.data() as any).description
                    .split("\n")
                    .map((x: any, i: number) => {
                      return (
                        <span key={i}>
                          {x}
                          <br />
                        </span>
                      );
                    })
                : (value?.data() as any).description}
            </p>
            <div>
              <h2
                className="title sm:text-7xl md:text-8xl"
                style={{ color: "#000", fontFamily: "farout" }}
              >
                {(value?.data() as any).title}
              </h2>
              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "#b93a36",
                  width: 100,
                  borderBottomWidth: 3,
                  margin: "auto",
                }}
              ></div>
            </div>
            {(value?.data() as any).link.url ? (
              <a href={(value?.data() as any).link.url} target="_blank">
                <h6
                  style={{
                    fontSize: 50,
                    fontWeight: "bolder",
                    textShadow: "0px 2px 4px #d0aca2",
                    fontFamily: "asul",
                  }}
                  className="logohover md:text-4xl sm:text-2xl mt-4 uppercase"
                >
                  {(value?.data() as any).link.title}
                </h6>
              </a>
            ) : (
              <h6
                style={{
                  fontSize: 50,
                  fontWeight: "bolder",
                  textShadow: "0px 2px 4px #d0aca2",
                  fontFamily: "asul",
                }}
                className="logohover md:text-4xl sm:text-2xl mt-4 uppercase"
              >
                {(value?.data() as any).link.title}
              </h6>
            )}
          </div>
        </div>
      </div>
      <div className="snap-center">
        <div className="w-screen h-1/3"></div>
      </div>
    </div>
  );
}
