/* eslint-disable @next/next/no-img-element */
import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useWindowSize } from "../hook/useWindowSize";
import { database } from "../store/firebase";
import { BlockContent } from "./BlockContent";
import { CardHover } from "./CardHover";
import { ModalTeam } from "./ModalTeam";

function AvatarUser({ data }: { data: any }) {
  console.log(data);
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
                borderRadius: 0,
              }}
              className="front"
            />
            {/* <img
              src={data.profile}
              alt=""
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: 0,
              }}
              className="back"
            /> */}
          </div>
        </div>
        {data.name && (
          <h6 style={{ textAlign: "left", marginTop: 5 }}>{data.name}</h6>
        )}
        {data.link && (
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
        )}
      </div>
      {/* <div style={{ textAlign: "left" }}>
        <b>
          <small>Name {data.name}</small>
        </b>
        <br />
        <small dangerouslySetInnerHTML={{ __html: data.info }}></small>
      </div> */}
    </div>
  );
}

export default function TeamComponent({ team }: { team: any }) {
  const [items, setItems] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const { innerWidth } = useWindowSize();
  const [value, loading] = useCollection(collection(database, "team"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const [member, setMember] = useState(null);

  useEffect(() => {
    if (!loading && value && items.length === 0) {
      const data = value.docs.map((x) => {
        return {
          profile: x.data().file,
          profile_back: x.data().file,
          name: x.data().name,
          id: x.id,
          info: x.data().description,
          position: x.data().position,
          link: {
            twitter: {
              name: x.data().twittername.trim(),
              link: x.data().twitterlink.trim(),
            },
            discord: {
              name: x.data().discordname.trim(),
              link: x.data().discordlink.trim(),
            },
          },
        };
      });

      setItems(data);
    }
  }, [value, loading, items]);

  return (
    <BlockContent title="">
      <ModalTeam show={show} onHide={() => setShow(false)} member={member} />
      <div
        style={{
          marginTop: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: innerWidth > 1000 ? "90%" : "100%",
          alignItems: "center",
          marginInline: "auto",
        }}
      >
        {/* <p dangerouslySetInnerHTML={{ __html: team.content }}></p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items.map((x, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setMember(x);
                  setShow(true);
                }}
              >
                <CardHover data={x} />
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: 10,
                    marginBottom: 0,
                    fontFamily: "asul",
                  }}
                >
                  <b>{x.name}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: 10,
                    fontFamily: "martelsan",
                  }}
                >
                  {x.position}
                </p>
              </div>
            );
            return <AvatarUser key={i} data={x} />;
          })}
        </div>
      </div>
    </BlockContent>
  );
}
