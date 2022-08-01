import React from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import cafe from '../../component/navbar/NavImg/cafe.gif'
import education from '../../component/navbar/NavImg/libro.gif'
/*import projects from '../../NavImg/Git.gif'
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
    height: 100vh;
    padding: 1rem;
    text-align: center;
  `
  const Item = styled(NavLink)`
  padding: 10px;
  cursor: pointer;
  display: flex;
  color: black;
  text-decoration: none;
  image-rendering: pixelated;
  transition: all 0.2s ease;
  background: transparent;
  flex-direction: column;
  img{
    background: transparent;
  }
  &:hover{
    transform: scale(1.05);
  }
  
`
  const Text = styled.span`
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: transparent;
  text-align: center;
`
  return (
    <Home className="home">
      <Item to='/about'>
        <img src={cafe} alt='About' />
        <Text >About</Text>
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
      <Item to='/about'>
        <img src={education} alt='About' />
        <Text >About</Text>
      </Item>
    </Home>
  )
}
