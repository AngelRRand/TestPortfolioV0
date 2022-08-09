import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/PlanetZOOM.png'
const House = () => {
  const AboutContainer = styled.div`
    overflow: hidden;
    height: 85vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    `
  const ContainerIMG = styled.div`
  
    width: 35vw;
    height: 65vh;
    image-rendering: pixelated;
    object-fit: contain;
    z-index: 10;
    color: white;
    text-align: center;
    color:white;
    font-family: 'PF Tempesta Seven', sans-serif;
    font-family: 'PF Tempesta Seven Extended', sans-serif;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
    font-family: 'PF Tempesta Seven Compressed', sans-serif;
    img{
      
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      z-index: 10;
    }
  `
  const [show, setShow] = useState(false);
  return (
    <AboutContainer>
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: 4,
          x: 200,
          y: -650,
          display: 0,
          transition: { duration: 6.5, type: "spring", },
        }}
      >
        <ContainerIMG>
          <h3>About</h3>
          <img src={planet} alt="" />
        </ContainerIMG>
      </motion.div>
    </AboutContainer>
  )
}

export default House