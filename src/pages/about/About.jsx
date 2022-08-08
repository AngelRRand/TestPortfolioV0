import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
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
    height: 60vh;
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
    
    h3{
    }
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
    height: 60vh;
    grid-template-columns: repeat(20, 2vw);
    grid-template-rows: repeat(30, 2vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
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