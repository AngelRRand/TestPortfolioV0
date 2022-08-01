import React from 'react'
import styled from 'styled-components'

const NavRPG = () => {
    const Container = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100vw;
    border-top: 1px solid black;
    `
  return (
    <Container>
        <h1>MAP</h1>
    </Container>
  )
}

export default NavRPG