import react from "react";
import { useWindowSize } from "../hook/useWindowSize";

export default function ButtonAninme({ title }: { title: string }) {
  const { innerWidth } = useWindowSize();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a
        href="#"
        className="button2"
        style={{
          width: innerWidth < 1000 ? 150 : 240,
          height: innerWidth < 1000 ? 46 : 56,
        }}
      >
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{title}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
  );
}
