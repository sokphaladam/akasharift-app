/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { GiCartwheel } from "react-icons/gi";
import { BlockContent } from "../BlockContent";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { database } from "../../store/firebase";

const events1 = [
  {
    status: "Ordered",
    date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Processing",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Shipped",
    date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Delivered",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
  },
];

const roadmaps = [
  {
    thumbnail: "/assets/04_c1.PNG",
    title: "COMMUNITY FOR A CAUSE",
    description: `BUILDING A DEVOTED COMMUNITY FOR STORY-
    DRIVEN AND PERFORMING ARTISTS PEOPLE. LET'S
    TAKE A JOURNEY THROUGH TERREWAT TOGETHER!`,
    lists: [
      'Welcome to the "TERREWAT CHAPTER" with 3,333 characters',
      "Community wallet (3% of royalties to put into community) ✦ ✦",
      "Storyline Voting System Establishment ++",
      "Storyline Giveback ✦ ✦",
    ],
  },
  {
    thumbnail: "/assets/04_c2.PNG",
    title: "STORYUERSE",
    description: `UTILIZING STORY-DRIVING EXPERIENCE ON AN
    NFTS PROJECT. HOW DO WE APPROACH THIS?
    WE'LL HAVE TO SEE. WORD ON THE STREET
    SAID THERE WILL BE SOME HIDDEN UTILITIES.`,
    lists: [
      'Welcome to the "TERREWAT CHAPTER" with 3,333 characters + +',
      "Community wallet (3% of royalties to put into community) + +",
      "Storyline Voting System Establishment ++",
      "Storyline Giveback ✦ ✦",
    ],
  },
  {
    thumbnail: "/assets/04_c3.PNG",
    title: "THE JOURNEY CONTINUES",
    description: `WHO IS UP FOR FURTHER EXPLORATION? GET READY TO
    SEE ANOTHER SIDE OF AKASHA RIFT AS THINGS START
    TO UNFOLD.`,
    lists: [
      'Welcome to the "TERREWAT CHAPTER" with 3,333 characters',
      "Community wallet (3% of royalties to put into community) ✦ ✦",
      "Storyline Voting System Establishment ++",
      "Storyline Giveback ✦ ✦",
    ],
  },
];

const customizedMarker = (item: any) => {
  return (
    <span
      className="custom-marker shadow-1"
      style={{
        backgroundColor: item.color,
        padding: ".3rem",
        borderRadius: "50%",
        width: 35,
        height: 35,
      }}
    >
      <GiCartwheel />
    </span>
  );
};

