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
import { TimeContext } from "./context/TimeContext";


function App() {
  const [entireSection, setEntireSection] = useState([]);  
  const [time, setTime] = useState(45);

  useEffect(() => {
    
    const timeInterval = setInterval(() => {
      setTime(prevTime => prevTime === 1 ? 45 : prevTime-1);
    }, 1000);

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
        clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <TimeContext.Provider value={{time, setTime}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1F" element={<Firstfloor />}/>
            <Route path="/1F/section1" element={<Sections wifiPeople={entireSection[0]}/>}/>
            <Route path="/1F/section2" element={<Sections wifiPeople={entireSection[1]}/>}/>
            <Route path="/2F" element={<Secondfloor />}/>
            <Route path="/2F/section3" element={<Sections wifiPeople={entireSection[2]}/>}/>
            <Route path="/2F/section4" element={<Sections wifiPeople={entireSection[3]}/>}/>
            <Route path="/2F/section5" element={<Sections wifiPeople={entireSection[4]}/>}/>
            <Route path="/3F" element={<Thirdfloor />}/>
            <Route path="/3F/section6" element={<Sections wifiPeople={entireSection[5]}/>}/>
            <Route path="/4F" element={<Fourthfloor />}/>
            <Route path="/4F/section7" element={<Sections wifiPeople={entireSection[6]}/>}/>
            <Route path="/4F/section8" element={<Sections wifiPeople={entireSection[7]}/>}/>
            <Route path="/5F" element={<Fifthfloor />}/>
            <Route path="/5F/section9" element={<Sections wifiPeople={entireSection[8]}/>}/>
            <Route path="/5F/section10" element={<Sections wifiPeople={entireSection[9]}/>}/>
          </Routes>
        </TimeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
