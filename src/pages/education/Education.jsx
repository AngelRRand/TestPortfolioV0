import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planetIce from '../../img/Planet/IcePlanetZOOM2.png';
import señal from '../../img/NavImg/Señal.gif'
const Education = () => {


  const EducationContainer = styled.div`
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
  const Henry = styled(Link)`
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
  const Udemy = styled(Link)`
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
  const Youtube = styled(Link)`
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
      initial={{ x: -1000, scale: 0 }}
      animate={{
        x: 0,
        scale: 1,
        transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
      }}
      exit={{
        x: -500,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
    >
      <EducationContainer>

        <ContainerIMG>
          <h3>Education</h3>
          <img src={planetIce} alt="" />
        </ContainerIMG>
        <TempladeGrid>
          <Henry  to='/education'>
            <Text >Henry</Text>
          </Henry>
          <Udemy  to='/education'>
            <Text >Udemy</Text>
          </Udemy>
          <Youtube  to='/education'>
            <Text >Youtube</Text>
          </Youtube>
        </TempladeGrid>

      </EducationContainer>
    </motion.div>
  )
}

export default Education