/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";
export function CardHover({ data }: any) {
  return (
    <div className="card__collection clear-fix">
      <div className="cards cardsthree">
        <img src={data.profile} alt="" className="img-responsive" />

        <span className="cardsthree__rect-1">
          <span className="shadow-1"></span>
          <p>{"Team Member"}</p>
        </span>
        <span className="cardsthree__rect__rect-2">
          <span className="shadow-2"></span>
        </span>
        <span className="cardsthree__circle"></span>
        <ul className="cardsthree__list">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaDiscord />
          </li>
        </ul>
      </div>
    </div>
  );
}
