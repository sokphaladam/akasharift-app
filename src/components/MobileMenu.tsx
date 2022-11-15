/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext, useState } from "react";
import { SettingContext } from "../context/SettingContext";
import { TiSocialTwitter, TiThMenu } from "react-icons/ti";
import { useWindowSize } from "../hook/useWindowSize";
import { mapTab } from "./DesktopMenu";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

export function MobileMenu() {
  const { setting } = useContext(SettingContext);
  const { innerWidth, innerHeight } = useWindowSize();
  const [show, setShow] = useState(true);

  if (setting.loading) return <div></div>;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "rgba(115, 115, 116, 0.5)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          padding: 0,
          height: "54px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container-fluid">
          <Link href="#">
            <a
              className="navbar-brand"
              style={{
                width: 83,
                height: 50,
                margin: 0,
                alignItems: "center",
                display: "flex",
                padding: 0,
              }}
            >
              {setting.value ? (
                <img
                  src={setting.value.logo}
                  style={{ width: 73, height: 50, objectFit: "cover" }}
                />
              ) : (
                "LOGO"
              )}
            </a>
          </Link>
          <div
            className="justify-content-end"
            id="navbarSupportedContent"
            style={{ display: "flex" }}
          >
            <ul className="navbar-nav mb-0 mb-lg-0">
              <li
                className="nav-item btn btn-sm"
                onClick={() => setShow(!show)}
              >
                <TiThMenu />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!!show && (
        <div
          style={{
            position: "fixed",
            left: 0,
            // backgroundColor: "rgba(115, 115, 116, 1)",
            width: innerWidth,
            height: innerHeight,
            top: 0,
            zIndex: 999,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0px)",
              width: "60%",
              top: "5.2rem",
              backgroundColor: "rgba(115, 115, 116, 1)",
              borderRadius: 4,
            }}
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{
                textAlign: "center",
                fontSize: 13,
                padding: "10% 15% 0% 15%",
              }}
            >
              {mapTab.map((tab, index) => {
                return (
                  <li
                    key={index}
                    className="nav-item"
                    onClick={() => setShow(false)}
                  >
                    <hr style={{ margin: "4px 0" }} />
                    <Link href={tab.link}>
                      <a className="nav-link">{tab.text}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <hr style={{ margin: "4px 0" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 15,
                marginBottom: 20,
              }}
            >
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
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <TiSocialTwitter />
                </a>
              </Link>
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
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "0 15px",
                  }}
                >
                  <FaDiscord />
                </a>
              </Link>
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
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* <img 
                    src="https://ucarecdn.com/1958a2aa-cf35-4aa3-a4b6-ed34b726c3de/-/format/webp/-/resize/1000/" 
                  /> */}
                </a>
              </Link>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -15px)",
                backgroundColor: "rgba(115, 115, 116, 1)",
                borderRadius: "50%",
                padding: "3px 7px",
                borderStyle: "solid",
                borderWidth: "0.5px",
              }}
              onClick={() => setShow(false)}
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
