import React, { useState } from 'react'
import styled from 'styled-components';
import house from '../../img/160x90v2.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import nubes from '../../img/nubes.png'
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
  width: 75vw;
  height: 85vh;
  z-index: 50;
  position: absolute;
  image-rendering: pixelated;
`
const Nubes2 = styled.img`
  width: 75vw;
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
          initial={{ x: -250, y: -0 }}
          animate={{
            x: -5000,
            transition: { duration: 5.5, type: "tween" },
          }}
        >
          <Nubes src={nubes}/>
        </motion.div>
        <motion.div
          initial={{ x: 250, y: 0 }}
          animate={{
            x: 5000,
            transition: { duration: 5.5, type: "tween" },
          }}
        >
          <Nubes2 src={nubes}/>
        </motion.div>
      </House>
    </>
  )
}

export default House