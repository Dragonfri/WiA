import styled from "styled-components";
import GlobalStyles from "./GrobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Firstfloor from './components/Firstfloor';
import Secondfloor from './components/Secondfloor';
import Thirdfloor from './components/Thirdfloor';
import Fourthfloor from './components/Fourthfloor';
import Fifthfloor from './components/Fifthfloor';



import { useEffect, useState } from 'react';
import { call_api } from '../src/apiCall/wifi_call';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Section10 from './components/Section10';
import { findWifiByName } from './datas/sectionsFind';


function extract_data(data) {
  let sec = data.RESULT;
  let sections = new Array(10);
  sections[0] = new Array(11);
  sections[1] = new Array(6);
  sections[2] = new Array(14);
  sections[3] = new Array(8);
  sections[4] = new Array(8);
  sections[5] = new Array(2);
  sections[6] = new Array(7);
  sections[7] = new Array(5);
  sections[8] = new Array(7);
  sections[9] = new Array(4);
  
  sections[0][0] = findWifiByName(sec, "중앙도서관-1F-104H-0005-121");
  sections[0][1] = findWifiByName(sec, "중앙도서관-1F-104H-0006-121");
  sections[0][2] = findWifiByName(sec, "");
  console.log(sections[0][0]);
  // let one_F_section1 = data.RESULT.filter((item) => {

  // });
  // let one_F_section2 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-1F-107H");
  // });
  // let two_F_section3 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-2F-207H");
  // });
  // let two_F_section4 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-2F-201H");
  // });
  // let two_F_section5 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-2F-201H");
  // }); // 4~5
  // let three_F_section6 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-3F-302H");
  // });
  // let four_F_section7 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-4F-401H");
  // });
  // let four_F_section8 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-4F-406H");
  // });
  // let five_F_section9 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-5F-501H");
  // });
  // let five_F_section10 = data.RESULT.filter((item) => {
  //   return item.location.startsWith("중앙도서관-5F-503H");
  // });

  // return [one_F_section1, one_F_section2, two_F_section3, two_F_section4, two_F_section5, three_F_section6, 
  // four_F_section7, four_F_section8, five_F_section9, five_F_section10];
  return [];
}

function App() {
  const [entireSection, setEntireSection] = useState([]);

  console.log(entireSection[0]);

  useEffect(() => {
    call_api()
    .then(data => {
      setEntireSection(extract_data(data));
    });

    const intervalId = setInterval(() => {  
       call_api().then(data => setEntireSection(extract_data(data)));
    }, 45000);
    // Return a cleanup function to clear the interval on unmount
    return () => {
        clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/1F" element={<Firstfloor/>}/>
          <Route path="/1F/section1" element={<Section1/>}/>
          <Route path="/1F/section2" element={<Section2/>}/>
          <Route path="/2F" element={<Secondfloor/>}/>
          <Route path="/2F/section3" element={<Section3/>}/>
          <Route path="/2F/section4" element={<Section4/>}/>
          <Route path="/2F/section5" element={<Section5/>}/>
          <Route path="/3F" element={<Thirdfloor/>}/>
          <Route path="/3F/section6" element={<Section6/>}/>
          <Route path="/4F" element={<Fourthfloor/>}/>
          <Route path="/4F/section7" element={<Section7/>}/>
          <Route path="/4F/section8" element={<Section8/>}/>
          <Route path="/5F" element={<Fifthfloor/>}/>
          <Route path="/5F/section9" element={<Section9/>}/>
          <Route path="/5F/section10" element={<Section10/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
