/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { SettingContext } from "../context/SettingContext";

export const mapTab = [
  {
    text: "Characters",
    link: "#character",
    type: "tab",
  },
  {
    text: "Story",
    link: "#story",
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
    text: "Join",
    link: "#enter",
    type: "tab",
  },
];

export default function DesktopMenu() {
  const { setting } = useContext(SettingContext);
  const leftTab = mapTab.filter((_, i) => i < 3);
  const rightTab = mapTab.filter((_, i) => i >= 3);

  return (
    <div
      className="desktop_menu"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Navigator.png?alt=media&token=71c8c0b3-a5e7-40c8-8c19-a512af6dfccc)",
      }}
    >
      <div className="menu">
        <ul>
          {leftTab.map((x) => {
            return (
              <li key={x.link}>
                <Link href={x.link}>{x.text}</Link>
              </li>
            );
          })}
          <li>
            <div style={{ marginTop: "0%" }}>
              <Link
                href="#home"
                // onClick={() => {
                //   window.scrollTo({ top: 0, behavior: "smooth" });
                //   document
                //     .getElementById("main")
                //     ?.scrollTo({ top: 0, behavior: "smooth" });
                // }}
              >
                {setting.value ? (
                  <img
                    src={setting.value.logo}
                    style={{
                      width: 70,
                      height: "auto",
                      objectFit: "contain",
                    }}
                    className="logohover"
                  />
                ) : (
                  "LOGO"
                )}

                {/* <a
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    document
                      .getElementById("main")
                      ?.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  
                </a> */}
              </Link>
            </div>
          </li>
          {rightTab.map((x) => {
            return (
              <li key={x.link}>
                <Link href={x.link}>{x.text}</Link>
              </li>
            );
          })}
          <li className="btn-link">
            <Link
              href={setting.value.link.twitter}
              target="_blank"
              style={{
                borderStyle: "solid",
                borderWidth: 0.5,
                borderRadius: 4,
                height: 35,
                width: 35,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <TiSocialTwitter color="#666" />
            </Link>
          </li>
          <li className="btn-link">
            <Link
              href={setting.value.link.discord}
              target="_blank"
              style={{
                borderStyle: "solid",
                borderWidth: 0.5,
                borderRadius: 4,
                height: 35,
                width: 35,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <FaDiscord color="#666" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*
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
        padding: 0,
      }}
    >
      <div className="container-fluid">
        <Link href="#">
          <a className="navbar-brand">
            {setting.value ? (
              <img src={setting.value.logo} style={{ width: 75, height: 75 }} />
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
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
*/

export const DesktopMenuComponent = DesktopMenu;
