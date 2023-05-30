import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect, useState, useContext } from "react";
import { call_api } from "../apiCall/wifi_call";

import mainImg from "../imgs/f1section.jpg";
import mainBg from "../imgs/1f.jpg";

import section2MainImg from "../imgs/f1s2Main.jpg";
import section2SectionImg from "../imgs/f1s2.jpg";
import section1MainImg from "../imgs/f1s1Main.jpg";
import section1SectionImg from "../imgs/f1s1.jpg";


// 슬라이드 쇼 섹션 1 이미지들
import s1w1 from "../imgs/section1/F1S1W1.jpg"
import s1w2 from "../imgs/section1/F1S1W2.jpg"
import s1w3 from "../imgs/section1/F1S1W3.jpg"
import s1w4 from "../imgs/section1/F1S1W4.jpg"
import s1w5 from "../imgs/section1/F1S1W5.jpg"
import s1w6 from "../imgs/section1/F1S1W6.jpg"
import s1w7 from "../imgs/section1/F1S1W7.jpg"
import s1w8 from "../imgs/section1/F1S1W8.jpg"
import s1w9 from "../imgs/section1/F1S1W9.jpg"
import s1w10 from "../imgs/section1/F1S1W10.jpg"
import s1w11 from "../imgs/section1/F1S1W11.jpg"

import s2w1 from "../imgs/section2/F1S2W1.jpg"
import s2w2 from "../imgs/section2/F1S2W2.jpg"
import s2w3 from "../imgs/section2/F1S2W3.jpg"
import s2w4 from "../imgs/section2/F1S2W4.jpg"
import s2w5 from "../imgs/section2/F1S2W5.jpg"
import s2w6 from "../imgs/section2/F1S2W6.jpg"
import Timer from "./Timer";
import { TimeContext } from "../context/TimeContext";

const section1Imgs = [s1w1, s1w2, s1w3, s1w4, s1w5, s1w6, s1w7, s1w8, s1w9, s1w10, s1w11];
const section2Imgs = [s2w1, s2w2, s2w3, s2w4, s2w5, s2w6];


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


function Firstfloor() {
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

  // useEffect(() => {
      
  //   const timeInterval = setInterval(() => {
  //     setTime(prevTime => prevTime === 1 ? 45 : prevTime-1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timeInterval);
  //   }
  // }, []);

  return (
    <TopContainer>
      <MainTitle>1층</MainTitle>
      <SecondContainer>
        <MainImg src={mainImg} /> 
        <SectionContainer>
          <Timer time={time} />
          {/* <Section to={"section1"}>section1</Section> */}

          {/* <Timer time={lastTime} /> */}
          <Section
            
            to={'/1F/section1'}
            state={{ mainBg: `${section1MainImg}`, sectionImg: `${section1SectionImg}`, wifipeople: null, sectionNum: "1", images: section1Imgs}}
            
          > section1</Section>

          <Section
            
            to={'/1F/section2'}
            state={{ mainBg: `${section2MainImg}`, sectionImg: `${section2SectionImg}`, wifipeople: null, sectionNum: "2",images: section2Imgs}}
            
          >
            section2
          </Section>
        </SectionContainer>
      </SecondContainer>
      <Mainbg />
    </TopContainer>
  );
}

export default Firstfloor;
