import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import terra from '../../img/NavImg/tierra.png'
import planetIce from '../../img/NavImg/planetIce.png'
import planetLava from '../../img/NavImg/planetLava.png'
import señal from '../../img/NavImg/Señal.gif'
import Galaxy from '../../img/galaxy.png'
import GalaxyT from '../../img/galaxyT.png'
import GalaxyB from '../../img/galaxyB.png'
export const Home = () => {
  const rotate = keyframes`
  0%
  {
    transform: translateX( 0px );
  }
  10%
  {
    transform: translateX( 1px );
  }
  20%
  {
    transform: translateX( 2px );
  }
  30%
  {
    transform: translateX( 3px );
  }
  40%
  {
    transform: translateX( 4px );
  }
  50%
  {
    transform: translateX( 5px );
  }
  60%
  {
    transform: translateX( 4px );
  }
  70%
  {
    transform: translateX( 3px );
  }
  80%
  {
    transform: translateX( 2px );
  }
  90%
  {
    transform: translateX( 1px );
  }
  100%
  {
    transform: translateX( 0px );
  }
`;
  const rotate2 = keyframes`
  0%
  {
    transform: translateX( 0px );
  }
  10%
  {
    transform: translateX( -1px );
  }
  20%
  {
    transform: translateX( -2px );
  }
  30%
  {
    transform: translateX( -3px );
  }
  40%
  {
    transform: translateX( -4px );
  }
  50%
  {
    transform: translateX( -5px );
  }
  60%
  {
    transform: translateX( -4px );
  }
  70%
  {
    transform: translateX( -3px );
  }
  80%
  {
    transform: translateX( -2px );
  }
  90%
  {
    transform: translateX( -1px );
  }
  100%
  {
    transform: translateX( 0px );
  }
`;
  const Home = styled.div`
  height: 150vh;
  
  `
  const ContainerIMG = styled.div`
  position: absolute;
  top: 0;
  width: 60vw;
  height: 150vh;
  object-fit: cover;
  `
  const IMG = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  image-rendering: pixelated;
  z-index: 10;
`
  const IMGT = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${rotate} 3s linear infinite;
  image-rendering: pixelated;
  z-index: 10;
`
  const IMGB = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${rotate2} 3s linear infinite;
  image-rendering: pixelated;
  z-index: 10;
`
  const TemplateGrid = styled.div`
    display: grid;
    width: 60vw;
    height:  150vh;
    grid-template-columns: repeat(10, 4vw);
    grid-template-rows: repeat(30, 6vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `
  const ItemAbout = styled(NavLink)`
  grid-area: 16 / 8 / 18 / 8;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
  img:first-child{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover{
    transform: scale(2);
  }
  &:hover img:first-child{
    display: inline;
  }
  &:hover img{
    display: none;
  }
  &:hover span{
    display: none;
  }
  
`
  const ItemProject = styled(NavLink)`
  grid-area: 12 / 11 / 13 / 8;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
img:first-child{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover {
    transform: scale(2);
  }
  &:hover img:first-child{
    display: inline;
  }
  &:hover img{
    display: none;
  }
  &:hover span{
    display: none;
    }

`
  const ItemEducation = styled(NavLink)`
  grid-area: 25 / 6 / 26 / 7;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
  img:first-child{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover{
    transform: scale(2);
  }
  &:hover img:first-child{
    display: inline;
  }
  &:hover img{
    display: none;
  }
  &:hover span{
    display: none;
    }

`
  const ItemNetworks = styled(NavLink)`
grid-area: 18 / 5 / 19 / 6;
cursor: pointer;
display: flex;
color: #000000;
text-decoration: none;
image-rendering: pixelated;
transition: all 0.5s ease;
background: transparent;
flex-direction: column;
text-align: center;
align-items: center;
z-index: 99;
img:first-child{
  background: transparent;
  width: 3.5rem;
  display: none;
}
&:hover{
  transform: scale(2);
}
&:hover img:first-child{
  display: inline;
}
&:hover img{
  display: none;
}
&:hover span{
  display: none;
  }

`
  const Text = styled.span`
  font-size: calc(13px + 0.4vw);
  transition: all 0.3s ease;
  align-items: center;
  background: transparent;
  text-align: center;
  font-family: 'PF Tempesta Seven', sans-serif;
  font-family: 'PF Tempesta Seven Extended', sans-serif;
  font-family: 'PF Tempesta Seven Condensed', sans-serif;
  font-family: 'PF Tempesta Seven Compressed', sans-serif;
  image-rendering: pixelated;
  z-index: 90; 
`
  const Señal = styled.img`
    position: absolute;
    z-index: 80;
    width: calc(13px + 5vw);
`


  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5, type: "spring" },
      }}>

      <Home className="home">
        <ContainerIMG>

          <IMG src={Galaxy} alt="Galaxy" />

          <IMGT src={GalaxyT} />
          <IMGB src={GalaxyB} />
        </ContainerIMG>
        <TemplateGrid>

          <ItemAbout to='/About'>
            <img className='pointer' src={terra} alt='About' />
            <Text>About</Text>
            <Señal src={señal} alt="" />
          </ItemAbout>
          <ItemProject to='/Projects'>
            <img src={planetLava} className='pointer' alt='About' />
            <Text >Projects</Text>
            <Señal src={señal} alt="" />
          </ItemProject>
          <ItemEducation to='/Education'>
            <img src={planetIce} className='pointer' alt='About' />
            <Text >Education</Text>
            <Señal src={señal} alt="" />
          </ItemEducation>
          <ItemNetworks to='/Education'>
            <img src={planetIce} className='pointer' alt='About' />
            <Text >Networks</Text>
            <Señal src={señal} alt="" />
          </ItemNetworks>

        </TemplateGrid>
      </Home>

    </motion.div>
  )
}
