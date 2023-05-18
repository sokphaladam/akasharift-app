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

const img =
  "https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F6.webp?alt=media&token=a641d13c-06e9-49dc-87df-e9300247429f";

function MyApp({ Component, pageProps }: AppProps) {
  const setting = useSetting();

  if (setting.loading) return <div></div>;

  if (setting.error) return <div></div>;

  return (
    <SettingContext.Provider value={{ setting }}>
      <Head>
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

        {/* <!-- Primary Meta Tags --> */}
        <title>Akasha Rift</title>
        <meta name="title" content="Akasha Rift" />
        <meta
          name="description"
          content="Welcome to Terrewat! A distant realm where our dreams converge."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akasharift.com/" />
        <meta property="og:title" content="Akasha Rift" />
        <meta
          property="og:description"
          content="Welcome to Terrewat! A distant realm where our dreams converge."
        />
        <meta property="og:image" content={img} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://akasharift.com/" />
        <meta property="twitter:title" content="Akasha Rift" />
        <meta
          property="twitter:description"
          content="Welcome to Terrewat! A distant realm where our dreams converge."
        />
        <meta property="twitter:image" content={img} />

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
