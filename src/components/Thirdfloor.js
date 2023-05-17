import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useEffect } from 'react';
import { call_api } from '../apiCall/wifi_call';

import mainImg from "../imgs/f3section.jpg";
import mainBg from "../imgs/3f.jpg";


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
`

const Mainbg = styled.div` //배경화면 흰색으로 만들기 위함.
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.5);
  position: absolute;
  z-index: 0;
`


const MainTitle = styled.div`
    text-align: center;
    width:100%;
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
    color: rgba(15,85,173,1);
`

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
`

const MainImg = styled.img`
    /* background-image: url(${mainImg});
    background-position: center;
    background-size: cover; */
    border-radius: 10%;
    @media (min-width: 0px) {
        width:70vw;
        height:70vw;
      
    }
    @media (min-width: 770px) {
        width:40vw;
        height:40vw;
    }
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 40vw;
    height:30vw;

    /* background-color: rgba(15,85,173,0.9); */
    border-radius: 10%;
    color: rgba(15,85,173,1);
`

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
    &:hover{
      scale: 1.3;
      color: white;
      -webkit-text-stroke: 1px #0F55AD;
    }
`

function Thirdfloor() {

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

    return(
        <TopContainer>
            <MainTitle>3층</MainTitle>
            <SecondContainer>
                <MainImg src={mainImg} />
                <SectionContainer>
                    <Section to={"section6"}>section6</Section>
                </SectionContainer>
            </SecondContainer>
            <Mainbg/>
        </TopContainer>
    );
}

export default Thirdfloor;