import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect, useContext } from "react";
import { call_api } from "../apiCall/wifi_call";
import Timer from "./Timer";
import { TimeContext } from "../context/TimeContext";

import mainImg from "../imgs/f2section.jpg";
import mainBg from "../imgs/2f.jpg";

import section3MainImg from "../imgs/f2s3Main.jpg";
import section3SectionImg from "../imgs/f2s3.jpg";
import section4MainImg from "../imgs/f2s4Main.jpg";
import section4SectionImg from "../imgs/f2s4.jpg";
import section5MainImg from "../imgs/f2s5Main.jpg";
import section5SectionImg from "../imgs/f2s5.jpg";



// 슬라이드 쇼 섹션 이미지들
import s3w1 from "../imgs/section3/F2S3W1.jpg"
import s3w2 from "../imgs/section3/F2S3W2.jpg"
import s3w3 from "../imgs/section3/F2S3W3.jpg"
import s3w4 from "../imgs/section3/F2S3W4.jpg"
import s3w5 from "../imgs/section3/F2S3W5.jpg"
import s3w6 from "../imgs/section3/F2S3W6.jpg"
import s3w7 from "../imgs/section3/F2S3W7.jpg"
import s3w8 from "../imgs/section3/F2S3W8.jpg"
import s3w9 from "../imgs/section3/F2S3W9.jpg"
import s3w10 from "../imgs/section3/F2S3W10.jpg"
import s3w11 from "../imgs/section3/F2S3W11.jpg"
import s3w12 from "../imgs/section3/F2S3W12.jpg"
import s3w13 from "../imgs/section3/F2S3W13.jpg"
import s3w14 from "../imgs/section3/F2S3W14.jpg"

import s4w1 from "../imgs/section4/F2S4W1.jpg"
import s4w2 from "../imgs/section4/F2S4W2.jpg"
import s4w3 from "../imgs/section4/F2S4W3.jpg"
import s4w4 from "../imgs/section4/F2S4W4.jpg"
import s4w5 from "../imgs/section4/F2S4W5.jpg"
import s4w6 from "../imgs/section4/F2S4W6.jpg"
import s4w7 from "../imgs/section4/F2S4W7.jpg"
import s4w8 from "../imgs/section4/F2S4W8.jpg"

import s5w1 from "../imgs/section5/F2S5W1.jpg"
import s5w2 from "../imgs/section5/F2S5W2.jpg"
import s5w3 from "../imgs/section5/F2S5W3.jpg"
import s5w4 from "../imgs/section5/F2S5W4.jpg"
import s5w5 from "../imgs/section5/F2S5W5.jpg"
import s5w6 from "../imgs/section5/F2S5W6.jpg"
import s5w7 from "../imgs/section5/F2S5W7.jpg"
import s5w8 from "../imgs/section5/F2S5W8.jpg"

const section3Imgs = [s3w1, s3w2, s3w3, s3w4, s3w5, s3w6, s3w7, s3w8, s3w9, s3w10, s3w11, s3w12, s3w13, s3w14];
const section4Imgs = [s4w1, s4w2, s4w3, s4w4, s4w5, s4w6,s4w7,s4w8];
const section5Imgs = [s5w1, s5w2, s5w3, s5w4, s5w5, s5w6,s5w7,s5w8];

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

function Secondfloor() {
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
      <MainTitle>2층</MainTitle>
      <SecondContainer>
        <MainImg src={mainImg} />
        <SectionContainer>
          <Timer time={time} />
          <Section
            to={"/2F/section3"}
            state={{
              mainBg: `${section3MainImg}`,
              sectionImg: `${section3SectionImg}`,
              wifipeople: null,
              sectionNum: "3",
              images: section3Imgs
            }}
          >
            section3
          </Section>
          <Section
            to={"/2F/section4"}
            state={{
              mainBg: `${section4MainImg}`,
              sectionImg: `${section4SectionImg}`,
              wifipeople: null,
              sectionNum: "4",
              images: section4Imgs
            }}
          >
            section4
          </Section>
          <Section
            to={"/2F/section5"}
            state={{
              mainBg: `${section5MainImg}`,
              sectionImg: `${section5SectionImg}`,
              wifipeople: null,
              sectionNum: "5",
              images: section5Imgs
            }}
          >
            section5
          </Section>
        </SectionContainer>
      </SecondContainer>
      <Mainbg />
    </TopContainer>
  );
}

export default Secondfloor;