const customizedContent: any = (item: any) => {
  return (
    <Card
      title={item.status}
      style={{
        backgroundColor: "rgba(115, 115, 116, 0.5)",
        color: "#f3f3f3",
      }}
      header={
        <img
          alt="Card"
          src={item.thumnail}
          onError={(e: any) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          style={{
            width: "100%",
            height: 150,
            objectFit: "cover",
            borderRadius: "6px",
          }}
          className="roadmap_image"
        />
      }
    >
      {/* <small style={{ fontSize: 10 }}>{item.date}</small> */}
      <div
        style={{ fontSize: 11, textAlign: "left" }}
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      {/* <a
        href="#"
        className="p-button-text p-button-sm text-primary"
        style={{ fontSize: 11 }}
      >
        Read more
      </a> */}
    </Card>
  );
};

export default function Roadmap() {
  const refDiv = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [items, setItems] = useState<any[]>([]);
  const [value, loading] = useCollection(collection(database, "roadmap"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (refDiv.current) {
      setWidth(refDiv.current.offsetWidth);
    }
  }, [refDiv]);

  useEffect(() => {
    if (!loading && value && items.length === 0) {
      const data = value.docs
        .sort((a, b) =>
          a.data().index > b.data().index
            ? 1
            : b.data().index > a.data().index
            ? -1
            : 0
        )
        .map((x) => {
          return {
            title: x.data().title,
            thumbnail: x.data().file,
            description: x.data().description,
            lists: x.data().list,
          };
        });

      setItems([...data]);
    }
  }, [value, loading, items]);

  return (
    <div ref={refDiv} className="roadmap">
      <div
        style={{
          width: width > 0 ? 1425 : "100%",
          margin: "auto",
        }}
        className="snap-center"
      >
        <img
          src="/assets/IMG_3461.PNG"
          style={{
            width: "100%",
            height: 650,
            objectFit: "contain",
          }}
          alt=""
        />
      </div>
      <div
        style={{
          width: width > 0 ? 1317 : "100%",
          backgroundColor: "#F6DEC2",
          padding: "1rem 3.5rem",
          margin: "-5% auto auto",
        }}
        className="snap-start"
      >
        {items.map((item, index) => {
          if ((index + 1) % 2 === 0) {
            return (
              <div
                key={index + 1}
                style={{ display: "flex", marginBottom: "2rem" }}
              >
                <div style={{ marginRight: "2.5rem" }}>
                  <h6
                    className="title"
                    style={{ color: "#000", fontSize: "30pt" }}
                  >
                    CHAPTER {index + 1}
                  </h6>
                  <h3
                    className="title"
                    style={{ color: "#D24649", fontSize: "60pt" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#000", fontSize: "20pt" }}>
                    {item.description}
                  </p>
                  <div
                    style={{
                      borderColor: "#D24649",
                      backgroundColor: "#D24649",
                      borderWidth: 2,
                      borderStyle: "solid",
                    }}
                  ></div>
                  <br />
                  <div>
                    {item.lists &&
                      item.lists.map((x: any, i: number) => {
                        return (
                          <p
                            key={i}
                            style={{
                              color: "#666",
                              marginBottom: 0,
                              fontSize: "16pt",
                            }}
                          >
                            + {x}
                          </p>
                        );
                      })}
                  </div>
                </div>
                <img
                  src={item.thumbnail}
                  style={{ width: 330, height: "auto", objectFit: "contain" }}
                  alt=""
                />
              </div>
            );
          }

          return (
            <div
              key={index + 1}
              style={{ display: "flex", marginBottom: "2rem" }}
            >
              <img
                src={item.thumbnail}
                style={{ width: 330, height: "auto", objectFit: "contain" }}
                alt=""
              />
              <div style={{ marginLeft: "2.5rem" }}>
                <h6
                  className="title"
                  style={{ color: "#000", fontSize: "30pt" }}
                >
                  CHAPTER {index + 1}
                </h6>
                <h3
                  className="title"
                  style={{ color: "#D24649", fontSize: "60pt" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#000", fontSize: "20pt" }}>
                  {item.description}
                </p>
                <div
                  style={{
                    borderColor: "#D24649",
                    backgroundColor: "#D24649",
                    borderWidth: 2,
                    borderStyle: "solid",
                  }}
                ></div>
                <br />
                <div>
                  {item.lists &&
                    item.lists.map((x: any, i: number) => {
                      return (
                        <p
                          key={i}
                          style={{
                            color: "#666",
                            marginBottom: 0,
                            fontSize: "16pt",
                          }}
                        >
                          + {x}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "#F6DEC2",
          width: width > 0 ? 1317 : "100%",
          height: 250,
          margin: "auto",
          position: "relative",
        }}
        className="snap-center"
      >
        <div
          style={{
            width: width > 0 ? width : "100%",
            height: width > 0 ? width / 2 : 500,
            backgroundImage: "url(/assets/IMG_3471.PNG)",
            // backgroundSize: refDiv.current ? `${refDiv.current.offsetWidth+100}px ${refDiv.current ? refDiv.current.offsetWidth/2.5 : 500}px` : '100%',
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            position: "absolute",
            left: "50%",
            top: "-9%",
            transform: "translate(-50%, -9%)",
            backgroundSize: "100%",
          }}
        ></div>
        <div
          style={{
            width: width > 0 ? width / 6 : 301,
            height: width > 0 ? width / 6 : 301,
            backgroundImage: "url(/assets/IMG_3472.PNG)",
            // backgroundSize: refDiv.current ? `${refDiv.current.offsetWidth+100}px ${refDiv.current ? refDiv.current.offsetWidth/2.5 : 500}px` : '100%',
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            position: "absolute",
            left: "50%",
            bottom: "-70%",
            transform: "translate(-50%, 70%)",
            backgroundSize: "100%",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <BlockContent title="Roadmap" id="roadmap">
      <div style={{ marginTop: "5%" }}>
        <Timeline
          value={items}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </BlockContent>
  );
}
