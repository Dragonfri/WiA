import styled from 'styled-components';
import { Link } from 'react-router-dom';

const handleColorType = wifiPeople => {
    console.log(wifiPeople)
    if (wifiPeople < 7) {
        return "color: black; background: #58D68D;"
    }
    else if(wifiPeople < 17){
        return "color: black; background: #F7DC6F;"
    }
    else{
        return "color: black; background: #E74C3C;"
    }
  };

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
        font-size: 25px;
        width: 80px; 
        height: 90px;
    }

    &:hover {
        scale: 1.4;
        box-shadow: 1px 1px 3px 1px black;
        /* color: white; */
    }
`

const WifiNumber = styled.div`
    width: 100%;
    height: 40%;
    /* border-bottom: 2px solid black; */
    /* border: 1px solid black; */
    /* background-color: white; */
    /* border-radius: 30%; */
    /* color: rgba(15,85,173,1); */
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    
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
            <WifiNumber>{props.wifiNumber}</WifiNumber>
            <WifiPeople>{props.wifiPeople}명</WifiPeople>
        </WifiContainer>
    );
}

export default Wifibox;