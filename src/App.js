import React, { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import About from './pages/about/About';
import { Home } from './pages/home/Home';
import Education from './pages/education/Education';
import Projects from './pages/project/Projects';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Projects' element={<Projects/>}/>

        {/*  */}
        <Route path='*' element={
          <main>
            <p>No se encontro la ruta buscada</p>
          </main>
        }/>
      </Routes>

    </Fragment>
  );
}

export default App;