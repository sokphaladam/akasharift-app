import react from "react";

export default function ButtonAninme({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a href="#" className="button2">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{title}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
  );
}
