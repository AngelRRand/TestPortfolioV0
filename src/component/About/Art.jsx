import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import background from '../../img/Planet/Terra/Art/ArtBackground.png'
import backgroundGif from '../../img/Planet/Terra/Art/ArtPajaros.gif'
import TransitionTerra from '../Nav/TransitionTerra';
import Background from '../Nav/Background';


const Art = () => {

  const Container = styled.div`
  overflow:hidden;
  width: 100vw;
  height: 85vh;
`
  const TemplateGrid = styled.div`
    position: absolute;
    top: 0;
    display: grid;
    width: 80vw;
    height:  100vh;
    grid-template-columns: repeat(50, 3vw);
    grid-template-rows: repeat(40, 4vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `


  return (
    <Container>

      <Background
        bg={background}
        bgGif={backgroundGif}
      />
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
      <TransitionTerra />
    </Container>
  )
}

export default Art