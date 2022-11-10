import dynamic from "next/dynamic";
import React from "react";
import styles from "../../styles/Home.module.scss";
import { BlockContent } from "../components/BlockContent";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

const Fileupload = dynamic(() => import("../components/Fileupload"), {
  ssr: true,
});

export function PlaygroundScreen() {
  return (
    <Layout>
      <Fileupload />
    </Layout>
  );
}
