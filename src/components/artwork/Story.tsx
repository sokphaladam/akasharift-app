import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hook/useWindowSize";
import { BlockContent } from "../BlockContent";
import { motion } from "framer-motion";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { database } from "../../store/firebase";

export function Story({ story }: { story: any }) {
  const { innerWidth } = useWindowSize();
  const [value, loading, error] = useDocument(
    doc(database, "custom_page", "story-layout"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <></>;

  return (
    <BlockContent title="">
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
        style={{
          width: innerWidth > 1000 ? "55%" : "100%",
          color: "#f3f3f3",
          // margin: innerWidth >= 1900 ? "auto" : "20px",
          margin: innerWidth > 1000 ? "auto" : "0px",
          marginBottom: "5rem",
          marginTop: "4.5rem",
          textAlign: "justify",
          padding: innerWidth > 1000 ? "0" : "20px 0px",
          textJustify: "inter-word",
          fontFamily: "martelsan",
          textAlignLast: "center",
        }}
        // dangerouslySetInnerHTML={{ __html: story.content + "" }}
      >
        {(value?.data() as any).description.split("\n").length > 1
          ? (value?.data() as any).description
              .split("\n")
              .map((x: any, i: number) => {
                return (
                  <p key={i} className="mb-6">
                    {x}
                  </p>
                );
              })
          : (value?.data() as any).description}
      </motion.h4>
    </BlockContent>
  );
}
