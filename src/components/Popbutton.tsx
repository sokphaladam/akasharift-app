import Link from "next/link";
import React from "react";
import { GiArrowCluster } from "react-icons/gi";

export function Popbutton() {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("home")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      style={{
        position: "fixed",
        bottom: 10,
        right: 25,
        zIndex: 999,
        cursor: `url('/assets/cursor/3.png'), auto !important`,
      }}
      className="btn btn-light text-muted"
      onClick={onClick}
      href="#home"
    >
      <GiArrowCluster />
    </Link>
  );
}
