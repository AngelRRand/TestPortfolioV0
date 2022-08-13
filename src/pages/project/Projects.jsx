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
  return (
    <ProjectsContainer>

      <motion.div
        initial={{  scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

      </motion.div>


    </ProjectsContainer>
  )
}

export default Projects