import dynamic from "next/dynamic";

const HomeScreen = dynamic(() => import("./HomeScreen"), {
  ssr: false,
});

export function RenderHomeScreen() {
  return <HomeScreen />;
}
