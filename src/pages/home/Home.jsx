import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import cafe from '../../img/cafe.gif'/* 
import education from '../../NavImg/libro.gif'
import projects from '../../NavImg/Git.gif'
import prueba from '../../NavImg/prueba.png' */
export const Home = () => {
  const Home = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
  `
  const Container = styled.div`
    flex-direction: column;
    width: 60vw;
  `
  const Item = styled(NavLink)`
  width: 100%;
  padding: 1.3rem 0;
  cursor: pointer;
  display: flex;
  color: black;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.2s ease;
  background: transparent;
  img{
    background: transparent;
  }
  &:hover{
    transform: scale(1.05);
  }
`
  return (
    <Home className="home">
      <Item >
        <img src={cafe} alt='About' />
        <span >About</span>
      </Item>
      <Container className="text-presentation">
        <h1>Welcome to my portfolio</h1>
        <p>
          My name is Horacio, full stack web developer. Specialized in the area of front end and animation
        </p>
        <br />
        <p >
          This website is designed for those who want to know more about my education, the projects that I have prepared and those that I will sell in the future. I hope you like it.
        </p>
      </Container>
      <h1>a</h1>
    </Home>
  )
}
