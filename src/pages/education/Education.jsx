import React, { useState } from 'react'
import styled from 'styled-components';
import './About.css'
import { motion } from "framer-motion";
import flecha from '../../img/Mator3.png'
import { NavLink } from 'react-router-dom';
import EducationIcons from './EducationIcons.jsx'
const Education = () => {


  const constraintsRef = {
    top: -230,
    left: -230,
    right: 230,
    bottom: 210,
  }
  const EducationContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `
  

  return (
    <EducationContainer>



      <motion.div
        initial={{ x: 1000 }}
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

          <div className='containerAnimated' ref={constraintsRef}>

            
            <EducationIcons />
          </div>
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