/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { SettingContext } from "../../context/SettingContext";
import { FaDiscord } from "react-icons/fa";

export function Footer() {
  const { setting } = useContext(SettingContext);
  return (
    <div className="w-screen h-2/5 flex justify-center flex-col ">
      <div
        className="w-[80%] ml-auto mr-auto"
        style={{ border: "solid 1px #c63632" }}
      />
      <div className="w-[80%] ml-auto mr-auto flex flex-row justify-center items-end">
        <div className="text-xl uppercase">
          <img
            src="/assets/6.png"
            alt=""
            className="object-cover w-40 h-20 logohover"
          />
          <div
            className="w-[40%] text-justify"
            style={{ textAlignLast: "start" }}
          >
            {`Akasha Rift is a story-driven NFTs project in which our community
            plays a significant role in sharing their adventurous tales in our
            world known as "Terrewat," alongside expressive and soulful art.`}
          </div>
          <div className="mt-12 mb-5">
            @2023 Akasha Rift, ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="uppercase">
          <div className="text-xl">info@AKASHARIFT.COM</div>
          <div className="flex flex-row justify-end mt-12 mb-5">
            <span className="btn-link">
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
                className="mr-5"
              >
                <TiSocialTwitter color="#666" />
              </Link>
            </span>
            <span className="btn-link">
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
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
