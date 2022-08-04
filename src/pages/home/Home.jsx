import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import terra from '../../img/NavImg/tierra.png'
import planetIce from '../../img/NavImg/planetIce.png'
import planetLava from '../../img/NavImg/planetLava.png'
import Galaxy from '../../img/galaxy.png'
import señales from '../../img/señales.gif'
export const Home = () => {
  const Home = styled.div`
    display: flex;
    width: 95vw;
    height: 240vh;
    align-items:center;
    justify-content: center;
    overflow: hidden;
    
  `
  const Container = styled.div`
    flex-direction: column;
    width: 70vw;
    padding: 1rem;
    text-align: center;
  `
  const ItemAbout = styled(NavLink)`
  bottom: 234px;
  right: 582px;
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
  top: 50px;
  left: 370px;
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
  font-size: 1.3rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
  font-family: 'PF Tempesta Seven', sans-serif;
font-family: 'PF Tempesta Seven Extended', sans-serif;
font-family: 'PF Tempesta Seven Condensed', sans-serif;
font-family: 'PF Tempesta Seven Compressed', sans-serif;
image-rendering: pixelated;  
`
  const IMG = styled.img`
  width: 90vw;
  margin-top: 60vh;
  height: 150vh;
  image-rendering: pixelated;
  object-fit: contain;
  z-index: 10;
`
  const SeñalesAbolute = styled.img`
position: absolute;
  width: 90vw;
  margin-top: 30vh;
  height: 150vh;
  image-rendering: pixelated;
  object-fit: contain;
  z-index: 11;
`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 4.5, type: "spring" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}>

      <Home className="home">

        <IMG src={Galaxy} alt="" />
        <SeñalesAbolute src={señales} />
        <ItemAbout to='/about'>
          <img src={terra} alt='About' />
          <div>

            <Text>About</Text>
          </div>
        </ItemAbout>
        <ItemProject to='/projects'>
          <img src={planetLava} alt='About' />
          <Text >Projects</Text>
        </ItemProject>

        <ItemEducation to='/education'>
          <img src={planetIce} alt='About' />
          <Text >Education</Text>
        </ItemEducation>
      </Home>

    </motion.div>
  )
}
