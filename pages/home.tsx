import type { NextPage } from "next";
import dynamic from "next/dynamic";
const RenderHomeScreen = dynamic(
  () => import("../src/screens/RenderHomeScreen"),
  {
    ssr: false,
  }
);

const BetaHome: NextPage = () => {
  return <RenderHomeScreen />;
};

export default BetaHome;
