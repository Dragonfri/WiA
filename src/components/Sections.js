import styled from "styled-components";
import Wifibox from "./Wifibox";
import { useLocation } from "react-router-dom";

// 슬라이드 쇼
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./Timer";
import { TimeContext } from "../context/TimeContext";


const TopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: tomato; */
  background-image: url(${(props) => props.mainBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Mainbg = styled.div`
  //배경화면 흰색으로 만들기 위함.
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  z-index: 0;
`;

const SectionTitle = styled.div`
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
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  /* background-color: red; */

  @media (min-width: 0px) {
    flex-direction: column;
  }
  @media (min-width: 770px) {
    flex-direction: row;
  }
`;

const SectionImg = styled.img`
  border-radius: 10%;
  @media (min-width: 0px) {
    width: 60vw;
    height: 29vh;
  }
  @media (min-width: 770px) {
    width: 40vw;
    height: 40vh;
  }
`;

const WifiContainer = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  /* background-color: rgba(15,85,173,1); */
  /* border-radius: 20%; */

  @media (min-width: 0px) {
    width: 90vw;
    height: 29vh;
  }
  @media (min-width: 770px) {
    width: 50vw;
    height: 50vh;
  }
`;



// 슬라이드 쇼
const DetailImgsContainer = styled.div`
  width: 100vw;
  height: 30vh;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: blue; */

  
`;

const SlideBtn = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 85, 173, 0.9);
    color:white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;

    @media (min-width: 0px) {
        width: 5vw;
    height: 5vw;
    
  }
  @media (min-width: 770px) {
    width: 3vw;
    height: 3vw;
    font-size: 30px;
  }
`

const SlideImgContainer = styled.div`
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 0px) {
        img {
            border-radius: 10%;
    width: 50vw;
    height: 27vh;
        }
    }
    @media (min-width: 770px) {
        img {
            border-radius: 10%;
    width: 20vw;
    height: 27vh;
  }
    }
    
`
const SlideImgText = styled.div`
    text-align: center;
    font-weight: 900;
    color: rgba(15, 85, 173, 1);
    @media (min-width: 0px) {
    
}
@media (min-width: 770px) {
    margin-bottom: 1vh;
  font-size: 30px;
}
`

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function wrap(min, max, value) {
    const rangeSize = max - min;
    return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function Sections({wifiPeople}) {
  const location = useLocation();
  const { mainBg, sectionImg, wifipeople, sectionNum, images } = location.state;
  const {time, setTime} = useContext(TimeContext);

  function createWifibox(wifiPeople) {
    if (wifiPeople === undefined) {
      return wifipeople.map((people, index) => (
        <Wifibox key={index} wifiNumber={index + 1} wifiPeople={people} />
      ));
    }
    return wifiPeople.map((people, index) => (
      <Wifibox key={index} wifiNumber={index + 1} wifiPeople={people} />
    ));
  }

  // 슬라이드쇼
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <TopContainer mainBg={mainBg}>
      <SectionTitle>section{sectionNum}</SectionTitle>
      <Timer time={time} />

      <SecondContainer>
        <SectionImg src={sectionImg} />

        <WifiContainer>{createWifibox(wifiPeople)}</WifiContainer>
      </SecondContainer>
      <DetailImgsContainer>
        <SlideBtn className="prev" onClick={() => paginate(-1)}>
          {"<-"}
        </SlideBtn>
        <AnimatePresence initial={false} custom={direction} >
            <SlideImgContainer>
            <SlideImgText>{imageIndex + 1}번 와이파이 위치</SlideImgText>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.15 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          </SlideImgContainer>
        </AnimatePresence>
        <SlideBtn className="next" onClick={() => paginate(1)}>
          {"->"}
        </SlideBtn>
        
      </DetailImgsContainer>

      <Mainbg />
    </TopContainer>
  );
}

export default Sections;
