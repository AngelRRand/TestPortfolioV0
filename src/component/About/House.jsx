import React, { useState } from 'react'
import styled from 'styled-components';
import house from '../../img/160x90v2.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import nubes from '../../img/nubes.png'
import nubesTop from '../../img/nubesTop.png'
const House = () => {

  const House = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 85vh;
  `
  const ContainerHouse = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
  `
  const BackGround = styled.img`
    width: 100vw;
    height: 85vh;
    image-rendering: pixelated;
    z-index: 10;
  `
  const Nubes = styled.img`
  width: 100vw;
  height: 85vh;
  z-index: 50;
  position: absolute;
  image-rendering: pixelated;
`
const Nubes1 = styled.img`
width: 100vw;
height: 85vh;
z-index: 50;
position: absolute;
background-color: #fff9e1;
image-rendering: pixelated;
`
const Nubes2 = styled.img`
  width: 100vw;
  height: 85vh;
  z-index: 50;
  position: absolute;
  image-rendering: pixelated;
`
  return (
    <>
      <House>

        <ContainerHouse>
          <BackGround src={house} alt="" />
        </ContainerHouse>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <Nubes1 />
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0}}
          animate={{
            x: -5000,
            transition: { duration: 15.5, type: "tween" },
          }}
        >
          <Nubes src={nubesTop}/>
        </motion.div> 
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{
            x: 5000,
            transition: { duration: 15.5, type: "tween" },
          }}
        >
          <Nubes2 src={nubes}/>
        </motion.div>
      </House>
    </>
  )
}

export default House