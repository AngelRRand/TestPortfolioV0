import React, { Fragment } from 'react';
import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/home/Home';
import Education from './pages/education/Education';
import Projects from './pages/project/Projects';
import styled from 'styled-components';
import estrellas from './img/Starts.gif'
import About from './pages/about/About';
import NavRPG from './component/Nav/navRPG';
import HouseTransition from './component/About/HouseTransition.jsx';
import House from './component/About/House';
import Networks from './pages/networks/Networks';
import Art from './component/About/Art'
import Dream from './component/About/Dream'


function App() {
  const location = useLocation();

  
  const IMGAbolute = styled.img`
  image-rendering: pixelated;
  overflow-x: hidden;
  position: absolute;
  width:90vw;
  height: 250vh;
  margin-top: ${location.pathname.toString() === '/' ? '60vh' : '0vh'};
  bottom:  ${location.pathname.toString() === '/' ? '-50vh' : '0vh'};
  left: 5vw;
  z-index: 0;
`
  return (
    <Fragment>
      <IMGAbolute src={estrellas} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/About/HouseTransition' element={<HouseTransition />} />
          <Route path='/About/House' element={<House />} />
          <Route path='/About/Art' element={<Art />} />
          <Route path='/About/Dream' element={<Dream />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Networks' element={<Networks />} />

        </Routes>
      </AnimatePresence>
      <NavRPG></NavRPG>

    </Fragment>
  );
}

export default App;