import React from 'react'
import granImagen from '../../img/cuarto96.gif'
import cafe from '../../img/cafe.gif'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
const About = () => {


  const AboutContainer = styled.div`
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
     <div className="presentation-img">
              <img src={granImagen} alt="" className="imagen" />
              <img src={cafe} alt="" className="cafe-gif" />
            </div>

    </motion.div>
  )
}

export default About