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
import home from '../../img/NavImg/home.gif'
import { Link, NavLink } from 'react-router-dom';

const Education = () => {



  const constraintsRef = {
    top: -230,
    left: -230,
    right: 230,
    bottom: 210,
  }
  const EducationContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
  const ContainerText = styled.div`
    display:flex;
    border:3px solid black;
    height: 100vh;
    width:15vw;
    align-items: center;
    background-color:black;
    color:white;
    justify-content: space-between;
  `
  const Item = styled(NavLink)`
  width: 9rem;
  cursor: pointer;
  display: flex;
  color: black;
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
    <EducationContainer>
      
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
      <motion.div
        initial={{ x: -1000 }}
        animate={{
          x: 0,
          transition: { duration: 2.5, type: "spring", delayChildren: 2.5 },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >

        <div className="presentation-about">
          <motion.div
            initial={{ y: -1000 }}
            animate={{
              y: 0,
              transition: { duration: 4.5, type: "spring" },
            }}
            exit={{
              x: -500,
              transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
            }}
          >
            <h3>My technologies</h3>
          </motion.div>

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
        initial={{ y: -1000 }}
        animate={{
          y: 0,
          transition: { duration: 4.5, type: "tween" },
        }}
        exit={{
          x: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >
        <ContainerText>
          <div>
            <h4>FrontEnd</h4>

          </div>

        </ContainerText>
      </motion.div>
    </EducationContainer>
  )
}

export default Education