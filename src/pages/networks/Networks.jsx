import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import planet from '../../img/Planet/planetNetZoom.png';
import planetRock from '../../img/Planet/planetNetZoomRock.png';
import señal from '../../img/NavImg/Señal.gif';

const Networks = () => {
  const rotate = keyframes`
  0%
  {
    
    transform: translateY( 0px );
  }
  10%
  {
    
    transform: translateY( 1pxpx );
  }
  20%
  {
    
    transform: translateY( 2px );
  }
  30%
  {
    
    transform: translateY( 3px );
  }
  40%
  {
    
    transform: translateY( 4px );
  }
  50%
  {
    transform: translateX( 5px );
    transform: translateY( 5px );
  }
  60%
  {
    
    transform: translateY( 4px );
  }
  70%
  {
    
    transform: translateY( 3px );
  }
  80%
  {
    
    transform: translateY( 2px );
  }
  90%
  {
    
    transform: translateY( 1px );
  }
  100%
  {
    
    transform: translateY( 0px );
  }
`;
  const NetworkContainer = styled.div`
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
    z-index: 10;
    color: white;
    text-align: center;
    color:white;
    font-family: 'PF Tempesta Seven Condensed', sans-serif;
  
  img{
    position: absolute;
    background: transparent;
    width: 100%;
    height: 100%;
    left: 0;
    image-rendering: pixelated;
    z-index: 60;
  }
`
  const Rock = styled.img`
    animation: ${rotate} 5s linear infinite;
  `
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { delay: 0.5, duration: 1.7, type: "spring", },
      }}
      exit={{
        x: "-100vh",
        transition: { delay: 1.5, ease: 'easeInOut' },
      }}
    >
      <NetworkContainer>
        <ContainerIMG>
          <h3>Networks</h3>
          <img src={planet} alt="" />
          <Rock src={planetRock} className='pointer' alt='About' />
        </ContainerIMG>
      </NetworkContainer>
    </motion.div>
  )
}

export default Networks