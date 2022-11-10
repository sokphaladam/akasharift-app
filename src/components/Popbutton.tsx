import React from "react";
import { GiArrowCluster } from "react-icons/gi";

export function Popbutton() {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("main")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      style={{ position: "fixed", bottom: 10, right: 25, zIndex: 999 }}
      className="btn btn-light"
      onClick={onClick}
    >
      <GiArrowCluster />
    </button>
  );
}
