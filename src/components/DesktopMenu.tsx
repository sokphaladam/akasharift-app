/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { SettingContext } from "../context/SettingContext";

export const mapTab = [
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
    <div className="desktop_menu">
      <ul>
        {leftTab.map((x) => {
          return (
            <li key={x.link}>
              <Link href={x.link}>
                <a>{x.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Link href="#">
          <a>
            {setting.value ? (
              <img src={setting.value.logo} style={{ width: 75, height: 75 }} />
            ) : (
              "LOGO"
            )}
          </a>
        </Link>
      </div>
      <ul>
        {rightTab.map((x) => {
          return (
            <li key={x.link}>
              <Link href={x.link}>
                <a>{x.text}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href={setting.value.link.twitter} target="_blank">
            <a
              style={{
                borderStyle: "solid",
                borderWidth: 0.5,
                borderRadius: 0,
                height: 35,
                width: 35,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TiSocialTwitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href={setting.value.link.discord} target="_blank">
            <a
              style={{
                borderStyle: "solid",
                borderWidth: 0.5,
                borderRadius: 0,
                height: 35,
                width: 35,
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FaDiscord />
            </a>
          </Link>
        </li>
        <li>
          <Link href={setting.value.link.cardano} target="_blank">
            <a
              style={{
                borderStyle: "solid",
                borderWidth: 0.5,
                borderRadius: 0,
                height: 35,
                width: 35,
                alignItems: "center",
                display: "flex",
              }}
            ></a>
          </Link>
        </li>
      </ul>
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
