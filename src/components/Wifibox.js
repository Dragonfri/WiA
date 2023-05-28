import styled from 'styled-components';
import { Link } from 'react-router-dom';

const handleColorType = wifiPeople => {
    if (wifiPeople < 7) {
        return "color: black; background: #86D9A9;"
    }
    else if(wifiPeople < 17){
        return "color: black; background: #F7DC6F;"
    }
    else{
        return "color: black; background: #EE7366;"
    }
  };

const handleHoverColor = wifiPeople => {
    if (wifiPeople < 7) {
        return "box-shadow: 1px 3px 10px 1px green;"
    }
    else if(wifiPeople < 17){
        return "box-shadow: 1px 3px 10px 1px yellow;"
    }
    else{
        return "box-shadow: 1px 3px 10px 1px red;"
    } 
}

const WifiContainer = styled.div`
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    margin-left: 1vw;
    ${({ wifiPeople }) => handleColorType(wifiPeople)};
    border-radius: 20%;
    font-weight: 600;
    

    @media (min-width: 0px) {
        font-size: 15px;
        width: 40px; 
        height: 50px;
    }
    @media (min-width: 770px) {
        font-size: 35px;
        width: 120px; 
        height: 130px;
    }

    &:hover {
        scale: 1.4;
        ${({ wifiPeople }) => handleHoverColor(wifiPeople)};
        /* box-shadow: 1px 1px 3px 1px black; */
        /* color: white; */
    }
`

const WifiNumber = styled.div`
margin-top: 10px;
    width: 100%;
    height: 40%;
    /* border-bottom: 2px solid black; */
    /* border: 1px solid black; */
    /* background-color: white;
    border-radius: 30%; */
    /* color: rgba(15,85,173,1); */
    
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 0px) {
        font-size: 5px;
        span{
        /* border: 2px solid black; */
        padding: 2px 4px 2px 4px;
        border-radius: 50%;
        background-color: white;
        font-weight: 900;
    }
    }
    @media (min-width: 770px) {
        font-size: 25px;
        span{
        /* border: 3px solid black; */
        padding: 5px 10px 5px 10px;
        border-radius: 50%;
        background-color: white;
        font-weight: 900;
    }
    }

    
    
`

const WifiPeople = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`


function Wifibox(props) {

    return (
        <WifiContainer wifiNumber ={props.wifiNumber} wifiPeople={props.wifiPeople}>
            <WifiNumber><span>{props.wifiNumber}</span></WifiNumber>
            <WifiPeople>{props.wifiPeople}명</WifiPeople>
        </WifiContainer>
    );
}

export default Wifibox;