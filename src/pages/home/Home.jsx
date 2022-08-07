import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import terra from '../../img/NavImg/tierra.png'
import planetIce from '../../img/NavImg/planetIce.png'
import planetLava from '../../img/NavImg/planetLava.png'
import Galaxy from '../../img/galaxy.png'
export const Home = () => {
  const Home = styled.div`
  height: 150vh;
  display: flex;
  justify-content: center;
  `
  const ContainerIMG = styled.div`
    
  position: absolute;
  top: 0;
  width: 60vw;
  height: 150vh;
  object-fit: cover;
  `
  const IMG = styled.img`
  height: 100%;
  width: 100%;
  image-rendering: pixelated;
  z-index: 10;
`
  const TemplateGrid = styled.div`
    display: grid;
    width: 60vw;
    height:  150vh;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(20, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `
  const ItemAbout = styled(NavLink)`
  grid-area: 13 / 10 / 14 / 11;
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
  img{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover{
    transform: scale(2);
  }
  &:hover img{
    display: inline;
  }
  &:hover span{
    display: none;
  }
  
`
  const ItemProject = styled(NavLink)`
  grid-area: 10 / 12 / 11 / 13;
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
img{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover{
    transform: scale(2);
  }
  &:hover img{
    display: inline;
  }
  &:hover span{
    display: none;
    }

`
  const ItemEducation = styled(NavLink)`
  grid-area: 17 / 7 / 18 / 8;
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
img{
    background: transparent;
    width: 3.5rem;
    display: none;
  }
  &:hover{
    transform: scale(2);
  }
  &:hover img{
    display: inline;
  }
  &:hover span{
    display: none;
    }

`
  const Text = styled.span`
  font-size: 1.3rem;
  transition: all 0.3s ease;
  align-items: center;
  background: transparent;
  text-align: center;
  font-family: 'PF Tempesta Seven', sans-serif;
font-family: 'PF Tempesta Seven Extended', sans-serif;
font-family: 'PF Tempesta Seven Condensed', sans-serif;
font-family: 'PF Tempesta Seven Compressed', sans-serif;
image-rendering: pixelated; 
 
`


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5, type: "spring" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}>

      <Home className="home">
        <ContainerIMG>

          <IMG src={Galaxy} alt="Galaxy" />
        </ContainerIMG>
        <TemplateGrid>

          <ItemAbout to='/about'>
            <img src={terra} alt='About' />
            <Text>About</Text>
          </ItemAbout>
          <ItemProject to='/projects'>
            <img src={planetLava} alt='About' />
            <Text >Projects</Text>
          </ItemProject>
          <ItemEducation to='/education'>
            <img src={planetIce} alt='About' />
            <Text >Education</Text>
          </ItemEducation>

        </TemplateGrid>
      </Home>

    </motion.div>
  )
}
