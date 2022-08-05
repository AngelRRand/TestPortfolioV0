import React from 'react'
import styled from 'styled-components';
import './About.css'
import { motion } from "framer-motion";
import EducationIcons from './EducationIcons.jsx'
import planetIce from '../../img/Planet/IcePlanetZOOM2.png'
const Education = () => {


  const EducationContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    <EducationContainer>



      <motion.div
        initial={{ x: -1000 }}
        animate={{
          x: 0,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">
          <h3>My technologies</h3>

          <PlanetContainer className='containerAnimated' >
            <img src={planetIce} alt="" />
            
            {/* <EducationIcons /> */}
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
    </EducationContainer>
  )
}

export default Education