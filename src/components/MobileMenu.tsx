/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useContext, useState } from "react";
import { SettingContext, TriggerClick } from "../context/SettingContext";
import { TiSocialTwitter, TiThMenu } from "react-icons/ti";
import { useWindowSize } from "../hook/useWindowSize";
import { mapTab } from "./DesktopMenu";
import { FaDiscord, FaBars, FaTimes, FaInstagram } from "react-icons/fa";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { database } from "../store/firebase";

function DrawNavigation() {
  const [open, setOpen] = useState(false);
  const { setClick } = useContext(TriggerClick);

  const [value, loading, error] = useDocument(
    doc(database, "custom_page", "footer-layout"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const onClose = () => {
    setOpen(false);
    setClick(false);
  };

  return (
    <div>
      <FaBars
        onClick={() => {
          setOpen(true);
          setClick(true);
        }}
      />
      {!!open && (
        <div
          className="fixed top-0 right-0 w-[78%] h-full bg-[#412322] p-[1.2rem]"
          style={{ zIndex: 999 }}
        >
          <div className="flex justify-between items-center">
            <h4 className="m-0" style={{ fontFamily: "asul !important" }}>
              AKASHARIFT
            </h4>
            <FaTimes onClick={onClose} />
          </div>
          <ul className="p-0 mt-3">
            {mapTab.map((x) => {
              return (
                <li key={x.link} className="pt-2 pb-2">
                  <Link href={x.link} onClick={onClose}>
                    {x.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr className="bg-[#B93A36] border-[#B93A36] border-2" />
          <div className="flex text-center justify-start items-center mt-3">
            <div className="btn-link mr-5">
              <Link
                href={loading ? "#" : (value?.data() as any).twitter.url + ""}
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
                onClick={onClose}
              >
                <TiSocialTwitter color="#666" />
              </Link>
            </div>
            <div className="btn-link mr-5">
              <Link
                href={loading ? "#" : (value?.data() as any).discord.url + ""}
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
                onClick={onClose}
              >
                <FaDiscord color="#666" />
              </Link>
            </div>
            <div className="btn-link">
              <Link
                href={loading ? "#" : (value?.data() as any).telegram.url + ""}
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
                onClick={onClose}
              >
                <FaInstagram color="#666" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function MobileMenu() {
  const { setting } = useContext(SettingContext);
  const { innerWidth, innerHeight } = useWindowSize();
  const [show, setShow] = useState(false);

  if (setting.loading) return <div></div>;

  return (
    <div className="sticky top-0 w-screen h-auto z-20">
      <div className="mobile_menu w-screen h-auto relative">
        <img
          alt=""
          src={
            "https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Navigator.png?alt=media&token=71c8c0b3-a5e7-40c8-8c19-a512af6dfccc"
          }
          className="w-full h-[138px] object-cover absolute left-0 top-0 z-0"
        />
        <div className="w-full h-[70px] justify-between flex items-center relative pl-2 pr-4">
          {setting.value ? (
            <img
              src={setting.value.logo}
              className="logohover w-[90px] h-[70px] object-contain"
            />
          ) : (
            "LOGO"
          )}
          <DrawNavigation />
        </div>
      </div>
    </div>
  );
}
