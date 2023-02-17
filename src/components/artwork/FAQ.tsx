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

  // return (
  //   <div className="h-screen w-screen items-center flex flex-col justify-center">
  //     <div
  //       style={{
  //         textAlign: "center",
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //       }}
  //     >
  //       <h3
  //         style={{
  //           fontSize: "40pt",
  //           textShadow: "0px 2px 4px #d0aca2",
  //         }}
  //       >
  //         FAQ
  //       </h3>
  //       <div
  //         style={{
  //           borderStyle: "solid",
  //           borderColor: "#6c1111",
  //           width: 100,
  //           borderBottomWidth: 3,
  //         }}
  //       ></div>
  //     </div>
  //     <div className="max-w-[70%]" style={{ fontFamily: "asul" }}>
  //       {items.map((x, i) => {
  //         return (
  //           <details className="p-4 rounded-lg" key={i}>
  //             <summary className="font-semibold text-2xl">{x.question}</summary>
  //             <div
  //               className=""
  //               dangerouslySetInnerHTML={{ __html: x.answer }}
  //             ></div>
  //           </details>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

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
                <span
                  style={{
                    fontSize: "18pt",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "asul",
                  }}
                  className="logohover"
                >
                  {x.question}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <span
                  style={{
                    textAlign: "left",
                    fontFamily: "asul",
                    paddingLeft: "1.5rem",
                    fontSize: "14pt",
                  }}
                  className="text-slate-50 flex flex-col items-start justify-start"
                >
                  <div
                    style={{ textAlignLast: "left" }}
                    className="text-slate-50 text-justify"
                    dangerouslySetInnerHTML={{ __html: x.answer }}
                  />
                </span>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
