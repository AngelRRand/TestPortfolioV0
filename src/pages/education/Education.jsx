import React, { useState } from 'react'
import granImagen from '../../img/cuarto96.gif'
import styled from 'styled-components';
import cafe from '../../img/cafe.gif'
import './About.css'
import { motion } from "framer-motion";
import home from '../../img/NavImg/home.gif'
import { Link, NavLink } from 'react-router-dom';
import EducationIcons from './EducationIcons.jsx'
const Education = () => {

  const [none, setNone] = useState(false);

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
    border:3px solid black;
    height: 100vh;
    width:15vw;
    align-items: center;
    background-color:black;
    color:white;
    justify-content: space-between;
  `
  const Item = styled(NavLink)`
  width: 9rem;
  cursor: pointer;
  display: flex;
  color: black;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.2s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img{
    background: transparent;
    width: 5rem;
  }
  &:hover{
    transform: scale(1.05);
  }
`
  const Text = styled.span`
  padding-top: 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
`
  const Icon = styled.img`
    width: 3.5rem;
  
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
        <Item to='/'>
          <img src={home} alt='Home' />
          <Text >Home</Text>
        </Item>
      </motion.div>


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
          <motion.div
            initial={{ y: -1000 }}
            animate={{
              y: -10,
              transition: { duration: 3.5, type: "tween" },
            }}
            exit={{
              x: -500,
              transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
            }}
          >
            <h3>My technologies</h3>
          </motion.div>

          <div className='containerAnimated' ref={constraintsRef}>

            <div className="presentation-img">
              <img src={granImagen} alt="" className="imagen" />
              <img src={cafe} alt="" className="cafe-gif" />
            </div>
            <EducationIcons/>
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