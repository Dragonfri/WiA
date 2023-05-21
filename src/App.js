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


function App() {
  const [oneFloor, setOneFloor] = useState([]);

  // console.log("function first");
  // console.log(oneFloor);
  // useEffect(() => {
  //   console.log("useEffect first");
  //   call_api()
  //   .then(data => {
  //     let oneF = data.RESULT.filter((item) => {
  //       return item.location.startsWith("중앙도서관-1F");
  //     });
  //     console.log(oneF);
  //     setOneFloor(oneF);
  //   })

  //   const intervalId = setInterval(() => {  
  //      call_api().then(data => console.log(data));
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
          <Route path="/1F/section1" element={<Section1/>}/>
          {/* <Route path="/1F/section2" element={<Section2/>}/> */}
          <Route path="/1F/section2" element={<Sections/>}/>
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
