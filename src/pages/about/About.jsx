import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
const About = () => {


  const AboutContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    `
  const ContainerIMG = styled.div`
    position: absolute;
    width: 450px;
    height: 450px;
    object-fit: cover;
    img{
      width:100%;
      image-rendering: pixelated;
    }
  `
  const TempladeGrid = styled.div`
  display: grid;
  width: 60vw;
  height:  70vh;
  grid-template-columns: repeat(10, 4vw);
  grid-template-rows: repeat(30, 6vh);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  `

  return (
    <AboutContainer>



      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 2.5, type: "spring", delayChildren: 10.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">
          <h3>About</h3>

            <ContainerIMG>
              <img src={planet} alt="" />
            </ContainerIMG>
            <TempladeGrid>

            </TempladeGrid>

        </div>
      </motion.div>


      <motion.div
        initial={{ y: 1000 }}
        animate={{
          y: 0,
          transition: { duration: 2.5, type: "spring" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

      </motion.div>
    </AboutContainer>
  )
}

export default About