import React, { useState } from 'react'
import styled from 'styled-components';
import house from '../../img/Planet/Terra/House.gif'
import catBody from '../../img/Planet/Terra/27.gif'
import cathead from '../../img/Planet/Terra/27NotModif.gif'
import catheadHover from '../../img/Planet/Terra/27Modif.gif'
import lightAuto from '../../img/Planet/Terra/LuzAuto.gif'
import lightHover from '../../img/Planet/Terra/LuzHover.gif'
import lightEffect from '../../img/Planet/Terra/LuzEffectHover.gif'
import me from '../../img/Planet/Terra/cuarto96.gif'
import coffe from '../../img/Planet/Terra/cafe.gif'
import { motion } from "framer-motion";
import nubes from '../../img/nubes.png'
import nubesTop from '../../img/nubesTop.png'
import nubesback from '../../img/nubesBackground.png'
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
    overflow: hidden;
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
  const Cat = styled.div`
  z-index: 90;
  image-rendering: pixelated;
  width: 2.5vw;
  grid-area: 16 / 14 / 15 / 15;
  img{
    position: absolute;
    width: 4em;
    height: 4em;
  }
  img:nth-child(3){
    display: none;
  }
  &:hover img:nth-child(3){
    display: inline;
  }
  &:hover img:nth-child(2){
    display: none;
  }
  &:hover div{
    opacity: 1;
  }
  `
  const Me = styled.div`
    width: 4.5vw;
    height: 4.5vw;
    grid-area: 11 / 11 / 11 / 10;
    z-index: 90;
  image-rendering: pixelated;
    img{
    position: absolute;
    width: 5em;
    height: 5em;
  }
  img:nth-child(1){
    display: inline;
  }
  img:nth-child(2){
    width: 7em;
    height: 7em;
    display: inline;
  }
  img:nth-child(3){
    display: none;
  }
  &:hover img:nth-child(1){
    display: none;
  }
  &:hover img:nth-child(2){
    display: inline;
  }
  &:hover img:nth-child(3){
    display: inline;
  }
  &:hover div{
    opacity: 1;
  }
  `
  const Cart = styled.div`
    padding: 10px;
    flex-direction: column;
    width: 25em;
    height: 10em;
    image-rendering: pixelated;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s ease;
    color: #ffffff;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
  `
  return (
    <>
      <House>

        <ContainerHouse>
          <BackGround src={house} alt="" />
        </ContainerHouse>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <TemplateGrid>
            <Me>
              <img src={lightAuto} alt='cat' />
              <img src={lightHover} alt='cat' />
              <img src={lightEffect} alt='cat' />
              <Cart>
                <h2>Habitacion</h2>
                <p>Delante de una ventana me encuentro en contanste contacto con la luz solar</p>
              </Cart>
            </Me>
            <Cat>
              
              <img src={catBody} alt='cat' />
              <img src={cathead} alt='cat' />
              <img src={catheadHover} alt='cat' />
              <Cart>
                <h2>Mi gato</h2>
                <p>Su nombre es 27, siempre esta en la puerta de mi casa :D</p>
              </Cart>
            </Cat>
          </TemplateGrid>
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
        <motion.div
          initial={{ y: -5 }}
          animate={{
            y: 0,
            transition: { type: "tween", repeat: 'Infinity', duration: 2, repeatType: "reverse", }
          }}
        >
          <Nubes2 src={nubesback} />
        </motion.div>
      </House>
    </>
  )
}

export default House