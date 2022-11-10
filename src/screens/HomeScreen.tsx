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
import { Cloud } from "../components/Cloud";
import { DesktopMenuComponent } from "../components/DesktopMenu";
import TeamComponent from "../components/TeamComponent";
import { SettingContext } from "../context/SettingContext";
import { database } from "../store/firebase";

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

function MobileHomeScreen() {
  return (
    <div>
      <main></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          {/* <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span> */}
        </a>
      </footer>
    </div>
  );
}

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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

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

  if (isMobile) {
    return <MobileHomeScreen />;
  }

  if (loading) return <div></div>;

  const logo = content.find((x) => x.key === "LOGO");

  if (!logo) return <div></div>;

  return (
    <Layout>
      <ArtWorkBack
        artworkBack={setting.loading ? "" : setting.value.background[0]}
        height={height}
        width={width}
      />
      <div style={{ padding: "0rem 3rem", marginTop: "-2%" }}>
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
        <ArtWorkBack
          width={width}
          height={height / 1.5}
          artworkBack={setting.loading ? "" : setting.value.background[1]}
          allBorderRadius={true}
        />
        <Story story={content.find((x) => x.key === "STORY")} />
        <div style={{ marginTop: "10%" }}>
          <Charater character={content.find((x) => x.key === "CHARACTER")} />
        </div>
      </div>
      <ArtWorkBack
        artworkBack={setting.loading ? "" : setting.value.background[2]}
        width={width}
        height={height / 1.5}
      />
      <div
        style={{
          padding: "0rem 3rem",
          marginTop: "-2%",
          position: "relative",
        }}
      >
        <Roadmap />
        <div style={{ marginTop: "10%" }}>
          <TeamComponent />
        </div>
        <div style={{ marginTop: "10%" }}>
          <FAQ />
        </div>
        <div style={{ marginTop: "10%" }}>
          <Join />
        </div>
      </div>
    </Layout>
  );
}
