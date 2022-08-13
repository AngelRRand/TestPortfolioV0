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
  const PlanetContainer = styled.div`
    display: flex;
    width: 450px;
    height: 450px;
    border: none;
    box-shadow: none;
    overflow: hidden;
    img{
      width: 100vw;
      image-rendering: pixelated;
    }
    z-index: 1;
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

        <div className="presentation-about">
          <h3>Projects</h3>

          <PlanetContainer className='containerAnimated' >
            <img src={planetLava} alt="" />
            
          </PlanetContainer>
        </div>
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
    </ProjectsContainer>
  )
}

export default Projects