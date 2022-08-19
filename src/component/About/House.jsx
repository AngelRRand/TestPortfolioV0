import React, { useState } from 'react'
import styled from 'styled-components';
import house from '../../img/160x90v2.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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
  const Nubes = styled.div`
  width: 150vw;
  height: 85vh;
  background-color: white;
  z-index: 50;
  position: absolute;
`
  return (
    <>
      <House>

        <ContainerHouse>
          <BackGround src={house} alt="" />
        </ContainerHouse>
        <motion.div
          initial={{ x: -500, y: -0 }}
          animate={{
            x: 5000,
            transition: { duration: 3.5, type: "tween" },
          }}
        >
          <Nubes />
        </motion.div>
      </House>
    </>
  )
}

export default House