import styled from "styled-components";
import GlobalStyles from "./GrobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Firstfloor from './components/Firstfloor';
import { useEffect } from 'react';
import { call_api } from '../src/apiCall/wifi_call';

function App() {

  // console.log("function first");
  // useEffect(() => {
  //   console.log("useEffect first");
  //   call_api(); // call immediately

  //   const intervalId = setInterval(() => {
  //       call_api(); // call every 45 seconds
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
