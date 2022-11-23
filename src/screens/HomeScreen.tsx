import { collection } from "firebase/firestore";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useMediaQuery } from "react-responsive";
import { getHomeData } from "../../pages/api/home";
import styles from "../../styles/Home.module.scss";
import { FAQ } from "../components/artwork/FAQ";
import { Join } from "../components/artwork/Join";
import { Story } from "../components/artwork/Story";
import { BlockContent } from "../components/BlockContent";
import TeamComponent from "../components/TeamComponent";
import { SettingContext } from "../context/SettingContext";
import { database } from "../store/firebase";
import { MobileHomeScreen } from "./MobileHomeScreen";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

const ArtWorkBack = dynamic(() => import("../components/artwork/ArtWorkBack"), {
  ssr: false,
});

const Charater = dynamic(() => import("../components/artwork/Character"), {
  ssr: false,
});

const Roadmap = dynamic(() => import("../components/artwork/Roadmap"), {
  ssr: false,
});

export function HomeScreen() {
  const { setting } = useContext(SettingContext);
  const [content, setContent] = useState<any[]>([]);
  const [value, loading, error] = useCollection(
    collection(database, "content_block"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const width = process.browser ? window.innerWidth : 0;
  const height = process.browser ? window.innerHeight : 0;
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  useEffect(() => {
    getHomeData().then((data) => console.log(data));
  });

  useEffect(() => {
    if (!loading && value && content.length === 0) {
      setContent(
        value.docs.map((x) => {
          return {
            ...x.data(),
            key: x.id,
          };
        })
      );
    }
  }, [content, loading, value]);

  if (loading) return <div></div>;

  const logo = content.find((x) => x.key === "LOGO");

  if (!logo) return <div></div>;

  if (isMobile) {
    if (content && logo) {
      return <MobileHomeScreen content={content} logo={logo} />;
    }
    return <div></div>;
  }

  return (
    <Layout>
      <ArtWorkBack
        artworkBack={setting.loading ? "" : setting.value.background[0]}
        height={500}
        width={width}
      />
      <div style={{ padding: "0rem 3rem", marginTop: "-2%" }}>
        <div style={{ marginTop: "10%" }}>
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
        </div>
        <div style={{ marginTop: "10%" }}>
          <ArtWorkBack
            width={width}
            height={400}
            artworkBack={setting.loading ? "" : setting.value.background[1]}
            allBorderRadius={true}
          />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Story story={content.find((x) => x.key === "STORY")} />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Charater character={content.find((x) => x.key === "CHARACTER")} />
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <ArtWorkBack
          artworkBack={setting.loading ? "" : setting.value.background[2]}
          width={width}
          height={400}
        />
      </div>
      <div
        style={{
          padding: "0rem 3rem",
          marginTop: "-2%",
          position: "relative",
        }}
      >
        <div style={{ marginTop: "10%" }}>
          <Roadmap />
        </div>
        <div style={{ marginTop: "10%" }}>
          <TeamComponent team={content.find((x) => x.key === "TEAM")} />
        </div>
        <div style={{ marginTop: "10%" }}>
          <FAQ />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Join join={content.find((x) => x.key === "JOIN_TEAM")} />
        </div>
      </div>
    </Layout>
  );
}
