import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BlockContent } from "../BlockContent";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import autoAnimate from "@formkit/auto-animate";
import { useCharacter } from "../../hook/useCharacter";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { database } from "../../store/firebase";
import Slider from "react-slick";

const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Container = styled(animated.div)`
  background-color: #345b4b;
  border-radius: 5;
  background-size: cover;
  background-position: bottom;
`;

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 5000,
  autoplay: true,
  slidesToScroll: 1,
  nextArrow: <></>,
  prevArrow: <></>,
  appendDots: (dots: any) => (
    <div
      style={{
        backgroundColor: "#ddd",
        borderRadius: "10px",
        padding: "10px",
        display: "none",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i: any) => (
    <div
      style={{
        width: "30px",
        color: "blue",
        border: "1px blue solid",
        display: "none",
      }}
    >
      {i + 1}
    </div>
  ),
};

function CharacterImage({
  width,
  height,
  image,
  margin,
}: {
  width: number;
  height: number;
  image: string;
  margin?: string | number;
}) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <Container
      style={{
        width,
        height,
        backgroundImage: `url(${image})`,
        transform: props.xys.interpolate(trans),
        margin,
      }}
      id="char"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    ></Container>
  );
}

export default function Charater({ character }: { character: any }) {
  const leftList = useRef(null);
  const rightList = useRef(null);
  const [indexl, setIndexL] = useState<number>(0);
  const [indexr, setIndexR] = useState<number>(0);

  const [value, loading] = useCollection(collection(database, "character"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const [leftCharacter, setLeftCharacter] = useState<any[]>([]);
  const [rightCharacter, setRightCharacter] = useState<any[]>([]);

  useEffect(() => {
    if (
      !loading &&
      value &&
      leftCharacter.length === 0 &&
      rightCharacter.length === 0
    ) {
      const data = value.docs.map((x) => {
        return {
          id: x.id,
          name: x.data().name,
          image: x.data().profile,
          bgImage: x.data().bg_profile,
        };
      });

      setLeftCharacter([...data]);
      setRightCharacter([...data.reverse()]);
    }
  }, [value, loading, leftCharacter, rightCharacter]);

  return (
    <BlockContent title="Character" id="character">
      <p
        style={{
          width: "55%",
          color: "#f3f3f3",
          margin: "auto",
          marginBottom: "5rem",
          marginTop: "4.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: character.content_one }}
      ></p>
      {leftCharacter.length > 0 && rightCharacter.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <div ref={leftList} style={{ width: 110 }}>
              <Slider
                {...setting}
                vertical={true}
                verticalSwiping={true}
                slidesToShow={3}
                beforeChange={(current, next) => {
                  setIndexL(next);
                }}
              >
                {leftCharacter.map((x, i) => {
                  return (
                    <CharacterImage
                      width={75}
                      height={75}
                      image={x.image}
                      key={i}
                      margin={"1rem"}
                    />
                  );
                })}
              </Slider>
            </div>
            <CharacterImage
              width={75 * 4 + 30}
              height={75 * 4 + 30}
              image={leftCharacter[indexl].bgImage}
              margin={"0 0 0 1rem"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <CharacterImage
              width={75 * 4 + 30}
              height={75 * 4 + 30}
              image={rightCharacter[indexr].bgImage}
              margin={"0 1rem 0 0"}
            />
            <div ref={rightList} style={{ width: 110 }}>
              <Slider
                {...setting}
                vertical={true}
                verticalSwiping={true}
                slidesToShow={3}
                beforeChange={(current, next) => {
                  setIndexR(next);
                }}
              >
                {rightCharacter.map((x, i) => {
                  return (
                    <CharacterImage
                      width={75}
                      height={75}
                      image={x.image}
                      key={i}
                      margin={"1rem"}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      )}
      <p
        style={{
          width: "55%",
          color: "#f3f3f3",
          margin: "auto",
          marginBottom: "5rem",
          marginTop: "4.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: character.content_two }}
      ></p>
    </BlockContent>
  );
}
