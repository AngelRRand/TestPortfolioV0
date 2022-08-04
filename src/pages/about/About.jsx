import React from 'react'
import granImagen from '../../img/cuarto96.gif'
import cafe from '../../img/cafe.gif'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
const About = () => {


  const Item = styled(NavLink)`
  width: 9rem;
  padding: 10px;
  cursor: pointer;
  display: flex;
  color: #000000;
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