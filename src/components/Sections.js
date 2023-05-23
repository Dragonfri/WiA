import styled from 'styled-components';
import Wifibox from './Wifibox';
import { useLocation } from 'react-router-dom';



const TopContainer = styled.div`
    width:100vw;
    height:100vh;
    /* background-color: tomato; */
    background-image: url(${props => props.mainBg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Mainbg = styled.div` //배경화면 흰색으로 만들기 위함.
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.5);
  position: absolute; 
  z-index: 0;
`

const SectionTitle = styled.div`
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
`

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
`

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
`


const DetailImgsContainer = styled.div`
    width: 100vw;
    height: 30vh;
    z-index: 2;
    /* background-color: blue; */
`

function Sections() {

    const location = useLocation();
    const { mainBg, sectionImg, wifipeople, sectionNum } = location.state;

    
    function createWifibox(wifiPeople) {
        return wifiPeople.map((people,index) => (
            <Wifibox key={index} wifiNumber={index + 1} wifiPeople={people} />
        ))
    }

    

    return (
        <TopContainer mainBg={mainBg}>

            <SectionTitle>section{sectionNum}</SectionTitle>

            <SecondContainer>

                <SectionImg src={sectionImg} />

                <WifiContainer>
                    
                    {createWifibox(wifipeople)}
                </WifiContainer>

            </SecondContainer>
            <DetailImgsContainer>
                
            </DetailImgsContainer>

            <Mainbg/>
        </TopContainer>

    );
}


export default Sections;