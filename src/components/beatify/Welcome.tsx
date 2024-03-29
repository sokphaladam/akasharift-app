/* eslint-disable @next/next/no-img-element */
import React from "react";

// w-1/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

export function Welcome() {
  const lg =
    "lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] lg:-translate-y-[50%]";
  const md = "md:top-1/4 -mt-1";

  return (
    <div className="relative h-screen w-screen items-center justify-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_Curtain.png?alt=media&token=b3a36bfc-9671-4feb-af81-8d2f89b866b1"
        alt=""
        className="z-1 object-cover w-full h-max absolute top-16 left-0 scale-100"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_AR.png?alt=media&token=b831f909-0098-4906-af44-0e44ca9ed6f7"
        alt=""
        className={`h-auto object-contain z-2 w-1/5 absolute right-auto bottom-auto md:top-[25%] md:left-[40%] lg:top-[40%] lg:left-[40%]`}
      />
      <div className="w-[60%] z-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2F01_Intro%20Stars.PNG?alt=media&token=7b88ac9f-6186-40df-83bc-24c25cf4890a"
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}
