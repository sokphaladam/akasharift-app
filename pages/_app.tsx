/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
// import "../styles/master.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { SettingContext } from "../src/context/SettingContext";
import { useSetting } from "../src/hook/useSetting";

function MyApp({ Component, pageProps }: AppProps) {
  const setting = useSetting();

  if (setting.loading) return <div></div>;

  if (setting.error) return <div></div>;

  return (
    <SettingContext.Provider value={{ setting }}>
      <Head>
        <title>Akasha Rift</title>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta> */}
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/primeicons/primeicons.css"
          crossOrigin="*"
        />
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/primereact/resources/primereact.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css"
        />
      */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          crossOrigin="*"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          crossOrigin="*"
        />

        {/* <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/slider/slider.min.js"></script> */}
        {/* <script
          disable-devtool-auto
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
        ></script> */}
      </Head>
      <Component {...pageProps} />
    </SettingContext.Provider>
  );
}

export default MyApp;
