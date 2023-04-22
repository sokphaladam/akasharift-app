import { useContext } from "react";
import { Story } from "../components/artwork/Story";
import { BlockContent } from "../components/BlockContent";
import TeamComponent from "../components/TeamComponent";
import { SettingContext } from "../context/SettingContext";
import { useWindowSize } from "../hook/useWindowSize";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

const ArtWorkBack = dynamic(() => import("../components/artwork/ArtWorkBack"), {
  ssr: false,
});

const Charater = dynamic(() => import("../components/artwork/Character"), {
  ssr: false,
});

const FAQ = dynamic(() => import("../components/artwork/FAQ"), {
  ssr: false,
});

const Join = dynamic(() => import("../components/artwork/Join"), {
  ssr: false,
});

export function MobileHomeScreen({
  content,
  logo,
}: {
  content: any;
  logo: any;
}) {
  const { setting } = useContext(SettingContext);
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <Layout>
      <div className="w-screen h-screen snap-normal overflow-scroll overflow-x-hidden scroll-smooth">
        <section className="snap-start" id="home"></section>
      </div>
    </Layout>
  );
}
