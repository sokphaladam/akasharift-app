/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
        />
      }
    >
      {/* <small style={{ fontSize: 10 }}>{item.date}</small> */}
      <div
        style={{ fontSize: 11 }}
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
