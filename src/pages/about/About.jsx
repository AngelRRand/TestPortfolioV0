import React from 'react'
import granImagen from '../../img/cuarto96.gif'
import cafe from '../../img/cafe.gif'
import './About.css'
import { motion } from "framer-motion";
import CSS from './img/CSS.png'
import HTML from './img/HTML.png'
import JS from './img/JavaScript.png'
import REDUX from './img/Redux.png'
import REACT from './img/React.png'


const About = () => {


  const constraintsRef = {
    top: -230,
    left: -230,
    right: 230,
    bottom: 210,
  }
  return (
    <motion.div
      initial={{ y: 700 }}
      animate={{
        y: 0,
        transition: { duration: 2.5, type: "spring" },
      }}
      exit={{
        y: -500,
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
              x: 250
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
              x: 200
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
              x: 200
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
              x: -200
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
              x: -250
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
  )
}

export default About