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
    width: 200vw;
height: 85vh;
z-index: 50;
position: absolute;
background-color: #fff9e1;
  `
  setTimeout(() => {
    go()
  }, 5000);
  return (
    <>


      <AboutContainer>
        <motion.div
          initial={{ scale: 1, }}
          animate={{
            scale: 7,
            x: 350,
            y: -1150,
            transition: { duration: 6.5, type: "spring", bounce: 0 },
          }}
        >

          <ContainerIMG>
            <motion.div
              initial={{ opacity: 0, x:-1000 }}
              animate={{
                opacity: 1,
                transition: { duration: 15.5, type: "spring", bounce: 0 },
              }}
            >
              <Nubes />

            </motion.div>
            <h3>About</h3>
            <img src={planet} alt="" />
          </ContainerIMG>

        </motion.div>
      </AboutContainer>
    </>
  )
}

export default House