import styled from 'styled-components';
import Wifibox from './Wifibox';




const TopContainer = styled.div`
    width:100vw;
    height:100vh;
    /* background-color: tomato; */
    background-image: url(${mainBg});
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
    
    /* background-image: url(${sectionImg});
    background-position: center;
    background-size: cover; */
    /* align-items: center; */
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

function Sections(props) {


    return (
        <TopContainer mainBg={props.mainBg}>

            <SectionTitle>section{props.sectionNum}</SectionTitle>

            <SecondContainer>

                <SectionImg src={props.sectionImg} />

                <WifiContainer>
                    
                    <Wifibox wifiNumber={1} wifiPeople={2} />

                    <Wifibox wifiNumber={2} wifiPeople={4} />

                    <Wifibox wifiNumber={3} wifiPeople={5} />

                    <Wifibox wifiNumber={4} wifiPeople={6} />

                    <Wifibox wifiNumber={5} wifiPeople={10} />

                    <Wifibox wifiNumber={6} wifiPeople={12} />

                    <Wifibox wifiNumber={7} wifiPeople={15} />

                    <Wifibox wifiNumber={8} wifiPeople={18} />

                    <Wifibox wifiNumber={9} wifiPeople={21} />

                    <Wifibox wifiNumber={1} wifiPeople={2} />

                    <Wifibox wifiNumber={2} wifiPeople={4} />

                    <Wifibox wifiNumber={3} wifiPeople={5} />

                    <Wifibox wifiNumber={4} wifiPeople={6} />

                    <Wifibox wifiNumber={5} wifiPeople={10} />
                </WifiContainer>

            </SecondContainer>
            <DetailImgsContainer>
                
            </DetailImgsContainer>

            <Mainbg/>
        </TopContainer>
    );
}


export default Sections;