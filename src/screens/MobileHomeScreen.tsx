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
      <ArtWorkBack
        artworkBack={setting.loading ? "" : setting.value.background[0]}
        height={innerHeight / 1.5}
        width={innerWidth}
      />
      <div style={{ padding: "0rem 1rem", marginTop: "-2%" }}>
        <BlockContent title="Logo">
          <p
            style={{
              width: "55%",
              color: "#f3f3f3",
              margin: "auto",
              marginBottom: "5rem",
              marginTop: "4.5rem",
            }}
            dangerouslySetInnerHTML={{
              __html: logo.content,
            }}
          ></p>
          <button
            className="btn btn-light"
            onClick={() => window.open(logo.btn.link, "_blank")}
          >
            {logo.btn.label}
          </button>
        </BlockContent>
        <div style={{ marginTop: "10%" }}>
          <ArtWorkBack
            width={innerWidth}
            height={200}
            artworkBack={setting.loading ? "" : setting.value.background[1]}
            allBorderRadius={true}
          />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Story story={content.find((x: any) => x.key === "STORY")} />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Charater
            character={content.find((x: any) => x.key === "CHARACTER")}
          />
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <ArtWorkBack
          artworkBack={setting.loading ? "" : setting.value.background[2]}
          width={innerWidth}
          height={250}
        />
      </div>
      <div
        style={{
          padding: "0rem 0rem",
          marginTop: "-2%",
          position: "relative",
        }}
      >
        {/* <Roadmap /> */}
        <div style={{ marginTop: "10%" }}>
          <TeamComponent team={content.find((x: any) => x.key === "TEAM")} />
        </div>
        <br />
        <div style={{ marginTop: "10%" }}>
          <FAQ />
        </div>
        <br />
        <div style={{ marginTop: "10%" }}>
          <Join join={content.find((x: any) => x.key === "JOIN_TEAM")} />
        </div>
      </div>
    </Layout>
  );
}
