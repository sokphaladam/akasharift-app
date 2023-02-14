/* eslint-disable @next/next/no-img-element */
import { collection } from "firebase/firestore";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useMediaQuery } from "react-responsive";
import { getHomeData } from "../../pages/api/home";
import styles from "../../styles/Home.module.scss";
import { Story } from "../components/artwork/Story";
import { BlockContent } from "../components/BlockContent";
import TeamComponent from "../components/TeamComponent";
import { SettingContext } from "../context/SettingContext";
import { database } from "../store/firebase";
import { MobileHomeScreen } from "./MobileHomeScreen";
import { motion } from "framer-motion";

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

const FAQ = dynamic(() => import("../components/artwork/FAQ"), {
  ssr: false,
});

const Join = dynamic(() => import("../components/artwork/Join"), {
  ssr: false,
});

export default function HomeScreen() {
  const construction = false;
  const { setting } = useContext(SettingContext);
  const [content, setContent] = useState<any[]>([]);
  const [width, setWidth] = useState(process.browser ? window.innerWidth : 0);
  const [height, setHeight] = useState(
    process.browser ? window.innerHeight : 0
  );
  const [loadings, setLoading] = useState(true);
  const [value, loading, error] = useCollection(
    collection(database, "content_block"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  useEffect(() => {
    getHomeData().then((data) => console.log(data));

    document.getElementById("main")?.scrollTo({ top: 0 });

    window.addEventListener("resize", () => {
      setWidth(process.browser ? window.innerWidth : 0);
      setHeight(process.browser ? window.innerHeight : 0);
    });
  }, []);

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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [content, loading, value]);

  if (loading) return <div></div>;

  const logo = content.find((x) => x.key === "LOGO");

  if (!logo) return <div></div>;

  if (isMobile) {
    // if (content && logo) {
    //   return <MobileHomeScreen content={content} logo={logo} />;
    // }
    return (
      <div
        style={{
          height,
          width,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h5>Under Construction</h5>
          <p>Allow to view in desktop screen only.</p>
        </div>
      </div>
    );
  }

  if (!!construction) {
    return (
      <div
        style={{
          height,
          width,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h5>Under Construction</h5>
        </div>
      </div>
    );
  }

  // return (
  //   <Layout>
  //     <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
  //       <section className="snap-start">
  //         <div className="h-screen">First Screen</div>
  //       </section>
  //       <section className="snap-center">
  //         <div className="h-screen">Next Screen</div>
  //       </section>
  //     </div>
  //   </Layout>
  // );

  return (
    <Layout>
      <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
        <section className="snap-start" id="home">
          <div style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F01_Intro%20Stars.PNG?alt=media&token=7b88ac9f-6186-40df-83bc-24c25cf4890a)",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -32%)",
                height: "40%",
                width: "70%",
              }}
              className="flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
            >
              <div
                style={{
                  position: "relative",
                  height: "600px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="pt-8"
              >
                {!loadings && (
                  <motion.h4
                    initial={{
                      x: -2000,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{ duration: 2.5 }}
                    style={{
                      width: "55%",
                      fontFamily: "martelsan",
                      textAlign: "justify",
                      textAlignLast: "center",
                    }}
                    // className="animation_slide_up"
                  >
                    Welcome to Terrenwat, a distant realm where our dreams
                    converge. Be free to embark on and adventurius journey in
                    the Akasha Rift.
                  </motion.h4>
                )}
              </div>
            </div>
            <img
              // two hands
              src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_hands.png?alt=media&token=27cc17e3-1829-4799-9181-21b435af9a6f"
              alt=""
              style={{
                position: "absolute",
                top: "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "95%",
              }}
            />
            <img
              // moon
              src="/assets/00-orb-white.PNG"
              className="w-[150px] h-[150px] object-cover absolute bottom-[11%] left-[50%] -translate-x-[50%] -translate-y-[15%]"
              alt=""
            />
            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                bottom: "7%",
                left: "20%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-5%",
                left: "13%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-33%",
                // bottom: height / 3,
                left: "20%",
                width: "20%",
                height: "auto",
                zIndex: 1,
                objectFit: "contain",
                transform: "translate(-20%, 33%)",
                // position: "fixed",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "7%",
                right: "20%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-5%",
                right: "13%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-10%",
                right: "20%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-25%",
                right: "30%",
                objectFit: "contain",
              }}
            />
            <Image
              // curtain
              src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Curtain.png?alt=media&token=b3a36bfc-9671-4feb-af81-8d2f89b866b1"
              alt=""
              style={{
                width: "100%",
                objectFit: "fill",
                height: "150%",
                marginTop: "0%",
                position: "sticky",
              }}
              priority
              width={width}
              height={height}
              onLoad={() => setLoading(true)}
              onLoadingComplete={() => setLoading(false)}
            />
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1.5 }}
              src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_AR.png?alt=media&token=b831f909-0098-4906-af44-0e44ca9ed6f7"
              alt=""
              style={{
                position: "absolute",
                zIndex: 999,
                top: "19%",
                left: "40%",
                width: "20%",
              }}
              className="logohover"
            />
          </div>
        </section>
        <div style={{ padding: "0rem 3rem", marginTop: "-2%" }}>
          <div style={{ marginTop: "-10%" }} className="snap-center">
            <BlockContent title="">
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
                    fontSize: "40pt",
                    textShadow: "0px 2px 4px #d0aca2",
                  }}
                >
                  ENTER THE PLAY
                </motion.h3>
                <div
                  style={{
                    borderStyle: "solid",
                    borderColor: "red",
                    width: 100,
                    borderBottomWidth: 0,
                  }}
                ></div>
              </div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                style={{
                  width: "70%",
                  color: "#f3f3f3",
                  margin: "auto",
                  marginBottom: "5rem",
                  marginTop: "4.5rem",
                  fontFamily: "martelsan",
                  textAlign: "justify",
                  textAlignLast: "center",
                }}
                dangerouslySetInnerHTML={{
                  __html: logo.content,
                }}
              ></motion.h4>
            </BlockContent>
          </div>
          <div
            style={{
              position: "relative",
              margin: "0 -3% 0 -3%",
            }}
          >
            <img src="/assets/00_lines.PNG" style={{ width: "100%" }} alt="" />
          </div>
          <div style={{ marginTop: "0%" }} className="snap-center">
            <BlockContent title="">
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
                    fontSize: "40pt",
                    textShadow: "0px 2px 4px #d0aca2",
                  }}
                >
                  WHO WILL YOU BE?
                </motion.h3>
                <div
                  style={{
                    borderStyle: "solid",
                    borderColor: "red",
                    width: 100,
                    borderBottomWidth: 0,
                  }}
                ></div>
              </div>
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                style={{
                  width: "70%",
                  color: "#f3f3f3",
                  margin: "auto",
                  marginBottom: "5rem",
                  marginTop: "4.5rem",
                  fontFamily: "martelsan",
                  textAlign: "justify",
                  textAlignLast: "center",
                }}
              >
                Our NFTs are the ticket to our world. This character is you. Now
                step into our world and dare be creative, artistic, and
                audacious to seek out your own tale with the same-minded
                community.
              </motion.h4>
            </BlockContent>
          </div>
        </div>

        {/*  */}

        <div style={{ position: "relative" }}>
          <img
            src="/assets/00_star-reds.PNG"
            alt=""
            className="star"
            style={{
              top: 0,
              width: "10%",
              height: "auto",
            }}
          />
          <img
            src="/assets/00_star-white.PNG"
            alt=""
            className="star"
            style={{
              top: "15%",
              left: "13%",
              objectFit: "contain",
            }}
          />
          <img
            src="/assets/00_star-white.PNG"
            alt=""
            className="star"
            style={{
              top: "30%",
              left: "5%",
              objectFit: "contain",
            }}
          />
          <img
            src="/assets/00_star-yellow.PNG"
            alt=""
            className="star"
            style={{
              top: "10%",
              right: "20%",
              objectFit: "contain",
            }}
          />
          <img
            src="/assets/00_star-white.PNG"
            alt=""
            className="star"
            style={{
              top: "-10%",
              right: "10%",
              objectFit: "contain",
            }}
          />
          <img
            src="/assets/00_star-reds.PNG"
            alt=""
            className="star"
            style={{
              top: "30%",
              right: "15%",
              objectFit: "contain",
            }}
          />
          <div style={{ marginTop: "0" }} className="snap-center">
            <div
              id="character"
              style={{
                backgroundColor: "transparent",
                width,
                height: 50,
                marginTop: "0%",
                position: "absolute",
                top: "-30%",
              }}
            ></div>
            <Charater character={content.find((x) => x.key === "CHARACTER")} />
          </div>
          <div style={{ marginTop: "10%" }} className="snap-center">
            <img
              src={setting.loading ? "" : setting.value.background[1]}
              alt=""
              // style={{
              //   width,
              //   height: "auto",
              //   objectFit: "contain",
              //   marginLeft: "-3%",
              // }}
              className={`w-[${width}px] h-auto object-contain`}
            />
            {/* <ArtWorkBack
              width={width}
              height={width / 2}
              artworkBack={setting.loading ? "" : setting.value.background[1]}
              allBorderRadius={true}
              sizeinher
            /> */}
          </div>
        </div>

        <div>
          <div style={{ position: "relative" }}>
            <div
              id="story"
              style={{
                backgroundColor: "transparent",
                width,
                height: 50,
                marginTop: "0%",
                position: "absolute",
                top: "-30%",
              }}
            ></div>
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                top: 0,
                width: "10%",
                height: "auto",
                left: "15%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                top: "50%",
                left: "13%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                top: "20%",
                left: "5%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                top: "10%",
                right: "20%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                top: "-10%",
                right: "30%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                top: "50%",
                right: "15%",
                objectFit: "contain",
              }}
            />
            <div style={{ marginTop: "0%" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="snap-center"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  style={{
                    fontSize: "40pt",
                    textShadow: "0px 2px 4px #d0aca2",
                  }}
                >
                  STORY
                </motion.h3>
                <div
                  style={{
                    borderStyle: "solid",
                    borderColor: "red",
                    width: 100,
                    borderBottomWidth: 0,
                  }}
                ></div>
              </div>
              <Story story={content.find((x) => x.key === "STORY")} />
            </div>
          </div>
          <div style={{ position: "relative" }} className="snap-start">
            <div id="roadmap"></div>
            <div style={{ marginTop: "0%" }}>
              <img
                src="/assets/04_roadmap-art.PNG"
                alt=""
                style={{
                  width,
                  height: "auto",
                  objectFit: "contain",
                  marginLeft: "-3%",
                }}
              />
              {/* <ArtWorkBack
              width={width}
              height={"auto"}
              artworkBack={"/assets/04_roadmap-art.PNG"}
              allBorderRadius={true}
              sizeinher
            /> */}
            </div>
            <div style={{ marginTop: "-15%" }}>
              <Roadmap />
            </div>
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-10%",
                left: "15%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-15%",
                left: "35%",
                width: "10%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-10%",
                right: "5%",
                width: "5%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-14%",
                right: "35%",
                objectFit: "contain",
              }}
            />

            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                bottom: "-15%",
                right: "15%",
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{ marginTop: "30%", position: "relative" }}
            className="snap-center"
          >
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                id="team"
                style={{
                  backgroundColor: "transparent",
                  width,
                  height: 50,
                  marginTop: "0%",
                  position: "absolute",
                  top: "-30%",
                }}
              ></div>
              <h3
                style={{
                  fontSize: "40pt",
                  textShadow: "0px 2px 4px #d0aca2",
                }}
              >
                TEAM
              </h3>
              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "red",
                  width: 100,
                  borderBottomWidth: 0,
                }}
              ></div>
            </div>
            <TeamComponent team={content.find((x) => x.key === "TEAM")} />
          </div>
          <div style={{ marginTop: "10%" }} className="snap-center">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "40pt",
                  textShadow: "0px 2px 4px #d0aca2",
                }}
              >
                FAQ
              </h3>
              <div
                style={{
                  borderStyle: "solid",
                  borderColor: "red",
                  width: 100,
                  borderBottomWidth: 0,
                }}
              ></div>
            </div>
            <FAQ />
          </div>
          <div
            style={{
              position: "relative",
              // overflow: "hidden",
            }}
          >
            <div id="enter"></div>
            <img
              src="/assets/00_star-reds.PNG"
              alt=""
              className="star"
              style={{
                top: "20%",
                left: "10%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                bottom: "10%",
                left: "20%",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-yellow.PNG"
              alt=""
              className="star"
              style={{
                top: "20%",
                right: "20%",
                width: "5%",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <img
              src="/assets/00_star-white.PNG"
              alt=""
              className="star"
              style={{
                top: "60%",
                right: "5%",
                objectFit: "contain",
              }}
            />
            <div style={{ marginTop: "0%" }}>
              <Join join={content.find((x) => x.key === "JOIN_TEAM")} />
            </div>
          </div>
          {/* <div style={{ marginTop: "10%" }}>
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
        </div> */}
        </div>
        {/* <div style={{ marginTop: "10%" }}>
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
      </div> */}
      </div>
    </Layout>
  );
}
