import React from 'react'
import styled from 'styled-components'

const NavRPG = () => {
    const Container = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100vw;
    border-top: 1px solid black;
    padding-top: 10px;
    padding-bottom: 5px;
    height: 15vh;
    `
  return (
    <Container>
        <h2>MAP</h2>
    </Container>
  )
}

export default NavRPG