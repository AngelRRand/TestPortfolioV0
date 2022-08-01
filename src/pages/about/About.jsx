import React from 'react'
import granImagen from '../../img/cuarto96.gif'
import styled from 'styled-components';
import cafe from '../../img/cafe.gif'
import './About.css'
import { motion } from "framer-motion";
import CSS from './img/CSS.png'
import HTML from './img/HTML.png'
import JS from './img/JavaScript.png'
import REDUX from './img/Redux.png'
import REACT from './img/React.png'
import home from '../../component/navbar/NavImg/home.gif'
import { Link, NavLink } from 'react-router-dom';

const About = () => {


  const constraintsRef = {
    top: -230,
    left: -230,
    right: 230,
    bottom: 210,
  }
  const AboutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const Itemnull = styled.div`
  padding: 10px;
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
    <AboutContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 7.5, type: "spring" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}>
        <Itemnull to='/about'>
        <img src={home} alt='Home' />
          <Text >Home</Text>
        </Itemnull>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{
          x: 0,
          transition: { duration: 2.5, type: "spring" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">


          <div className='containerAnimated' ref={constraintsRef}>

            <div className="presentation-img">
              <img src={granImagen} alt="" className="imagen" />
              <img src={cafe} alt="" className="cafe-gif" />
            </div>
            <motion.div
              animate={{
                y: 0,
                transition: { duration: 6, type: "spring" },
                x: 200
              }}
              exit={{
                x: 100,
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
              }}
              className='movimiento' drag dragConstraints={constraintsRef}>
              <img className='icon' src={CSS} alt="" srcset="" />
            </motion.div
            >
            <motion.div
              animate={{
                y: 150,
                transition: { duration: 6, type: "spring" },
                x: 150
              }}
              exit={{
                x: 100,
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
              }}
              className='movimiento' drag dragConstraints={constraintsRef}>
              <img className='icon' src={HTML} alt="" srcset="" />
            </motion.div >
            <motion.div
              animate={{
                y: -150,
                transition: { duration: 6, type: "spring" },
                x: 150
              }}
              exit={{
                x: 100,
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
              }}
              className='movimiento' drag dragConstraints={constraintsRef}>
              <img className='icon' src={JS} alt="" srcset="" />
            </motion.div>
            <motion.div
              animate={{
                y: -150,
                transition: { duration: 6, type: "spring" },
                x: -150
              }}
              exit={{
                x: 100,
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
              }}
              className='movimiento' drag dragConstraints={constraintsRef}>
              <img className='icon' src={REDUX} alt="" srcset="" />
            </motion.div>
            <motion.div
              animate={{
                y: 0,
                transition: { duration: 6, type: "spring" },
                x: -200
              }}
              exit={{
                x: 100,
                y: -500,
                transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
              }}
              className='movimiento' drag dragConstraints={constraintsRef}>
              <img className='icon' src={REACT} alt="" srcset="" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 7.5, type: "spring" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}>
        <Item to='/'>
          <img src={home} alt='Home' />
          <Text >Home</Text>
        </Item>
      </motion.div>
    </AboutContainer>
  )
}

export default About