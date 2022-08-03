import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import CSS from '../../img/imgTecnologis/CSS.png'
import HTML from '../../img/imgTecnologis/HTML.png'
import JS from '../../img/imgTecnologis/JavaScript.png'
import REDUX from '../../img/imgTecnologis/Redux.png'
import REACT from '../../img/imgTecnologis/React.png'
const EducationIcons = () => {
    const constraintsRef = {
        top: -230,
        left: -250,
        right: 250,
        bottom: 210,
      }
    const Icon = styled.img`
    width: 3.5rem;
  
  `
    return (
        <>
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
                <Icon className='icon' src={CSS} alt="" />

            </motion.div>
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
                <Icon className='icon' src={HTML} alt="" />
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
                <Icon className='icon' src={JS} alt="" />
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
                <Icon className='icon' src={REDUX} alt="" />
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
                <Icon className='icon' src={REACT} alt="" />
            </motion.div>
        </>
    )
}

export default EducationIcons