/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useContext } from "react";
import DesktopMenu from "./DesktopMenu";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { Popbutton } from "./Popbutton";
import { SettingContext, TriggerClick } from "../context/SettingContext";
import { useWindowSize } from "../hook/useWindowSize";
import { MobileMenu } from "./MobileMenu";

interface Props {
  title?: string;
}

export default function Layout(props: React.PropsWithChildren<Props>) {
  const { setting } = useContext(SettingContext);
  const { innerWidth } = useWindowSize();
  return (
    <
      // style={{
      //   overflow: "auto",
      //   height: window.innerHeight,
      //   scrollBehavior: "smooth",
      // }}
      // id="main"
    >
      {/* <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Curtain.png?alt=media&token=b3a36bfc-9671-4feb-af81-8d2f89b866b1"
          alt=""
          style={{
            position: "fixed",
            width: "100%",
            objectFit: "fill",
            height: "150%",
            zIndex: -1,
          }}
        />
      </div> */}
      <div
        // style={{
        //   overflow: "auto",
        //   height: window.innerHeight,
        //   scrollBehavior: "smooth",
        // }}
        className="w-screen h-screen relative"
        id="main"
      >
        {/* <TriggerClick.Provider > */}
        {innerWidth > 500 ? <DesktopMenu /> : <MobileMenu />}
        {/* <DesktopMenu /> */}
        {/* <div className="content">
        </div> */}
        {props.children}
        {/* </TriggerClick.Provider> */}
        <Popbutton />
      </div>
    </>
  );
}
