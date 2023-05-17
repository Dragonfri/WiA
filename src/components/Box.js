import styled from 'styled-components';
import { Link } from 'react-router-dom';


const TopContainer = styled(Link)`
    width: 300px;
    height: 250px;
    /* background-color: tomato; */
    border: 1px solid black;
    margin:10px;
    
    background-image: url(${(props) => props.backImg});
    
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 2;
    border-radius: 20px;
    border: none;
    overflow: hidden;

    @media (min-width: 0px) {
        width: 160px;
        height: 130px;
    }
    @media (min-width: 770px) {
        width: 300px;
        height: 250px;
    }
    /* @media (min-width: 1020px) {
        width: 400px;
        height: 350px;
    } */
    /* @media (min-width: 1300px) {
        width: 1200px;
        height: 200px;
    } */



`

const Bg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: 700;
    cursor: pointer;
    color: white;
    &:hover{
        background-color: rgba(255,255,255, 0.4);
        color: #0F55AD;
        font-size: 70px;
    }
`


function Box(props) {

    return (
        <TopContainer backImg={props.backImg} to={props.text}>
            <Bg>{props.text}</Bg>
        </TopContainer>
    );
}

export default Box;