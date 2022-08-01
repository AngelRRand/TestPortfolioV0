import React from 'react'
import styled from 'styled-components'
import logo from '../img/NavImg/rostro.png'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
const NavRPG = () => {
    const navigate = useNavigate()
    const sampleLocation = useLocation();
    console.log(sampleLocation.pathname)
    const goBack = () => {
        navigate.goBack('/about')
    }
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
    const ContainerButtoms = styled.div`
        flex-direction: row;
        display: flex;
        width: 400px;
        justify-content: space-around;
    `
    const Buttom = styled.button`
        color: white;
        border: none;
        padding: 10px;
        text-align: center;
        background-color: transparent;
        font-size: 1.2rem;
        cursor: pointer;
    `

    return (
        <>
            <Perfil>
                <PerfilImg src={logo} />
                <h1>Hori</h1>

            </Perfil>
            <Container>
                <ContainerButtoms>
                <h4>{sampleLocation.pathname.toString() === '/' ?
                    'You are at home, you can visit the other views of the page following the map or cheating if you are a dev ;)' :
                    sampleLocation.pathname.toString() === '/about'?
                    'Its in my personal zone, my about... in it you can know more about me!':
                    sampleLocation.pathname.toString() === '/education'?
                    <Buttom onClick={() => goBack()}><p>Return?</p></Buttom>:
                    'no hay mensaje'
                }</h4>
                    {/* {
                        sampleLocation.pathname.toString() === '/education' ?
                        
                            <>
                                <Buttom onClick={() => goBack()}><p>Volver?</p></Buttom>
                            </>
                            :
                            ''
                    } */}

                </ContainerButtoms>
            </Container>

        </>
    )
}

export default NavRPG