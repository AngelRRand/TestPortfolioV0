import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planetIce from '../../img/Planet/IcePlanetZOOM2.png';
import señal from '../../img/NavImg/Señal.gif'
const Education = () => {
  const Pages = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  h1{
    font-size: calc(2rem + 2vw);
  }
`

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
    grid-area: 8 / 7 / 8 / 8;
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
    grid-area: 10 / 12 / 11 / 13;
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
    grid-area: 21 / 8 / 22 / 9;
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
   color: #000000;
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
    <Pages>

    <motion.div
      initial={{ x: -1000, scale: 0 }}
      animate={{
        x: 0,
        scale: 1,
        transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
      }}
      exit={{
        scale: 0,
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
            <img className='pointer' src={señal} alt="" />
          </Henry>
          <Udemy  to='/education'>
            <Text >Udemy</Text>
            <img className='pointer' src={señal} alt="" />
          </Udemy>
          <Youtube  to='/education'>
            <Text >Youtube</Text>
            <img className='pointer' src={señal} alt="" />
          </Youtube>
        </TempladeGrid>

      </EducationContainer>
    </motion.div>

    </Pages>
  )
}

export default Education