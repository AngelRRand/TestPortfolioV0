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
  bottom: 37vh;
  right: 47vw;
  width: 9rem;
  padding: 10px;
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
  position: absolute;
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
  top: 7.6vh;
  left: 28vw;
  width: 9rem;
  padding: 10px;
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
  position: absolute;
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
  bottom: -120px;
  left: 500px;
width: 9rem;
padding: 10px;
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
position: absolute;
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
  grid-area: 20 / 10 / 21 / 11;
  font-size: 1.3deg;
  transition: all 0.3s ease;
  align-items: center;
  background: transparent;
  text-align: center;
  font-family: 'PF Tempesta Seven', sans-serif;
font-family: 'PF Tempesta Seven Extended', sans-serif;
font-family: 'PF Tempesta Seven Condensed', sans-serif;
font-family: 'PF Tempesta Seven Compressed', sans-serif;
image-rendering: pixelated; 
z-index:30; 
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
          <Text>About</Text>

          {/* <ItemAbout to='/about'>
            <img src={terra} alt='About' />
          </ItemAbout>
          <ItemProject to='/projects'>
            <img src={planetLava} alt='About' />
            <Text >Projects</Text>
          </ItemProject>
          <ItemEducation to='/education'>
            <img src={planetIce} alt='About' />
            <Text >Education</Text>
          </ItemEducation> */}

        </TemplateGrid>
      </Home>

    </motion.div>
  )
}
