"use client";
import dynamic from "next/dynamic";

const HomeScreen = dynamic(() => import("./HomeScreen"), {
  ssr: false,
});

export function RenderHomeScreen() {
  if (process.browser) {
    console.log(process.env);
    return <HomeScreen />;
  }
  return <div></div>;
}
