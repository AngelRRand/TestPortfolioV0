import React, { Fragment } from 'react';
import { Route, Routes, Location } from 'react-router-dom';
import About from './pages/about/About';
import { Home } from './pages/home/Home';
import Education from './pages/education/Education';
import Projects from './pages/project/Projects';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import NavRPG from './component/Nav/navRPG';
import estrellas from './img/Starts.gif'
import { useLocation } from "react-router-dom";
import HouseTransition from './component/About/HouseTransition.jsx';
import House from './component/About/House';
import Networks from './pages/networks/Networks';



function App() {
  const location = useLocation();

  const Pages = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  h1{
    font-size: calc(2rem + 2vw);
  }
`
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
          <Pages>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/About/HouseTransition' element={<HouseTransition/>}/>
                <Route path='/About/House' element={<House/>}/>
                <Route path='/Education' element={<Education />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Networks' element={<Networks />} />

              </Routes>
            </AnimatePresence>
          </Pages>
        <NavRPG></NavRPG>

    </Fragment>
  );
}

export default App;