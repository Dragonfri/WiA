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
import Sections from "./components/Sections";
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
  sections[0][1] = findWifiByName(sec, "중앙도서관-1F-104H-0009-121");
  sections[0][2] = findWifiByName(sec, "중앙도서관-1F-104H-0006-121");
  sections[0][3] = findWifiByName(sec, "중앙도서관-1F-104H-0007-121");
  sections[0][4] = findWifiByName(sec, "중앙도서관-1F-104H-0008-121");
  sections[0][5] = findWifiByName(sec, "중앙도서관-1F-104H-0010-121");
  sections[0][6] = findWifiByName(sec, "중앙도서관-1F-104H-0011-121");
  sections[0][7] = findWifiByName(sec, "중앙도서관-1F-104H-0012-121");
  sections[0][8] = findWifiByName(sec, "중앙도서관-1F-104H-0013-121");
  sections[0][9] = findWifiByName(sec, "중앙도서관-1F-104H-0014-121");
  sections[0][10] = findWifiByName(sec, "중앙도서관-1F-104H-0015-121");

  sections[1][0] = findWifiByName(sec, "중앙도서관-1F-107H-0018-121");
  sections[1][1] = findWifiByName(sec, "중앙도서관-1F-107H-0019-121");
  sections[1][2] = findWifiByName(sec, "중앙도서관-1F-107H-0020-121");
  sections[1][3] = findWifiByName(sec, "중앙도서관-1F-107H-0021-121");
  sections[1][4] = findWifiByName(sec, "중앙도서관-1F-107H-0022-121");
  sections[1][5] = findWifiByName(sec, "중앙도서관-1F-107H-0023-121");

  sections[2][0] = findWifiByName(sec, "중앙도서관-2F-207H-0048-121");
  sections[2][1] = findWifiByName(sec, "중앙도서관-2F-207H-0049-121");
  sections[2][2] = findWifiByName(sec, "중앙도서관-2F-207H-0050-121");
  sections[2][3] = findWifiByName(sec, "중앙도서관-2F-207H-0051-121");
  sections[2][4] = findWifiByName(sec, "중앙도서관-2F-207H-0052-121");
  sections[2][5] = findWifiByName(sec, "중앙도서관-2F-207H-0053-121");
  sections[2][6] = findWifiByName(sec, "중앙도서관-2F-207H-0054-121");
  sections[2][7] = findWifiByName(sec, "중앙도서관-2F-207H-0055-121");
  sections[2][8] = findWifiByName(sec, "중앙도서관-2F-207H-0056-121");
  sections[2][9] = findWifiByName(sec, "중앙도서관-2F-207H-0057-121");
  sections[2][10] = findWifiByName(sec, "중앙도서관-2F-207H-0058-121");
  sections[2][11] = findWifiByName(sec, "중앙도서관-2F-207H-0060-121");
  sections[2][12] = findWifiByName(sec, "중앙도서관-2F-207H-0059-121");
  sections[2][13] = findWifiByName(sec, "중앙도서관-2F-207H-0061-121");

  sections[3][0] = findWifiByName(sec, "중앙도서관-2F-201H-0035-121");
  sections[3][1] = findWifiByName(sec, "중앙도서관-2F-201H-0036-121");
  sections[3][2] = findWifiByName(sec, "중앙도서관-2F-201H-0037-121");
  sections[3][3] = findWifiByName(sec, "중앙도서관-2F-201H-0038-121");
  sections[3][4] = findWifiByName(sec, "중앙도서관-2F-201H-0039-121");
  sections[3][5] = findWifiByName(sec, "중앙도서관-2F-201H-0040-121");
  sections[3][6] = findWifiByName(sec, "중앙도서관-2F-201H-0041-121");
  sections[3][7] = findWifiByName(sec, "중앙도서관-2F-201H-0042-121");

  sections[4][0] = findWifiByName(sec, "중앙도서관-2F-204H-0043-121");
  sections[4][1] = findWifiByName(sec, "중앙도서관-2F-204H-0044-121");
  sections[4][2] = findWifiByName(sec, "중앙도서관-2F-201H-0030-121");
  sections[4][3] = findWifiByName(sec, "중앙도서관-2F-201H-0031-121");
  sections[4][4] = findWifiByName(sec, "중앙도서관-2F-201H-0032-121");
  sections[4][5] = findWifiByName(sec, "중앙도서관-2F-201H-0029-121");
  sections[4][6] = findWifiByName(sec, "중앙도서관-2F-201H-0033-121");
  sections[4][7] = findWifiByName(sec, "중앙도서관-2F-201H-0034-121");
  
  sections[5][0] = findWifiByName(sec, "중앙도서관-3F-302H-0062-121");
  sections[5][1] = findWifiByName(sec, "중앙도서관-3F-302H-0063-121");
  
  sections[6][0] = findWifiByName(sec, "중앙도서관-4F-401H-0072-121");
  sections[6][1] = findWifiByName(sec, "중앙도서관-4F-401H-0073-121");
  sections[6][2] = findWifiByName(sec, "중앙도서관-4F-401H-0074-121");
  sections[6][3] = findWifiByName(sec, "중앙도서관-4F-401H-0075-121");
  sections[6][4] = findWifiByName(sec, "중앙도서관-4F-401H-0076-121");
  sections[6][5] = findWifiByName(sec, "중앙도서관-4F-401H-0077-121");
  sections[6][6] = findWifiByName(sec, "중앙도서관-4F-401H-0078-121");
  
  sections[7][0] = findWifiByName(sec, "중앙도서관-4F-406H-0082-121");
  sections[7][1] = findWifiByName(sec, "중앙도서관-4F-406H-0083-121");
  sections[7][2] = findWifiByName(sec, "중앙도서관-4F-406H-0084-121");
  sections[7][3] = findWifiByName(sec, "중앙도서관-4F-406H-0085-121");
  sections[7][4] = findWifiByName(sec, "중앙도서관-4F-406H-0086-121");
  
  sections[8][0] = findWifiByName(sec, "중앙도서관-5F-501H-0088-121");
  sections[8][1] = findWifiByName(sec, "중앙도서관-5F-501H-0089-121");
  sections[8][2] = findWifiByName(sec, "중앙도서관-5F-501H-0090-121");
  sections[8][3] = findWifiByName(sec, "중앙도서관-5F-501H-0091-121");
  sections[8][4] = findWifiByName(sec, "중앙도서관-5F-501H-0092-121");
  sections[8][5] = findWifiByName(sec, "중앙도서관-5F-501H-0093-121");
  sections[8][6] = findWifiByName(sec, "중앙도서관-5F-501H-0094-121");
  
  sections[9][0] = findWifiByName(sec, "중앙도서관-5F-503H-0096-121");
  sections[9][1] = findWifiByName(sec, "중앙도서관-5F-503H-0097-121");
  sections[9][2] = findWifiByName(sec, "중앙도서관-5F-503H-0098-121");
  sections[9][3] = findWifiByName(sec, "중앙도서관-5F-503H-0099-121");

  return sections;
}

