import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import background from '../../img/Planet/Terra/Dream/Dream.png'
import backgroundGif from '../../img/Planet/Terra/Dream/Dream.png'
import TransitionTerra from '../Nav/TransitionTerra';
import Background from '../Nav/Background';
const Dream = () => {

    const Container = styled.div`
    overflow:hidden;
    width: 100vw;
    height: 85vh;
  `

    return (
        <Container>
            <Background
                bg={background}
                bgGif={backgroundGif}
            />

            <TransitionTerra />
        </Container>
    )
}

export default Dream