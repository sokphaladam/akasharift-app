import type { NextPage } from "next";
import { Header } from "../src/components/beatify/Header";
import { Welcome } from "../src/components/beatify/Welcome";

const BetaHome: NextPage = () => {
  return (
    <div className="bg-[#412322] h-screen text-white snap-y snap-mandatory overflow-x-hidden overflow-scroll z-0">
      <Header />
      {/* Welcome */}
      <section className="snap-start">
        <Welcome />
      </section>
      <section className="snap-center">
        <div className="h-screen">Character</div>
      </section>
      {/* Character */}
      {/* Story */}
      {/* Roadmap */}
      {/* Team */}
      {/* Enter */}
      {/* Footer */}
    </div>
  );
};

export default BetaHome;
