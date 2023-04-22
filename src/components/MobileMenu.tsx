/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext, useState } from "react";
import { SettingContext } from "../context/SettingContext";
import { TiSocialTwitter, TiThMenu } from "react-icons/ti";
import { useWindowSize } from "../hook/useWindowSize";
import { mapTab } from "./DesktopMenu";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

export function MobileMenu() {
  const { setting } = useContext(SettingContext);
  const { innerWidth, innerHeight } = useWindowSize();
  const [show, setShow] = useState(false);

  if (setting.loading) return <div></div>;

  return (
    <div className="mobile_menu w-screen h-auto relative">
      <img
        alt=""
        src={
          "https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Navigator.png?alt=media&token=71c8c0b3-a5e7-40c8-8c19-a512af6dfccc"
        }
        className="w-screen h-24 object-cover absolute z-0"
      />
      <nav className="w-screen h-24 z-10">
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
      </nav>
    </div>
  );
}
