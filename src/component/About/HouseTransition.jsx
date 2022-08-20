import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
import { useNavigate } from "react-router-dom";
const House = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/About/House')
  }
  const AboutContainer = styled.div`
    overflow: hidden;
    height: 85vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    
    `
  const ContainerIMG = styled.div`
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
  const Nubes = styled.div`
    position: absolute;
    width: 100vw;
    height: 85vh;
    background-color: white;
    z-index: 100;
  `
  return (
    <>
      
     
      <AboutContainer>
      <motion.div
          initial={{ opacity: 0, }}
          animate={{
            opacity: 0,
            transition: { duration: 6.5, type: "spring",bounce: 0 },
          }}
        >
        <Nubes/>

        </motion.div>
        <motion.div
          initial={{ scale: 1, }}
          animate={{
            scale: 7,
            x: 350,
            y: -1150,
            transition: { duration: 6.5, type: "spring",bounce: 0 },
          }}
        >

          <ContainerIMG>
            <h3>About</h3>
            <img src={planet} alt="" />
          </ContainerIMG>

        </motion.div>
      </AboutContainer>
    </>
  )
}

export default House