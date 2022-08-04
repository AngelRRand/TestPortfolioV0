import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import { Home } from './pages/home/Home';
import Education from './pages/education/Education';
import Projects from './pages/project/Projects';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import NavRPG from './component/navRPG';
import estrellas from './img/Sprite-0006.png'
import { useLocation } from "react-router-dom";



function App() {
  const sampleLocation = useLocation();

  const ContainerApp = styled.div`
  height: 100vh;
  
`
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
  width:95vw;
  margin-top: ${sampleLocation.pathname.toString() === '/' ? '60vh' : '0vh'};
  image-rendering: pixelated;
  /* height: ${sampleLocation.pathname.toString() === '/' ? '180vh' : '140vh'}; */
  height: 200vh;
  position: absolute;
  bottom:  ${sampleLocation.pathname.toString() === '/' ? '0' : '10vh'};
  z-index: 0;
`
  return (
    <Fragment>
      <ContainerApp>
        <IMGAbolute src={estrellas} />
        <div>
          <Pages>
            <AnimatePresence>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Education' element={<Education />} />
                <Route path='/Projects' element={<Projects />} />

                <Route path='*' element={
                  <main>
                    <p>No se encontro la ruta buscada</p>
                  </main>
                } />
              </Routes>
            </AnimatePresence>
          </Pages>
        </div>
        <NavRPG></NavRPG>
      </ContainerApp>

    </Fragment>
  );
}

export default App;