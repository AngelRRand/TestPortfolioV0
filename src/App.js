import React, { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import { Home } from './pages/home/Home';
import Education from './pages/education/Education';
import Projects from './pages/project/Projects';
import Nav from './component/navbar/Nav';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';


const Pages = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1{
    font-size: calc(2rem + 2vw);
  }
`


function App() {
  return (
    <Fragment>
      {/* <Nav></Nav> */}
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
    </Fragment>
  );
}

export default App;