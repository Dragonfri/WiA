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
import { extract_data } from "./datas/extractWifiData";


function App() {
  const [entireSection, setEntireSection] = useState([]);  
  
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
