import React, { useState } from 'react'
import granImagen from '../../img/cuarto96.gif'
import styled from 'styled-components';
import cafe from '../../img/cafe.gif'
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
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
  const ContainerText = styled.div`
    display:flex;
    height: 100vh;
    width:15vw;
    align-items: center;
    justify-content: space-between;
  `
  const Item = styled(NavLink)`
  position: absolute;
  width: 5rem;
  cursor: pointer;
  text-decoration: none;
  image-rendering: pixelated;
  bottom: 0px;
  img{
    background: transparent;
    width: 5rem;
  }
  &:hover{
    transform: scale(1.05);
  }
`
  const Icon = styled.img`
    width: 2.5rem;
  
  `

  return (
    <EducationContainer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 8.5, type: "spring" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}>
        <ContainerText>
          <div>
            <h4>BackEnd</h4>

          </div>

        </ContainerText>
      </motion.div>


      <motion.div
        initial={{ y: -1000 }}
        animate={{
          y: 0,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          y: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">
          <h3>My technologies</h3>

          <div className='containerAnimated' ref={constraintsRef}>

            <div className="presentation-img">
              <img src={granImagen} alt="" className="imagen" />
              <img src={cafe} alt="" className="cafe-gif" />
        {/* <Item to='/about'>

          <Icon src={flecha} />
        </Item> */}
            </div>
            <EducationIcons />
          </div>
        </div>
      </motion.div>


      <motion.div
        initial={{ y: -1000 }}
        animate={{
          y: 0,
          transition: { duration: 4.5, type: "tween" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >
        <ContainerText>
          <div>
            <h4>FrontEnd</h4>

          </div>

        </ContainerText>
      </motion.div>
    </EducationContainer>
  )
}

export default Education