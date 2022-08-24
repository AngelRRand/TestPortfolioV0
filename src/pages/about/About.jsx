import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
import señal from '../../img/NavImg/Señal.gif'
const About = () => {
  const AboutContainer = styled.div`
    overflow: hidden;
    height: 85vh;
    width: 85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    `
  const ContainerIMG = styled.div`
  
    position: absolute;
    width: 35vw;
    height: 65vh;
    image-rendering: pixelated;
    object-fit: contain;
    z-index: 10;
    color: white;
    text-align: center;
    color:white;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
    img{
      
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      z-index: 10;
    }
  `
  const TempladeGrid = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    width: 35vw;
    height: 65vh;
    grid-template-columns: repeat(20, 2vw);
    grid-template-rows: repeat(30, 2vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `
  const Me = styled(Link)`
    grid-area: 30 / 7 / 31 / 9;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    image-rendering: pixelated;
    transition: all 0.5s ease;
    background: transparent;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 99;
   `
  const Spain = styled(Link)`
   grid-area: 6 / 13 / 6 / 14;;
   cursor: pointer;
   display: flex;
   text-decoration: none;
   image-rendering: pixelated;
   transition: all 0.5s ease;
   background: transparent;
   flex-direction: column;
   text-align: center;
   align-items: center;
   z-index: 99;
  `
  const CR = styled(Link)`
  grid-area: 23 / 5 / 24 / 6;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
 `
  const Text = styled.span`
   position: absolute;
   font-size: calc(13px + 0.4vw);
   color: #ffffff;
   text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);
   transition: all 0.3s ease;
   background: transparent;
   text-align: center;
   font-family: 'PF Tempesta Seven', sans-serif;
   font-family: 'PF Tempesta Seven Extended', sans-serif;
   font-family: 'PF Tempesta Seven Condensed', sans-serif;
   font-family: 'PF Tempesta Seven Compressed', sans-serif;
   image-rendering: pixelated;
   z-index: 90; 
 `
  
  return (

    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { delay: 0.5, duration: 1.7,  type: "spring", },
      }}
      exit={{
        x: "-100vh",
        transition: { delay: 1.5,  ease: 'easeInOut' },
      }}
    >
      <AboutContainer >


        <ContainerIMG>
          <h3>About</h3>
          <img src={planet} alt="" />
        </ContainerIMG>
        <TempladeGrid>
          <Me to='/About/HouseTransition'>
            <Text >House</Text>
            <img className='pointer' src={señal} alt="" />
          </Me>
          <Spain to='/education'>
            <Text >Dream</Text>
            <img className='pointer' src={señal} alt="" />
          </Spain>
          <CR to='/education'>
            <Text >Art</Text>
            <img className='pointer' src={señal} alt="" />
          </CR>
        </TempladeGrid>

      </AboutContainer>
    </motion.div>
  )
}

export default About