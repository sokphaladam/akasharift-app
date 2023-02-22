/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

interface Props {
  show: boolean;
  onHide: () => void;
  member: any;
}

const bg = [
  "https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F01_Intro%20Stars.PNG?alt=media&token=7b88ac9f-6186-40df-83bc-24c25cf4890a",
  "https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F03_story.PNG?alt=media&token=e7722d9d-bb98-40fb-879d-4bd28eaae6bd",
];

export function ModalTeam({ show, onHide, member }: Props) {
  return (
    <Modal animation={true} show={show} onHide={onHide} size="lg" centered>
      <style>
        {`
          .modal-content {
            background-color: '#412322 !important'
          }
        `}
      </style>
      {member && (
        <div
          className="flex flex-row justify-between"
          style={{ fontFamily: "asul" }}
        >
          <div className="w-[35%] h-[30rem] relative">
            <img
              src={member.profile}
              alt=""
              className="w-[100%] h-[30rem] object-cover blur-sm"
            />
          </div>
          <div
            className="rounded-full w-[90px] h-[90px] absolute top-[10%] left-1/3 -translate-x-1/3"
            style={{
              backgroundImage: `url(${member.profile})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              border: "6px solid white",
            }}
          ></div>
          <div className="text-justify p-7 w-[60%]">
            <div
              className="text-[#412322] font-bold text-base pb-5"
              style={{ textAlignLast: "end" }}
            >
              Team Member
            </div>
            <h2 className="text-[#412322]" style={{ textAlignLast: "end" }}>
              {member.name}
            </h2>
            <div className="text-[#4e2e2d]" style={{ textAlignLast: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              placeat laborum, vel voluptas accusantium culpa blanditiis, vero
              reiciendis, fuga obcaecati quisquam dignissimos iusto. Modi
              impedit, temporibus labore aspernatur perferendis tenetur.
            </div>
            <div className="w-[100%] flex flex-col justify-center items-end pt-5 text-sm">
              <a
                href="https://twitter.com/AkashaRiftNFTs"
                rel="noopener"
                target="_blank"
                className="py-1 text-[#4e2e2d] flex flex-row items-center"
              >
                <span className="text-[#4e2e2d] pr-1">@AkashaRiftNFTs</span>
                <FaTwitter color="#4e2e2d" />
              </a>
              <a
                href="https://t.co/Da8o3ayybC"
                rel="noopener"
                target="_blank"
                className="py-1 text-[#4e2e2d]  flex flex-row items-center"
              >
                <span className="text-[#4e2e2d] pr-1">Akasha Rift</span>
                <FaDiscord color="#4e2e2d" />
              </a>
              <a
                href="#"
                className="py-1 text-[#4e2e2d]  flex flex-row items-center"
              >
                <span className="text-[#4e2e2d] pr-1">+885 28 918 293</span>
                <GiRotaryPhone color="#4e2e2d" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
