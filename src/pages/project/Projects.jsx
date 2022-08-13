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
  return (
    <ProjectsContainer>

      <motion.div
        initial={{  scale: 0 }}
        animate={{
          scale: 1,
          transition: { delay: 0.5, duration: 1.7,  type: "spring", },
        }}
        exit={{
          x: -500,
          transition: { delay: 1.5,  ease: 'easeInOut' },
        }}
      >

        <ContainerIMG>
          <h3>Projects</h3>
          <img src={planetLava} alt="" />
        </ContainerIMG>
        <TempladeGrid>
          
        </TempladeGrid>
      </motion.div>


    </ProjectsContainer>
  )
}

export default Projects