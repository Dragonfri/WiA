import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect, useContext } from "react";
import { call_api } from "../apiCall/wifi_call";
import Timer from "./Timer";
import { TimeContext } from "../context/TimeContext";

import mainImg from "../imgs/f4section.jpg";
import mainBg from "../imgs/4f.jpg";

import section7MainImg from "../imgs/f4s7Main.jpg";
import section7SectionImg from "../imgs/f4s7.jpg";
import section8MainImg from "../imgs/f4s8Main.jpg";
import section8SectionImg from "../imgs/f4s8.jpg";


import s7w1 from "../imgs/section7/F4S7W1.jpg"
import s7w2 from "../imgs/section7/F4S7W2.jpg"
import s7w3 from "../imgs/section7/F4S7W3.jpg"
import s7w4 from "../imgs/section7/F4S7W4.jpg"
import s7w5 from "../imgs/section7/F4S7W5.jpg"
import s7w6 from "../imgs/section7/F4S7W6.jpg"
import s7w7 from "../imgs/section7/F4S7W7.jpg"

import s8w1 from "../imgs/section8/F4S8W1.jpg"
import s8w2 from "../imgs/section8/F4S8W2.jpg"
import s8w3 from "../imgs/section8/F4S8W3.jpg"
import s8w4 from "../imgs/section8/F4S8W4.jpg"
import s8w5 from "../imgs/section8/F4S8W5.jpg"

const section7Imgs = [s7w1, s7w2, s7w3, s7w4, s7w5, s7w6, s7w7];
const section8Imgs = [s8w1, s8w2, s8w3, s8w4, s8w5];

const TopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainBg});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow-y: scroll;
`;

const Mainbg = styled.div`
  //배경화면 흰색으로 만들기 위함.
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 0;
`;

const MainTitle = styled.div`
  text-align: center;
  width: 100%;
  height: 10vh;
  padding-top: 3vh; //임시로 해봄 너무 천장에 붙어있어서

  @media (min-width: 0px) {
    font-size: 40px;
    font-weight: 900;
  }
  @media (min-width: 770px) {
    font-size: 50px;
  }
  z-index: 2;
  color: rgba(15, 85, 173, 1);
`;

const SecondContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  @media (min-width: 0px) {
    flex-direction: column;
  }
  @media (min-width: 770px) {
    flex-direction: row;
  }
`;

const MainImg = styled.img`
  /* background-image: url(${mainImg});
    background-position: center;
    background-size: cover; */
  border-radius: 10%;
  @media (min-width: 0px) {
    width: 70vw;
    height: 70vw;
  }
  @media (min-width: 770px) {
    width: 40vw;
    height: 40vw;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 40vw;
  height: 30vw;

  /* background-color: rgba(15,85,173,0.9); */
  border-radius: 10%;
  color: rgba(15, 85, 173, 1);
`;

const Section = styled(Link)`
  font-weight: 500;
  margin: 0.5vw;

  @media (min-width: 0px) {
    font-size: 40px;
    font-weight: 900;
  }
  @media (min-width: 770px) {
    font-size: 50px;
  }
  @media (min-width: 1000px) {
    font-size: 70px;
  }
  &:hover {
    scale: 1.3;
    color: white;
    -webkit-text-stroke: 1px #0f55ad;
  }
`;

function Fourthfloor() {
  // console.log("function first");
  // useEffect(() => {
  //     console.log("useEffect first")
  //     call_api();
  //     setInterval(() => {
  //         console.log("setInterval");
  //         call_api();
  //     }, 45000);
  //     // setInterval(() => {
  //     //     call_api();
  //     // }, 50000);

  // }, []);
  const {time, setTime} = useContext(TimeContext);

  return (
    <TopContainer>
      <MainTitle>4층</MainTitle>
      <SecondContainer>
        <MainImg src={mainImg} />
        <SectionContainer>
          <Timer time={time} />
          <Section
            to={"/4F/section7"}
            state={{
              mainBg: `${section7MainImg}`,
              sectionImg: `${section7SectionImg}`,
              wifipeople: null,
              sectionNum: "7",
              images: section7Imgs
            }}
          >
            section7
          </Section>
          <Section
            to={"/4F/section8"}
            state={{
              mainBg: `${section8MainImg}`,
              sectionImg: `${section8SectionImg}`,
              wifipeople: null,
              sectionNum: "8",
              images: section8Imgs
            }}
          >
            section8
          </Section>
        </SectionContainer>
      </SecondContainer>
      <Mainbg />
    </TopContainer>
  );
}

export default Fourthfloor;
