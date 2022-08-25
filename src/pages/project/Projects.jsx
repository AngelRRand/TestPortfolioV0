import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import planetLava from '../../img/Planet/PlanetLavaZOOM.png'
const Projects = () => {

  const ProjectsContainer = styled.div`
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
  const React = styled(Link)`
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
  const Javascript = styled(Link)`
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
  const ReactNative = styled(Link)`
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
    <ProjectsContainer>

      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { delay: 0.5, duration: 1.7, type: "spring", },
        }}
        exit={{
          x: -500,
          transition: { delay: 1.5, ease: 'easeInOut' },
        }}
      >

        <ContainerIMG>
          <h3>Projects</h3>
          <img src={planetLava} alt="" />
        </ContainerIMG>
        <TempladeGrid>
          <React to='/education'>
            <Text >React</Text>
            <img className='pointer' src={señal} alt="" />
          </React>
          <Javascript to='/education'>
            <Text >Javascript</Text>
            <img className='pointer' src={señal} alt="" />
          </Javascript>
          <ReactNative to='/education'>
            <Text >React Native</Text>
            <img className='pointer' src={señal} alt="" />
          </ReactNative>
        </TempladeGrid>
      </motion.div>


    </ProjectsContainer>
  )
}

export default Projects