import React from 'react'
import { useRef } from "react";
import granImagen from '../../img/cuarto2.gif'
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
    <div className="about">
      <div className="presentation-about">


        <motion.div className='containerAnimated' ref={constraintsRef}>

          <div className="presentation-img">
            <img src={granImagen} alt="" className="imagen" />
            <img src={cafe} alt="" className="cafe-gif" />
          </div>
          <motion.div className='movimiento' drag dragConstraints={constraintsRef}>
            <img src={CSS} alt="" srcset="" />
          </motion.div>
          <motion.div className='movimiento' drag dragConstraints={constraintsRef}>
            <img src={HTML} alt="" srcset="" />
          </motion.div>
          <motion.div className='movimiento' drag dragConstraints={constraintsRef}>
            <img src={JS} alt="" srcset="" />
          </motion.div>
          <motion.div className='movimiento' drag dragConstraints={constraintsRef}>
            <img src={REDUX} alt="" srcset="" />
          </motion.div>
          <motion.div className='movimiento' drag dragConstraints={constraintsRef}>
            <img src={REACT} alt="" srcset="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About