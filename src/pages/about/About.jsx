import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
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
    font-family: 'PF Tempesta Seven', sans-serif;
    font-family: 'PF Tempesta Seven Extended', sans-serif;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
    font-family: 'PF Tempesta Seven Compressed', sans-serif;
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
  const Me = styled(NavLink)`
    grid-area: 29 / 8 / 30 / 9;
    cursor: pointer;
    display: flex;
    color: #000000;
    text-decoration: none;
    image-rendering: pixelated;
    transition: all 0.5s ease;
    background: transparent;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 99;
   `
  const Spain = styled(NavLink)`
   grid-area: 5 / 13 / 6 / 14;;
   cursor: pointer;
   display: flex;
   color: #000000;
   text-decoration: none;
   image-rendering: pixelated;
   transition: all 0.5s ease;
   background: transparent;
   flex-direction: column;
   text-align: center;
   align-items: center;
   z-index: 99;
  `
  const CR = styled(NavLink)`
  grid-area: 8 / 7 / 9 / 8;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
 `
  return (
    <AboutContainer>



      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >


        <ContainerIMG>
          <h3>About</h3>
          <img src={planet} alt="" />
        </ContainerIMG>
        <TempladeGrid>
          <Me to='/projects'>

            <img src={señal} alt="" />
          </Me>
          <Spain to='/education'>
          <img src={señal} alt="" />
          </Spain>
          <CR to='/education'>
          <img src={señal} alt="" />
          </CR>
        </TempladeGrid>
      </motion.div>


      <motion.div
        initial={{ y: 1000 }}
        animate={{
          y: 0,
          transition: { duration: 2.5, type: "spring" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

      </motion.div>
    </AboutContainer>
  )
}

export default About