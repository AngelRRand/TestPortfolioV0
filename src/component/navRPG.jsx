import React from 'react'
import styled from 'styled-components'
import logo from '../img/NavImg/rostro.png'
const NavRPG = () => {
    const Container = styled.nav`
    width: 100vw;
    border-top: 1px solid black;
    padding-top: 10px;
    padding-bottom: 5px;
    height: 15vh;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    `
    const Perfil = styled.div`
        position: absolute;
        bottom: 5px;
        image-rendering: pixelated;
        color: white;
        text-align: center;
        padding: 5px;
    `
    const PerfilImg = styled.img`
        width: 200px;
        image-rendering: pixelated;
    `
    return (
        <>
            <Perfil>
                <PerfilImg src={logo} />
                <h1>Hori</h1>

            </Perfil>
            <Container>
                <div>
                    <p>holaa</p>
                </div>
            </Container>

        </>
    )
}

export default NavRPG