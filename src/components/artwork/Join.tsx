/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from "react";
import { BlockContent } from "../BlockContent";
import Image from "next/image";

export default function Join({ join }: { join: any }) {
  const ref = useRef<HTMLDivElement | any>(null);
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

  if (!process.browser) return <></>;

  return (
    <div>
      <div className="snap-center">
        <div className="h-screen w-screen flex flex-col justify-center items-center relative">
          <Image
            src={"/assets/07-join.PNG"}
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
              The show is about to start. <br /> And you are about to be rifted
              to
            </p>
            <div>
              <h2
                className="title sm:text-7xl md:text-8xl"
                style={{ color: "#000", fontFamily: "farout" }}
              >
                TERREWAT
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
            <h6
              style={{
                fontSize: 50,
                fontWeight: "bolder",
                textShadow: "0px 2px 4px #d0aca2",
                fontFamily: "asul",
              }}
              className="logohover md:text-4xl sm:text-2xl mt-4 uppercase"
            >
              Enter the rift
            </h6>
          </div>
        </div>
      </div>
      <div className="snap-center">
        <div className="w-screen h-1/3"></div>
      </div>
    </div>
  );

  return (
    <div style={{ margin: "0 7rem 7rem 7rem" }}>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: 1140,
          backgroundImage: `url(/assets/07-join.PNG)`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          position: "relative",
          backgroundSize: "contain",
        }}
        className="roadmap"
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "25%",
            transform: "translate(-50%, 25%)",
            textAlign: "center",
            margin: "auto",
          }}
          className="snap-center"
        >
          <p style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
            The show is about to start. <br /> And you are about to be rifted to
          </p>
          <h2 className="title" style={{ color: "#000", fontSize: 90 }}>
            TERREWAT
          </h2>
          <div
            style={{
              borderStyle: "solid",
              borderColor: "red",
              width: 100,
              borderBottomWidth: 0,
              margin: "auto",
            }}
          ></div>
          <br />
          <h6
            style={{
              fontSize: 50,
              fontWeight: "bolder",
              textShadow: "0px 2px 4px #d0aca2",
            }}
          >
            Enter the rift
          </h6>
        </div>
        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam officiis aliquid ex necessitatibus temporibus in magni error molestiae illum vitae enim, perspiciatis suscipit deleniti aliquam architecto dolores ducimus? Consequatur? */}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="snap-center"
      >
        <img
          style={{ width: 150, height: 100, marginRight: "5rem" }}
          src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FLogo_Akasha-Rift_A-Black-removebg-preview.png?alt=media&token=94029238-260a-4551-a6e4-7fd05d8cd78f"
          alt=""
        />
        <img
          style={{ width: 150, height: 100 }}
          src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_AR.png?alt=media&token=b831f909-0098-4906-af44-0e44ca9ed6f7"
          alt=""
        />
      </div>
    </div>
  );
  return (
    <BlockContent title="Join the play">
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