function App() {
  const [entireSection, setEntireSection] = useState([]);

  // console.log(entireSection[0]);


  // useEffect(() => {
  //   call_api()
  //   .then(data => {
  //     setEntireSection(extract_data(data));
  //   });

  //   const intervalId = setInterval(() => {  
  //      call_api().then(data => setEntireSection(extract_data(data)));
  //   }, 45000);
  //   // Return a cleanup function to clear the interval on unmount
  //   return () => {
  //       clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/1F" element={<Firstfloor/>}/>
          <Route path="/1F/section1" element={<Sections/>}/>
          <Route path="/1F/section2" element={<Sections/>}/>
          <Route path="/2F" element={<Secondfloor/>}/>
          <Route path="/2F/section3" element={<Sections/>}/>
          <Route path="/2F/section4" element={<Sections/>}/>
          <Route path="/2F/section5" element={<Sections/>}/>
          <Route path="/3F" element={<Thirdfloor/>}/>
          <Route path="/3F/section6" element={<Sections/>}/>
          <Route path="/4F" element={<Fourthfloor/>}/>
          <Route path="/4F/section7" element={<Sections/>}/>
          <Route path="/4F/section8" element={<Sections/>}/>
          <Route path="/5F" element={<Fifthfloor/>}/>
          <Route path="/5F/section9" element={<Sections/>}/>
          <Route path="/5F/section10" element={<Sections/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
