import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect, useContext } from "react";
import { call_api } from "../apiCall/wifi_call";
import Timer from "./Timer";
import { TimeContext } from "../context/TimeContext";


import mainImg from "../imgs/f5section.jpg";
import mainBg from "../imgs/5f.jpg";

import section9MainImg from "../imgs/f5s9Main.jpg";
import section9SectionImg from "../imgs/f5s9.jpg";
import section10MainImg from "../imgs/f5s10Main.jpg";
import section10SectionImg from "../imgs/f5s10.jpg";


import s9w1 from "../imgs/section9/F5S9W1.jpg"
import s9w2 from "../imgs/section9/F5S9W2.jpg"
import s9w3 from "../imgs/section9/F5S9W3.jpg"
import s9w4 from "../imgs/section9/F5S9W4.jpg"
import s9w5 from "../imgs/section9/F5S9W5.jpg"
import s9w6 from "../imgs/section9/F5S9W6.jpg"
import s9w7 from "../imgs/section9/F5S9W7.jpg"

import s10w1 from "../imgs/section10/F5S10W1.jpg"
import s10w2 from "../imgs/section10/F5S10W2.jpg"
import s10w3 from "../imgs/section10/F5S10W3.jpg"
import s10w4 from "../imgs/section10/F5S10W4.jpg"

const section9Imgs = [s9w1, s9w2, s9w3, s9w4, s9w5, s9w6, s9w7];
const section10Imgs = [s10w1, s10w2, s10w3, s10w4];

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

function Fifthfloor() {
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
      <MainTitle>5층</MainTitle>
      <SecondContainer>
        <MainImg src={mainImg} />
        <SectionContainer>
          <Timer time={time} />
          <Section
            to={"/5F/section9"}
            state={{
              mainBg: `${section9MainImg}`,
              sectionImg: `${section9SectionImg}`,
              wifipeople: null,
              sectionNum: "9",
              images: section9Imgs
            }}
          >
            section9
          </Section>
          <Section
            to={"/5F/section10"}
            state={{
              mainBg: `${section10MainImg}`,
              sectionImg: `${section10SectionImg}`,
              wifipeople: null,
              sectionNum: "10",
              images: section10Imgs
            }}
          >
            section10
          </Section>
        </SectionContainer>
      </SecondContainer>
      <Mainbg />
    </TopContainer>
  );
}

export default Fifthfloor;
