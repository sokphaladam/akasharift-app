/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { SettingContext } from "../../context/SettingContext";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { database } from "../../store/firebase";
import { useWindowSize } from "../../hook/useWindowSize";

export function Footer() {
  const { innerWidth, innerHeight } = useWindowSize();
  const [value, loading, error] = useDocument(
    doc(database, "custom_page", "footer-layout"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <></>;

  if (innerWidth < 500) {
    return (
      <div className="w-screen h-2/4 flex justify-center flex-col">
        <div
          className="w-[90%] ml-auto mr-auto"
          style={{ border: "solid 1px #c63632" }}
        />
        <div className="w-[90%] ml-auto mr-auto flex flex-row justify-between items-end">
          <div className="uppercase" style={{ width: innerWidth - 191 }}>
            <img
              src={loading ? "" : (value?.data() as any).file}
              alt=""
              className="object-contain w-[90px] h-[70px] logohover -ml-2"
            />
            <div
              className="text-justify"
              style={{
                textAlignLast: "start",
                fontSize: "12px",
                width: innerWidth - 191,
                lineHeight: "15px",
              }}
            >
              {loading ? "" : (value?.data() as any).description}
            </div>
            <div
              className="mt-5 mb-5"
              style={{
                fontSize: "12px",
                width: innerWidth - 191,
                lineHeight: "15px",
              }}
            >{`"Collab CodeHub"`}</div>
            <div
              className="mt-5 mb-5"
              style={{
                fontSize: "12px",
                width: innerWidth - 191,
                lineHeight: "15px",
              }}
            >
              {loading ? "" : (value?.data() as any).copyright}
            </div>
          </div>
          <div className="uppercase">
            <div
              style={{
                fontSize: "12px",
                lineHeight: "15px",
              }}
            >
              {loading ? "" : (value?.data() as any).title}
            </div>
            <div className="flex flex-row justify-end mt-5 mb-5">
              <span className="btn-link">
                <Link
                  href={loading ? "#" : (value?.data() as any).twitter.url + ""}
                  target="_blank"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 4,
                    height: 25,
                    width: 25,
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                  className="mr-3"
                >
                  <TiSocialTwitter color="#666" />
                </Link>
              </span>
              <span className="btn-link">
                <Link
                  href={loading ? "#" : (value?.data() as any).discord.url + ""}
                  target="_blank"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 4,
                    height: 25,
                    width: 25,
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                  className="mr-3"
                >
                  <FaDiscord color="#666" />
                </Link>
              </span>
              <span className="btn-link">
                <Link
                  href={
                    loading ? "#" : (value?.data() as any).telegram.url + ""
                  }
                  target="_blank"
                  style={{
                    borderStyle: "solid",
                    borderWidth: 0.5,
                    borderRadius: 4,
                    height: 25,
                    width: 25,
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <FaInstagram color="#666" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-2/5 flex justify-center flex-col">
      <div
        className="w-[80%] ml-auto mr-auto"
        style={{ border: "solid 1px #c63632" }}
      />
      <div className="w-[80%] ml-auto mr-auto flex flex-row justify-center items-end">
        <div className="text-xl uppercase">
          <img
            src={loading ? "" : (value?.data() as any).file}
            alt=""
            className="object-cover w-40 h-20 logohover"
          />
          <div
            className="w-[40%] text-justify"
            style={{ textAlignLast: "start" }}
          >
            {loading ? "" : (value?.data() as any).description}
          </div>
          <div className="mt-5 mb-5">{`"Collab CodeHub"`}</div>
          <div className="mt-12 mb-5">
            {loading ? "" : (value?.data() as any).copyright}
          </div>
        </div>
        <div className="uppercase">
          <div className="text-xl">
            {loading ? "" : (value?.data() as any).title}
          </div>
          <div className="flex flex-row justify-end mt-12 mb-5">
            <span className="btn-link">
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
                className="mr-5"
              >
                <TiSocialTwitter color="#666" />
              </Link>
            </span>
            <span className="btn-link">
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
                className="mr-5"
              >
                <FaDiscord color="#666" />
              </Link>
            </span>
            <span className="btn-link">
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
              >
                <FaInstagram color="#666" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
