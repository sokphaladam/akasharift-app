import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { BlockContent } from "../components/BlockContent";
import DesktopMenu from "../components/DesktopMenu";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

const Fileupload = dynamic(() => import("../components/Fileupload"), {
  ssr: true,
});

function Curtain() {
  const [size, setSize] = useState({
    width: process.browser ? window.innerWidth : 0,
    height: process.browser ? window.innerHeight : 0,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize({
        width: process.browser ? window.innerWidth : 0,
        height: process.browser ? window.innerHeight : 0,
      });
    });
  }, []);

  return (
    <div className="curtain" style={{ height: size.height, width: size.width }}>
      <div className="logo" style={{ height: 200, width: size.width / 1 }} />
      <div className="container">
        <h4 style={{ width: "55%", fontFamily: "martelsan" }}>
          Welcome to Terrenwat, a distant realm where our dreams converge. Be
          free to embark on and adventurius journey in the Akasha Rift.
        </h4>
      </div>
    </div>
  );
}

export function PlaygroundScreen() {
  return (
    <div>
      <DesktopMenu />
      <Curtain />
    </div>
  );
}
