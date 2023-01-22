/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from "react";
import { BlockContent } from "../BlockContent";

export function Join({ join }: { join: any }) {
  const ref = useRef<HTMLDivElement | any>(null);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: ref.current ? ref.current.offsetWidth : '100%',
          height: ref.current ? ref.current.offsetWidth-200 : 1140,
          backgroundImage: `url(/assets/07-join.PNG)`,
          backgroundRepeat: "no-repeat",
          objectFit: 'contain',
          position: 'relative',
          backgroundSize: ref.current ? `${ref.current.offsetWidth}px ${ref.current ? ref.current.offsetWidth-200 : 1140}px` : '100%',
        }}
        className="roadmap"
        >
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -60%)',
            textAlign: 'center',
            margin: 'auto'
          }}>
            <p style={{ color: '#000', fontWeight: 'bold' }}>The show is about to start. <br /> And you are about to be rifted to</p>
            <h2 className="title" style={{ color: '#000', fontSize: '45pt' }}>TERREWAT</h2>
            <div
                  style={{
                    borderStyle: "solid",
                    borderColor: "red",
                    width: 100,
                    borderBottomWidth: 0,
                    margin: 'auto'
                  }}
                ></div>
                <br />
            <h6 style={{ fontSize: '25pt', fontWeight: 'bolder', textShadow: "0px 2px 4px #d0aca2", }}>Enter the rift</h6>
          </div>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam officiis aliquid ex necessitatibus temporibus in magni error molestiae illum vitae enim, perspiciatis suscipit deleniti aliquam architecto dolores ducimus? Consequatur? */}
        </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ width: 150, height:100, marginRight: '5rem' }} src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FLogo_Akasha-Rift_A-Black-removebg-preview.png?alt=media&token=94029238-260a-4551-a6e4-7fd05d8cd78f" alt="" />
        <img style={{ width: 150, height:100 }} src="https://firebasestorage.googleapis.com/v0/b/akasharift-860aa.appspot.com/o/akasha_rift%2FAR_0_AR.png?alt=media&token=b831f909-0098-4906-af44-0e44ca9ed6f7" alt="" />
      </div>
    </div>
  )
  return (
    <BlockContent title="Join the play">
      <p
        style={{
          width: "55%",
          color: "#f3f3f3",
          margin: "auto",
          marginBottom: "5rem",
          marginTop: "4.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: join.content }}
      ></p>
      <a
        className="btn btn-light"
        target={"_blank"}
        href={join.btn.link ? join.btn.link : "#"}
      >
        {join.btn.label}
      </a>
    </BlockContent>
  );
}
