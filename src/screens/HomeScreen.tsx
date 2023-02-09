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
  const [value, loading, error] = useCollection(
    collection(database, "content_block"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

  useEffect(() => {
    getHomeData().then((data) => console.log(data));

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
  //     <div></div>
  //   </Layout>
  // );

  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <div
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F01_Intro%20Stars.PNG?alt=media&token=7b88ac9f-6186-40df-83bc-24c25cf4890a)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -32%)",
            height: "40%",
            width: "70%",
          }}
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
          >
            <h4
              style={{
                width: "55%",
                fontFamily: "martelsan",
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              Welcome to Terrenwat, a distant realm where our dreams converge.
              Be free to embark on and adventurius journey in the Akasha Rift.
            </h4>
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
        <div className="moon">
          <img
            // moon
            src="/assets/00-orb-white.PNG"
            style={{
              width: "150%",
              height: "150%",
              objectFit: "cover",
              position: "absolute",
              top: "-12%",
              left: "-26%",
            }}
            alt=""
          />
        </div>
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
        <img
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
        />
        <img
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
      <div style={{ padding: "0rem 3rem", marginTop: "-2%" }}>
        <div style={{ marginTop: "-10%" }}>
          <BlockContent title="">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{ fontSize: "40pt", textShadow: "0px 2px 4px #d0aca2" }}
              >
                ENTER THE PLAY
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
            <h4
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
            ></h4>
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
        <div style={{ marginTop: "0%" }}>
          <BlockContent title="">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{ fontSize: "40pt", textShadow: "0px 2px 4px #d0aca2" }}
              >
                WHO WILL YOU BE?
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
            <h4
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
              step into our world and dare be creative, artistic, and audacious
              to seek out your own tale with the same-minded community.
            </h4>
          </BlockContent>
        </div>
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
          <div style={{ marginTop: "0" }}>
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
          <div style={{ marginTop: "10%" }}>
            <img
              src={setting.loading ? "" : setting.value.background[1]}
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
              height={width / 2}
              artworkBack={setting.loading ? "" : setting.value.background[1]}
              allBorderRadius={true}
              sizeinher
            /> */}
          </div>
        </div>
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
            >
              <h3
                style={{
                  fontSize: "40pt",
                  textShadow: "0px 2px 4px #d0aca2",
                }}
              >
                STORY
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
            <Story story={content.find((x) => x.key === "STORY")} />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div id="roadmap"></div>
          <img
            src="/assets/00_star-reds.PNG"
            alt=""
            className="star"
            style={{
              top: "-5%",
              right: "25%",
              width: "10%",
              height: "auto",
            }}
          />
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

        <div style={{ marginTop: "30%", position: "relative" }}>
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
        <div style={{ marginTop: "10%" }}>
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
    </Layout>
  );
}
