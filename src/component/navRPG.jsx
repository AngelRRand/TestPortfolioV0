import React from 'react'
import styled from 'styled-components'
import logo from '../img/NavImg/rostro.png'
const NavRPG = () => {
    const Container = styled.nav`
    width: 100vw;
    border-top: 1px solid black;
    padding-top: 10px;
    padding-bottom: 5px;
    height: 15vh;
    background-color: black;
    color: white;
    `
    const Perfil = styled.img`
        position: absolute;
    `
  return (
    <Container>
        <Perfil src={logo}/>
    </Container>
  )
}

export default NavRPG