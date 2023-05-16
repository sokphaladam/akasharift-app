import type { NextPage } from "next";
import Error from "next/error";
import dynamic from "next/dynamic";

const RenderHomeScreen = dynamic(
  () => import("../src/screens/RenderHomeScreen"),
  {
    ssr: false,
  }
);

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const errorCode = res.ok ? false : res.status;
  const json = await res.json();

  console.log(errorCode);

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
}

const Home: NextPage = ({ errorCode, stars }: any) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  console.log(stars);

  return <RenderHomeScreen />;
};

export default Home;
