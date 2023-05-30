import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const handleBackgroundColor = time => {
    if (time < 6 && time > 4) {
        return "background: rgba(254, 76, 84,0.3);"
    }else if (time < 5 && time > 3) {
        return "background: rgba(254, 76, 84,0.4);"
    }
    else if (time < 4 && time > 2) {
        return "background: rgba(254, 76, 84,0.6);"
    }
    else if (time < 3 && time > 1) {
        return "background: rgba(254, 76, 84,0.8);"
    }
    else if (time <= 2) {
        return "background: rgba(254, 76, 84,1);"
    }
    else{
        return "background: transparent;"
    }
  };

const TimerContainer = styled.div`
    border: 2px solid rgba(15, 85, 173, 1);
    display: flex;
    flex-direction: column;
    margin-left: 1vw;
    border-radius: 20%;
    font-weight: 600;
    position: absolute;
    right: 1vw;
    top: 1vh;
    color: rgba(15, 85, 173, 1);
    z-index: 2;

    ${({ time }) => handleBackgroundColor(time)};

    @media (min-width: 0px) {
        font-size: 10px;
        width: 40px; 
        height: 45px;
    }
    @media (min-width: 770px) {
        font-size: 20px;
        width: 60px; 
        height: 65px;
    }
`

const TimerText = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 40%;
    
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 0px) {
        font-size: 5px;
        span{
        padding: 2px 4px 2px 4px;
        border-radius: 50%;
        background-color: white;
        font-weight: 900;
        }
    }
    @media (min-width: 770px) {
        font-size: 15px;
        span{
        /* border: 3px solid black; */
        padding: 5px 10px 5px 10px;
        border-radius: 50%;
        background-color: white;
        font-weight: 900;
        }
    }
`

const TimerItem = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`



function TimerFunction(){
    let [Time = 45, setTime] = useState();
    return setTime(Time === 0 ? Time = 45 : --Time);
}


function Timer({time}) {

 
    // useEffect(() => {
    //     const interval = setInterval(() => setTime(Time === 1 ? Time = 45 : --Time), 1000);
    //     const intervalId = setInterval(() => {  console.log("Hello")  }, 45000);
    //     // Return a cleanup function to clear the interval on unmount
    //     return () => {
    //         clearInterval(intervalId);
    //         clearInterval(interval);
    //     };
    //   }, []);

    return (
        <TimerContainer time={time}>
            <TimerText>새로고침</TimerText>
            <TimerItem>{time}</TimerItem>
        </TimerContainer>
    );
}

export default Timer;