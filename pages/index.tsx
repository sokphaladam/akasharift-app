import type { NextPage } from "next";
// import { HomeScreen } from "../src/screens/HomeScreen";
import dynamic from "next/dynamic";

const HomeScreen = dynamic(() => import("../src/screens/HomeScreen"), {
  ssr: false,
});

const Home: NextPage = () => {
  return <HomeScreen />;
};

export default Home;
