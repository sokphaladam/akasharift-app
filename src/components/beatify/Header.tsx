/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const leftMenu = [
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
];

const rightMenu = [
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

export function Header() {
  return (
    <motion.div
      initial={{
        y: -100,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="w-screen sticky z-50 top-0 left-0 items-center justify-center"
    >
      <img
        src="/assets/bg/01_navigation.png"
        alt=""
        className="absolute -top-5 -left-1 object-cover w-screen h-[12rem]"
      />
      <ul className="relative z-1 flex flex-row justify-center items-center uppercase text-asul md:text-sm lg:-ml-36 lg:text-lg p-0">
        {leftMenu.map((menu) => {
          return (
            <li key={menu.link} className="menuitem p-4 hidden md:inline-flex">
              <Link href={menu.link} className="">
                {menu.text}
              </Link>
            </li>
          );
        })}
        <li className="menuitem pl-4 pr-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FLogo_Akasha-Rift_A-Black-removebg-preview.png?alt=media&token=94029238-260a-4551-a6e4-7fd05d8cd78f"
            alt=""
            className="object-contain w-20 h-20"
          />
        </li>
        {rightMenu.map((menu) => {
          return (
            <li key={menu.link} className="menuitem p-4 hidden md:inline-flex">
              <Link href={menu.link}>{menu.text}</Link>
            </li>
          );
        })}
        <li className="menuitemp-3 hidden md:inline-flex">
          <div className="menuitemicon">
            <TiSocialTwitter fontSize={25} />
          </div>
        </li>
        <li className="menuitem p-3 hidden md:inline-flex">
          <div className="menuitemicon">
            <FaDiscord fontSize={25} />
          </div>
        </li>
      </ul>
    </motion.div>
  );
}
