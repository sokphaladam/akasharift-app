/* eslint-disable @next/next/no-img-element */
import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../store/firebase";
import { BlockContent } from "./BlockContent";

const data = [
  {
    profile: "/assets/team/1.jpg",
    name: "Morris",
    age: "27",
    hobby: "Writer",
  },
  {
    profile: "/assets/team/2.jpg",
    name: "Lessor",
    age: "24",
    hobby: "Singing",
  },
  {
    profile: "/assets/team/3.jpg",
    name: "Mottoes lessor",
    age: "18",
    hobby: "Trouble maker",
  },
  {
    profile: "/assets/team/4.jpg",
    name: "Morris",
    age: "27",
    hobby: "Writer",
  },
  {
    profile: "/assets/team/5.jpg",
    name: "Lessor",
    age: "24",
    hobby: "Singing",
  },
  {
    profile: "/assets/team/6.jpg",
    name: "Mottoes lessor",
    age: "18",
    hobby: "Trouble maker",
  },
  {
    profile: "/assets/team/1.jpg",
    name: "Morris",
    age: "27",
    hobby: "Writer",
  },
];

function AvatarUser({ data }: { data: any }) {
  return (
    <div style={{ margin: "1rem", width: 250 }}>
      <div style={{ position: "relative", height: 280 }}>
        <div className="team">
          <div className="content">
            <img
              src={data.profile}
              alt=""
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 6,
              }}
              className="front"
            />
            <img
              src={data.profile}
              alt=""
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 6,
              }}
              className="back"
            />
          </div>
        </div>
        <a
          href={data.link ? data.link : "#"}
          style={{
            borderRadius: 4,
            backgroundColor: "#37404c",
            padding: "0.6rem 1.5rem",
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            left: -15,
          }}
        >
          Link
        </a>
      </div>
      <div style={{ textAlign: "left" }}>
        <b>
          <small>Name {data.name}</small>
        </b>
        <br />
        <small dangerouslySetInnerHTML={{ __html: data.info }}></small>
      </div>
    </div>
  );
}

export default function TeamComponent() {
  const [items, setItems] = useState<any[]>([]);
  const [value, loading] = useCollection(collection(database, "team"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (!loading && value && items.length === 0) {
      const data = value.docs.map((x) => {
        return {
          profile: x.data().profile,
          name: x.data().name,
          id: x.id,
          info: x.data().info,
          link: x.data().link,
        };
      });

      setItems(data);
    }
  }, [value, loading, items]);

  return (
    <BlockContent title="Team" id="team">
      <div
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          alignItems: "center",
          marginInline: "auto",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items.map((x, i) => {
            return <AvatarUser key={i} data={x} />;
          })}
        </div>
      </div>
    </BlockContent>
  );
}
