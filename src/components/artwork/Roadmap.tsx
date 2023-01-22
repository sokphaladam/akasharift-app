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
  const [items, setItems] = useState<any[]>([]);
  const [value, loading] = useCollection(collection(database, "roadmap"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (!loading && value && items.length === 0) {
      const data = value.docs.map((x) => {
        return {
          id: x.id,
          status: x.data().title,
          thumnail: x.data().thumnail,
          date: new Date(),
          description: x.data().description,
        };
      });

      setItems([...data]);
    }
  }, [value, loading, items]);

  return (
    <div ref={refDiv} className="roadmap">
      <img
        src="/assets/IMG_3461.PNG"
        style={{
          width: refDiv.current ? refDiv.current.offsetWidth : "100%",
          height: 400,
        }}
        alt=""
      />
      <div
        style={{
          width: refDiv.current ? refDiv.current.offsetWidth - 137 : "100%",
          backgroundColor: "#F6DEC2",
          padding: "1rem 3.5rem",
          margin: "auto",
        }}
      >
        {roadmaps.map((item, index) => {
          if ((index + 1) % 2 === 0) {
            return (
              <div
                key={index + 1}
                style={{ display: "flex", marginBottom: "2rem" }}
              >
                <div style={{ marginRight: "1rem" }}>
                  <h6
                    className="title"
                    style={{ color: "#000", fontSize: "20pt" }}
                  >
                    CHAPTER {index + 1}
                  </h6>
                  <h3
                    className="title"
                    style={{ color: "#D24649", fontSize: "30pt" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#000" }}>{item.description}</p>
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
                    {item.lists.map((x, i) => {
                      return (
                        <p key={i} style={{ color: "#666", marginBottom: 10 }}>
                          + {x}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <img
                  src={item.thumbnail}
                  style={{ width: 250, height: 300 }}
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
                style={{ width: 250, height: 300 }}
                alt=""
              />
              <div style={{ marginLeft: "1rem" }}>
                <h6
                  className="title"
                  style={{ color: "#000", fontSize: "20pt" }}
                >
                  CHAPTER {index + 1}
                </h6>
                <h3
                  className="title"
                  style={{ color: "#D24649", fontSize: "30pt" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#000" }}>{item.description}</p>
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
                  {item.lists.map((x, i) => {
                    return (
                      <p key={i} style={{ color: "#666", marginBottom: 10 }}>
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
          width: refDiv.current ? refDiv.current.offsetWidth - 100 : "100%",
          height: 210,
          margin: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            width: refDiv.current ? refDiv.current.offsetWidth + 100 : "100%",
            height: refDiv.current ? refDiv.current.offsetWidth / 2 : 500,
            backgroundImage: "url(/assets/04_roadmap_cloud.PNG)",
            // backgroundSize: refDiv.current ? `${refDiv.current.offsetWidth+100}px ${refDiv.current ? refDiv.current.offsetWidth/2.5 : 500}px` : '100%',
            backgroundRepeat: "no-repeat",
            objectFit: "contain",
            position: "absolute",
            left: "50%",
            top: "-20%",
            transform: "translate(-50%, -20%)",
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
