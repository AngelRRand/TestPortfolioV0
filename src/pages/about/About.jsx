import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
import señal from '../../img/NavImg/Señal.gif'
const About = () => {

  const [transition, setTransition] = useState();


  const Pages = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  h1{
    font-size: calc(2rem + 2vw);
  }
`
  const AboutContainer = styled.div`
    overflow: hidden;
    height: 85vh;
    width: 85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    `
  const ContainerIMG = styled.div`
  
    position: absolute;
    width: 35vw;
    height: 65vh;
    image-rendering: pixelated;
    object-fit: contain;
    z-index: 10;
    color: white;
    text-align: center;
    color:white;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
    img{
      
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      z-index: 10;
    }
  `
  const TempladeGrid = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    width: 35vw;
    height: 65vh;
    grid-template-columns: repeat(20, 2vw);
    grid-template-rows: repeat(30, 2vh);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `
  const Me = styled.div`
    grid-area: 30 / 7 / 31 / 9;
    display: flex;
    text-decoration: none;
    image-rendering: pixelated;
    transition: all 0.5s ease;
    background: transparent;
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 99;
   `
  const Spain = styled.div`
   grid-area: 6 / 13 / 6 / 14;;
   display: flex;
   text-decoration: none;
   image-rendering: pixelated;
   transition: all 0.5s ease;
   background: transparent;
   flex-direction: column;
   text-align: center;
   align-items: center;
   z-index: 99;
  `
  const CR = styled.div`
  grid-area: 18 / 5 / 22 / 7;
  display: flex;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.5s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  z-index: 99;
 `
  const Text = styled.span`
   position: absolute;
   font-size: calc(13px + 0.4vw);
   color: #ffffff;
   text-shadow: 0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5);
   transition: all 0.3s ease;
   background: transparent;
   text-align: center;
   font-family: 'PF Tempesta Seven', sans-serif;
   font-family: 'PF Tempesta Seven Extended', sans-serif;
   font-family: 'PF Tempesta Seven Condensed', sans-serif;
   font-family: 'PF Tempesta Seven Compressed', sans-serif;
   image-rendering: pixelated;
   z-index: 90; 
 `

  var transitions = {
    me: {
      scale: 7,
      x: 350,
      y: -1150,
      transition: { duration: 6.5, type: "spring", bounce: 0 },
    },
    dream: {
      scale: 7,
      x: 450,
      y: -950,
      transition: { duration: 6.5, type: "spring", bounce: 0 },
    },
    dream: {
      scale: 7,
      x: 450,
      y: -950,
      transition: { duration: 6.5, type: "spring", bounce: 0 },
    }
  }
  
  return (
    <Pages>

      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { delay: 0.5, duration: 1.7, type: "spring", },
        }}
        exit={
          transition
        }

      >
        <AboutContainer >


          <ContainerIMG>
            <h3>About</h3>
            <img src={planet} alt="" />
          </ContainerIMG>
          <TempladeGrid>

            <Me onClick={() => setTransition(transitions.me)}>
              <Link className='pointer' to='/About/House'>
                <Text >House</Text>
                <img src={señal} alt="" />
              </Link>
            </Me>

          <Spain onClick={() => setTransition(transitions.dream)}>
            <Link className='pointer' to='/About/Dream'>
              <Text >Dream</Text>
              <img src={señal} alt="" />
            </Link>
          </Spain>

          <CR onClick={() => setTransition(transitions.dream)}>
            <Link className='pointer' to='/About/Art'>
              <Text >Art</Text>
              <img src={señal} alt="" />
            </Link>
          </CR>

          </TempladeGrid>

        </AboutContainer>
      </motion.div>

    </Pages>
  )
}

export default About