import React, { useState } from 'react'
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import './Navbar.css'

import Logo from './Logo.jsx'
import home from './NavImg/home.gif'
import cafe from './NavImg/cafe.gif'
import education from './NavImg/libro.gif'
import luna from './NavImg/Luna.gif'
import projects from './NavImg/Git.gif'
import prueba from './NavImg/prueba.png'
import { Link, NavLink } from 'react-router-dom';
import LogoAbout from './LogoAbout';
import LogoEducation from './Logo.Education';
import LogoProject from './LogoProject';
import LogoError from './LogoError';


const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 4rem;
  height: 4rem;
  
  &::before,
  &::after {
    content: "";
    background-image: url(${prueba});
    margin-top: 1rem;
    height: 5px;
    width: 2rem;
    position: absolute;
    top: 20px;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color:white;
  width:4.5rem;
  height:100vh;
  padding:1rem 0;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
  overflow:visible;
  position:relative;
  border-right: 3px solid black;
`;

const SlickBar = styled.ul`
  list-style: none;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color:white;
  border-radius:0px 30px 30px 0px;
  margin-top: 1rem;
  padding:1rem 0;
  position: absolute;
  top: 4rem;
  left: 0;
  border-right: 2px solid black;
  border-top: 2px solid black;
  border-bottom:2px solid black;
  width: ${(props) => (props.clicked ? "15rem" : "4.44rem")};
  transition:all 0.3s ease;
`;

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
const Text = styled.span`
  width: ${props => props.clicked ? "70%" : "0%"};
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`


const Nav = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  return (
    <nav>
      <>

        <div className='nav-up'>
        </div>
        <SidebarContainer>

            <Button clicked={click} onClick={() => handleClick()}>
              <div className='button-url'>
              </div>
            </Button>
            <div className='white '></div>
          <SlickBar clicked={click}>
            <Item to="/" className={(navData) => navData.isActive ? "active" : ""} onClick={() => setClick(false)}>
              <img src={home} alt='Home' />
              <Text clicked={click}>Home</Text>
            </Item>
            <Item to='/about' onClick={() => setClick(false)}>
              <img src={cafe} alt='About' />
              <Text clicked={click}>About</Text>
            </Item>
            <Item to='/education' onClick={() => setClick(false)}>
              <img src={education} alt='Education' />
              <Text clicked={click}>Education</Text>
            </Item>
            <Item to='projects' onClick={() => setClick(false)}>
              <img src={projects} alt='Projects' />
              <Text clicked={click}>Projects</Text>
            </Item>
          </SlickBar>
          <div className='white2 '></div>
        </SidebarContainer>
      </>



    </nav>
  )
}

export default Nav