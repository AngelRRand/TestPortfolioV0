import React from 'react'
import education from '../../img/NavImg/libro.gif'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
const About = () => {


  const Item = styled(NavLink)`
  width: 9rem;
  padding: 10px;
  cursor: pointer;
  display: flex;
  color: #000000;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.2s ease;
  background: transparent;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img{
    background: transparent;
    width: 5rem;
  }
  &:hover{
    transform: scale(1.05);
  }
  
`
  const Text = styled.span`
  padding-top: 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
`


  return (
    <Item to='/education'>
      <img src={education} alt='Education' />
      <Text >Education</Text>
    </Item>
  )
}

export default About