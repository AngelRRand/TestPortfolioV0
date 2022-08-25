import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png';
import señal from '../../img/NavImg/Señal.gif';

const Networks = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { delay: 0.5, duration: 1.7,  type: "spring", },
      }}
      exit={{
        x: "-100vh",
        transition: { delay: 1.5,  ease: 'easeInOut' },
      }}
    ></motion.div>
  )
}

export default Networks