import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const TimerContainer = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-left: 1vw;
    border-radius: 20%;
    font-weight: 600;
    position: absolute;
    right: 1vw;
    top: 1vh;

    

    @media (min-width: 0px) {
        font-size: 10px;
        width: 20px; 
        height: 25px;
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


function Timer(props) {

    let [Time = 45, setTime] = useState();

    useEffect(() => {
        const interval = setInterval(() => setTime(Time === 1 ? Time = 45 : --Time), 1000);
        const intervalId = setInterval(() => {  console.log("Hello")  }, 45000);
        // Return a cleanup function to clear the interval on unmount
        return () => {
            clearInterval(intervalId);
            clearInterval(interval);
        };
      }, []);

    return (
        <TimerContainer>
            <TimerText>새로고침</TimerText>
            <TimerItem>{Time}</TimerItem>
        </TimerContainer>
    );
}

export default Timer;