import React from 'react'
import styled from 'styled-components'
import logo from "./NavImg/logo.png"
import dialog from "../../img/close.png"
const LogoHome = styled.div`
    position: relative;

`
const Logo = () => {
  return (
    <LogoHome>
      <img src={dialog} alt="" className='dialog' />
      <img src={logo} alt="logo" />
    </LogoHome>
  )
}

export default Logo