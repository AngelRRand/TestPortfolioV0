import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import nubes from '../../img/nubes.png'
import nubesTop from '../../img/nubesTop.png'
import background from '../../img/Planet/Terra/Art/ArtBackground.png'
import backgroundGif from '../../img/Planet/Terra/Art/ArtPajaros.gif'


const Art = () => {

  const Container = styled.div`
  overflow:hidden;
  width: 100vw;
  height: 85vh;
`
  const ContainerArt = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  image-rendering: pixelated;
  overflow: hidden;
`
  const BackGround = styled.img`
  width: 100vw;
  height: 85vh;
  image-rendering: pixelated;
  z-index: 10;
`
  const BackGroundGif = styled.img`
  position: absolute;
  width: 100vw;
  height: 85vh;
  image-rendering: pixelated;
  z-index: 8;
`


  return (
    <Container>

      <ContainerArt>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <BackGroundGif src={backgroundGif} alt="" />
        </motion.div>

        <BackGround src={background} alt="" />
      </ContainerArt>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 4.5, type: "tween" },
        }}
      >
        {/* <TemplateGrid>
          <Me>
            <img src={lightAuto} alt='light' />
            <img src={lightHover} alt='light' />
            <img src={lightEffect} alt='light' />
            <Cart>
              <h2>Room</h2>
              <p>In front of a window I find myself in constant contact with the sunlight.</p>
            </Cart>
          </Me>
          <Cat>

            <img src={catBody} alt='cat' />
            <img src={cathead} alt='cat' />
            <img src={catheadHover} alt='cat' />
            <Cart>
              <h2>My cat</h2>
              <p>His name is twenty-seven, he is always at my house :D</p>
            </Cart>
          </Cat>
        </TemplateGrid> */}
      </motion.div>

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
        initial={{ x: 0, y: 0 }}
        animate={{
          x: -5000,
          transition: { duration: 15.5, type: "tween" },
        }}
      >
        <Nubes src={nubesTop} />
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{
          x: 5000,
          transition: { duration: 15.5, type: "tween" },
        }}
      >
        <Nubes2 src={nubes} />
      </motion.div>

    </Container>
  )
}

export default Art