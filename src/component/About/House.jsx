import React, { useState } from 'react'
import styled from 'styled-components';
import house from '../../img/160x90v2.png'


const House = () => {
  

  const ContainerHouse = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;
  `
  const BackGround = styled.img`
    width: 100vw;
    height: 85vh;
    image-rendering: pixelated;
    z-index: 10;
  `
  return (
    <ContainerHouse>
      <BackGround src={house} alt="" />
    </ContainerHouse>
  )
}

export default House