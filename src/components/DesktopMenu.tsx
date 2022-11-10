/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { SettingContext } from "../context/SettingContext";

const mapTab = [
  {
    text: "Story",
    link: "#story",
    type: "tab",
  },
  {
    text: "Character",
    link: "#character",
    type: "tab",
  },
  {
    text: "Roadmap",
    link: "#roadmap",
    type: "tab",
  },
  {
    text: "Team",
    link: "#team",
    type: "tab",
  },
  {
    text: "FAQ",
    link: "#faq",
    type: "tab",
  },
  {
    text: "Enter",
    link: "#enter",
    type: "tab",
  },
];

export default function DesktopMenu() {
  const { setting } = useContext(SettingContext);

  if (setting.loading) return <div></div>;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "rgba(115, 115, 116, 0.5)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="container-fluid">
        <Link href="#">
          <a className="navbar-brand">
            {setting.value ? (
              <img src={setting.value.logo} style={{ width: 50, height: 50 }} />
            ) : (
              "LOGO"
            )}
          </a>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {mapTab.map((tab, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link href={tab.link}>
                    <a className="nav-link">{tab.text}</a>
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link href={setting.value.link.twitter} target="_blank">
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <TiSocialTwitter />
                </a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginInline: 7 }}>
              <Link href={setting.value.link.discord} target="_blank">
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <FaDiscord />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={setting.value.link.cardano} target="_blank">
                <a
                  className="nav-link"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {/* <img 
                    src="https://ucarecdn.com/1958a2aa-cf35-4aa3-a4b6-ed34b726c3de/-/format/webp/-/resize/1000/" 
                  /> */}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export const DesktopMenuComponent = DesktopMenu;
