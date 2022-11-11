import React, { useEffect, useState } from "react";
import { BlockContent } from "../BlockContent";
import { Accordion } from "react-bootstrap";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { database } from "../../store/firebase";

export function FAQ() {
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
    <BlockContent title="FAQ" id="faq">
      <div style={{ marginTop: 25 }}>
        <Accordion defaultActiveKey="0" style={{ backgroundColor: "#7d2e2e" }}>
          {items.map((x, i) => {
            return (
              <Accordion.Item
                eventKey={i + ""}
                key={i}
                style={{ backgroundColor: "#7d2e2e" }}
              >
                <Accordion.Header style={{ backgroundColor: "#7d2e2e" }}>
                  {x.question}
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    dangerouslySetInnerHTML={{ __html: x.answer }}
                    style={{ color: "#fff", textAlign: "left" }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </BlockContent>
  );
}
