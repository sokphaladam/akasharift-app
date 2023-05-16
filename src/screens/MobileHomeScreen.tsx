/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { Story } from "../components/artwork/Story";
import { BlockContent } from "../components/BlockContent";
import TeamComponent from "../components/TeamComponent";
import { SettingContext, TriggerClick } from "../context/SettingContext";
import { useWindowSize } from "../hook/useWindowSize";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { database } from "../store/firebase";
import { StarFillPage } from "../components/StartFillPage";
import { Footer } from "../components/artwork/Footer";

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

const Roadmap = dynamic(() => import("../components/artwork/Roadmap"), {
  ssr: false,
});

function RenderStory() {
  const [width, setWidth] = useState(process.browser ? window.innerWidth : 0);
  const [value, loading, error] = useDocument(
    doc(database, "custom_page", "story-layout"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={loading ? "" : (value?.data() as any).file}
        alt=""
        className="object-contain"
      />
      <div className="pt-5">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: "30px",
            textShadow: "0px 2px 4px #d0aca2",
          }}
        >
          <p className="mb-3 max-w-[70%] text-justify">
            {value?.data() && (value?.data() as any).title}
          </p>
        </motion.h3>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "#b93a36",
            width: 100,
            borderBottomWidth: 3,
          }}
        ></div>
      </div>
      <div>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          style={{
            width: "100%",
            color: "#f3f3f3",
            margin: "auto",
            marginBottom: "1rem",
            marginTop: "1.5rem",
            fontFamily: "martelsan",
            textAlign: "justify",
            textAlignLast: "center",
            fontSize: "14px",
            lineHeight: "26px",
          }}
          className="flex flex-col justify-center items-center"
        >
          {value?.data() &&
          (value?.data() as any).description.split("\n").length > 1
            ? (value?.data() as any).description
                .split("\n")
                .map((x: any, i: number) => {
                  return (
                    <p
                      key={i}
                      className="mb-3 max-w-[70%] text-justify"
                      style={{
                        textAlignLast: "center",
                        fontFamily: "martelsan",
                      }}
                    >
                      {x}
                    </p>
                  );
                })
            : ""}
        </motion.h4>
      </div>
    </div>
  );
}

export function MobileHomeScreen({
  content,
  logo,
}: {
  content: any;
  logo: any;
}) {
  const { setting } = useContext(SettingContext);
  const [state, setState] = useState(false);
  const { innerWidth, innerHeight } = useWindowSize();
  const [page] = useDocument(doc(database, "custom_page", "first-layout"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <TriggerClick.Provider value={{ click: state, setClick: setState }}>
      <Layout>
        <StarFillPage />
        <div
        // className="w-screen h-screen snap-normal overflow-scroll overflow-x-hidden scroll-smooth"
        >
          <section className="relative w-full h-[703px] snap-start" id="home">
            <img
              src="/assets/group_mob.webp"
              alt=""
              className="w-full h-[903px] absolute left-0 top-[-23px] object-cover z-10"
            />
            <div className="absolute top-[55%] -translate-y-[55%] w-full z-20 flex justify-center items-center">
              {!state && (
                <motion.h4
                  initial={{
                    y: 2000,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 2.5 }}
                  style={{
                    fontFamily: "martelsan",
                    textAlign: "justify",
                    textAlignLast: "center",
                    fontSize: "12px",
                    width: innerWidth - 113,
                    lineHeight: "22px",
                  }}
                  className="pt-6"
                >
                  {page?.data() && (page?.data() as any).description}
                </motion.h4>
              )}
            </div>
          </section>
          <div className="snap-center">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                style={{
                  fontSize: "30px",
                  textShadow: "0px 2px 4px #d0aca2",
                }}
              >
                {page?.data() && (page?.data() as any).article[0].title}
              </motion.h3>
              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "#b93a36",
                  width: 100,
                  borderBottomWidth: 3,
                }}
              ></div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                style={{
                  width: "100%",
                  color: "#f3f3f3",
                  margin: "auto",
                  marginBottom: "1rem",
                  marginTop: "1.5rem",
                  fontFamily: "martelsan",
                  textAlign: "justify",
                  textAlignLast: "center",
                  fontSize: "14px",
                  lineHeight: "26px",
                }}
                className="flex flex-col justify-center items-center"
              >
                {page?.data() &&
                (page?.data() as any).article[0].description.split("\n")
                  .length > 1
                  ? (page?.data() as any).article[0].description
                      .split("\n")
                      .map((x: any, i: number) => {
                        return (
                          <p
                            key={i}
                            className="mb-3 max-w-[70%] text-justify"
                            style={{
                              textAlignLast: "center",
                              fontFamily: "martelsan",
                            }}
                          >
                            {x}
                          </p>
                        );
                      })
                  : ""}
              </motion.h4>
              <div
                style={{
                  position: "relative",
                  margin: "0 -3% 0 -3%",
                }}
              >
                <img
                  src="/assets/00_lines.webp"
                  style={{ width: "100%" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  style={{
                    fontSize: "26px",
                    textShadow: "0px 2px 4px #d0aca2",
                  }}
                >
                  {page?.data() && (page?.data() as any).article[1].title}
                </motion.h3>
                <div
                  style={{
                    borderStyle: "solid",
                    borderColor: "#b93a36",
                    width: 100,
                    borderBottomWidth: 3,
                  }}
                ></div>
              </div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                style={{
                  width: "100%",
                  color: "#f3f3f3",
                  margin: "auto",
                  marginBottom: "5rem",
                  marginTop: "1.5rem",
                  fontFamily: "martelsan",
                  textAlign: "justify",
                  textAlignLast: "center",
                  fontSize: "14px",
                  lineHeight: "26px",
                }}
                className="flex flex-col justify-center items-center"
              >
                {page?.data() &&
                (page?.data() as any).article[1].description.split("\n")
                  .length > 1
                  ? (page?.data() as any).article[1].description
                      .split("\n")
                      .map((x: any, i: number) => {
                        return (
                          <p
                            key={i}
                            className="mb-3 max-w-[70%] text-justify"
                            style={{
                              textAlignLast: "center",
                              fontFamily: "martelsan",
                            }}
                          >
                            {x}
                          </p>
                        );
                      })
                  : ""}
              </motion.h4>
            </div>
          </div>
          <div id="character">
            <Charater
              character={content.find((x: any) => x.key === "CHARACTER")}
            />
          </div>
          <br />
          <div id="story" className="pt-10">
            <RenderStory />
          </div>
          <div
            id="roadmap"
            className="flex flex-col items-center justify-center"
          >
            <Roadmap />
          </div>
          <div
            id="team"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{
                fontSize: "26px",
                textShadow: "0px 2px 4px #d0aca2",
              }}
            >
              TEAM
            </motion.h3>
            <div
              style={{
                borderStyle: "solid",
                borderColor: "#b93a36",
                width: 100,
                borderBottomWidth: 3,
              }}
            ></div>
            <TeamComponent team={content.find((x: any) => x.key === "TEAM")} />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{
                fontSize: "26px",
                textShadow: "0px 2px 4px #d0aca2",
              }}
            >
              FAQ
            </motion.h3>
            <div
              style={{
                borderStyle: "solid",
                borderColor: "#b93a36",
                width: 100,
                borderBottomWidth: 3,
              }}
            ></div>
            <FAQ />
          </div>
          <div
            id="enter"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Join join={content.find((x: any) => x.key === "JOIN_TEAM")} />
          </div>
          <Footer />
        </div>
      </Layout>
    </TriggerClick.Provider>
  );
}
