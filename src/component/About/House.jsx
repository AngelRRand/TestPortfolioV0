import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import TransitionTerra from '../Nav/TransitionTerra';
import house from '../../img/Planet/Terra/House/House.gif'
import houseFlora from '../../img/Planet/Terra/House/HouseFlora.gif'
import catBody from '../../img/Planet/Terra/House/27.gif'
import cathead from '../../img/Planet/Terra/House/27NotModif.gif'
import catheadHover from '../../img/Planet/Terra/House/27Modif.gif'
import lightAuto from '../../img/Planet/Terra/House/LuzAuto.gif'
import lightHover from '../../img/Planet/Terra/House/LuzHover.gif'
import lightEffect from '../../img/Planet/Terra/House/LuzEffectHover.gif'
import Background from '../Nav/Background';

const House = () => {
  const House = styled.div`
    overflow: hidden;
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
    width: 20em;
    height: 8em;
    image-rendering: pixelated;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    color: #ffffff;
    transition: all 0.5s ease;
    z-index: 1000;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
    text-align: center;
    background-color: #00000089;
    border-radius: 10px;
    border: 3px solid black;
    p{
      color: #ffffff;
      padding: 10px;
    }
  `
  return (
      <House>

        <Background
          bg={house}
          bgGif={houseFlora}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <TemplateGrid>
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
          </TemplateGrid>
        </motion.div>

        <TransitionTerra/>
        
      </House>
  )
}

export default House