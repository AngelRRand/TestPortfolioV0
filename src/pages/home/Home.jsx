import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import estrellas from '../../img/estrellas.gif'
import cafe from '../../img/NavImg/tierra.png'
import projects from '../../img/NavImg/libro.gif'
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
  transition: all 1.5s linear;
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
transition: all 3s ease;
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

  const IMGAbolute = styled.img`
  width: 95vw;
  margin-top: 60vh;
  image-rendering: pixelated;
  height: 180vh;
  position: absolute;
  z-index: 1;
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

        {/* <Item to='/about'>
        <img src={cafe} alt='About' />
        <Text>About</Text>
      </Item>
      <Container>
        <h1>Welcome to my portfolio</h1>
        <p>
          My name is Horacio, full stack web developer. Specialized in the area of front end and animation
        </p>
        <br />
        <p >
          This website is designed for those who want to know more about my education, the projects that I have prepared and those that I will sell in the future. I hope you like it.
        </p>
        <div>
          <h4>Map</h4>
        </div>
        <div>

        </div>
      </Container>
      
      <Item to='/projects'>
        <img src={projects} alt='About' />
        <Text >Projects</Text>
      </Item> */}
        <IMG src={Galaxy} alt="" />
        <IMGAbolute src={estrellas} />
        <SeñalesAbolute src={señales} />
        <ItemAbout to='/about'>
          <img src={cafe} alt='About' />
          <div>

            <Text>About</Text>
          </div>
        </ItemAbout>
        <ItemProject to='/projects'>
          <img src={projects} alt='About' />
          <Text >Projects</Text>
        </ItemProject>
      </Home>

    </motion.div>
  )
}
