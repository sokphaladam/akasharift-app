import React, { useEffect, useState } from "react";
import { BlockContent } from "../BlockContent";
import { Accordion } from "react-bootstrap";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../../store/firebase";

export default function FAQ() {
  const [items, setItems] = useState<any[]>([]);
  const [value, loading] = useCollection(collection(database, "faq"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (!loading && value && items.length === 0) {
      const data = value.docs.map((x) => {
        return {
          ...x.data(),
          id: x.id,
        };
      });

      setItems([...data]);
    }
  }, [value, loading, items]);

  return (
    <div
      style={{
        marginTop: 25,
        padding: innerWidth < 1500 ? "0rem 5%" : "0rem 10%",
      }}
    >
      <Accordion
        defaultActiveKey="-1"
        style={{ backgroundColor: "transparent" }}
      >
        {items.map((x, i) => {
          return (
            <Accordion.Item
              eventKey={i + ""}
              key={i}
              style={{ backgroundColor: "transparent" }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "martelsan",
                }}
              >
                <span style={{ fontSize: "18pt" }}>{x.question}</span>
              </Accordion.Header>
              <Accordion.Body>
                <div
                  dangerouslySetInnerHTML={{ __html: x.answer }}
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    fontFamily: "martelsan",
                    paddingLeft: "1.5rem",
                    fontSize: "14pt",
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
