"use client";
import dynamic from "next/dynamic";

const HomeScreen = dynamic(() => import("./HomeScreen"), {
  ssr: false,
});

export default function RenderHomeScreen() {
  if (process.browser) {
    console.log(process.env.NODE_ENV);
    return <HomeScreen />;
  }
  return <div></div>;
}
