import React from 'react';
import styled from 'styled-components';
import TypeWriterEffect from 'react-typewriter-effect';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import AltVoz from '../../img/NavBotton/altavoz.png'
import logo from '../../img/NavBotton/PJprueba.gif'
import logoSinCasco from '../../img/NavBotton/PJpruebaSinCasco.gif'
import nutria from '../../img/NavBotton/nutria.gif'
import nutriaSinCasco from '../../img/NavBotton/nutriaSinCasco.gif'
import './nav.css'
const NavRPG = () => {

    const navigate = useNavigate()
    const sampleLocation = useLocation();
    const goBack = () => {
        navigate('/')
    }

    const Container = styled.nav`
        width: 100vw;
        border-top: 3px solid #ffffff;
        padding-top: 10px;
        padding-bottom: 5px;
        height: 15vh;
        background-color: #070707;
        justify-content: center;
        align-items: center;
        display: flex;
        color: #ebeceb;
        font-family: 'PF Tempesta Seven Condensed', sans-serif;
        font-weight: 200;
        image-rendering: pixelated;                            
        position: fixed;
        z-index: 100;
    `
    const Perfil = styled.div`
        position: absolute;
        bottom: 5px;
        image-rendering: pixelated;
        color: white;
        text-align: center;
        padding: 5px;
        left: 0px;
    `
    const PerfilNutrie = styled.div`
        position: absolute;
        bottom: 5px;
        image-rendering: pixelated;
        color: white;
        text-align: center;
        padding: 5px;
        right: 0px;
    `
    const PerfilImg = styled.img`
        width: 20vw;
        image-rendering: pixelated;
        border: 3px solid #ffffff;
        background-color: #070707;
    `
    const ContainerButtoms = styled.div`
        flex-direction: row;
        display: flex;
        width: 50vw;
        min-height: 10vh;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        justify-content: space-around;
        border: 1px solid white;
        border-radius: 10px;
        text-align: center;
        
    `
    const Buttom = styled.button`
        color: #000000;
        border: none;
        padding: 10px;
        text-align: center;
        background-color: white;
        font-size: 1.2rem;
        cursor: pointer;
    `
    const AltVOZ = styled.img`
    position: absolute;
        width: 80px;
        height: 80px;
        right: 25vw;
        bottom: 55%;
        image-rendering: pixelated;
    `
    return (
        <>
            <Container>
                <Perfil>
                    <PerfilImg src={sampleLocation.pathname.toString() === '/About/House' ? logoSinCasco : logo} />
                    <h2>Hori</h2>

                </Perfil>
                <ContainerButtoms>
                    <h4 className='animationText'>{sampleLocation.pathname.toString() === '/' ?

                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'PF Tempesta Seven Condensed',
                                color: '#fafafa',
                                fontWeight: 500,
                                fontSize: '1.3em',
                            }}
                            startDelay={1500}
                            cursorColor="#ececec"
                            multiText={[
                                'You are at home, you can visit the other views of the page following the map or cheating if you are a developer ;)',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={60}
                        />
                        :
                        sampleLocation.pathname.toString() === '/About' ?
                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'PF Tempesta Seven Condensed',
                                    color: '#ececec',
                                    fontWeight: 500,
                                    fontSize: '1.3em',
                                }}
                                startDelay={1500}
                                cursorColor="#ececec"
                                multiText={[
                                    'Its in my personal zone, my about... in it you can know more about me!',
                                ]}
                                multiTextDelay={1000}
                                typeSpeed={60}
                            />

                            :
                            sampleLocation.pathname.toString() === '/About/House' ?
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'PF Tempesta Seven Condensed',
                                        color: '#ececec',
                                        fontWeight: 500,
                                        fontSize: '1.5em',
                                        textAling: 'center'
                                    }}
                                    startDelay={1500}
                                    cursorColor="#ececec"
                                    multiText={[
                                        'This is the most personal area of ​​the web...',
                                        'Welcome to my house!!'
                                    ]}
                                    multiTextDelay={1500}
                                    typeSpeed={60}
                                />
                                :
                                sampleLocation.pathname.toString() === '/Education' ?

                                    <TypeWriterEffect
                                        textStyle={{
                                            fontFamily: 'PF Tempesta Seven Condensed',
                                            color: '#ececec',
                                            fontWeight: 500,
                                            fontSize: '1.3em',
                                        }}
                                        startDelay={1500}
                                        cursorColor="#ececec"
                                        multiText={[
                                            'As you can see, many of the technologies are oriented towards frontend development, but I dont frown on new experiences.',
                                        ]}
                                        multiTextDelay={1000}
                                        typeSpeed={60}
                                    />
                                    :
                                    sampleLocation.pathname.toString() === '/Projects' ?

                                        <TypeWriterEffect
                                            textStyle={{
                                                fontFamily: 'PF Tempesta Seven Condensed',
                                                color: '#ececec',
                                                fontWeight: 500,
                                                fontSize: '2em',
                                                textAling: 'center'
                                            }}
                                            startDelay={1000}
                                            cursorColor="#ececec"
                                            multiText={[
                                                'This area is a bit extensive! but here you can not only see my projects, but I also put a few of my most precious drawings :)'
                                            ]}
                                            multiTextDelay={1000}
                                            typeSpeed={60}
                                        />
                                        :
                                        <TypeWriterEffect
                                            textStyle={{
                                                fontFamily: 'PF Tempesta Seven Condensed',
                                                color: '#ececec',
                                                fontWeight: 500,
                                                fontSize: '2em',
                                                textAling: 'center'
                                            }}
                                            startDelay={1000}
                                            cursorColor="#ececec"
                                            multiText={[
                                                'Traveling....',
                                            ]}
                                            multiTextDelay={1000}
                                            typeSpeed={60}
                                        />
                                    }</h4>
                                    <AltVOZ src={AltVoz} alt="" />
                </ContainerButtoms>
                <Buttom onClick={() => goBack()}><p>Return?</p></Buttom>
                <PerfilNutrie>
                    <PerfilImg src={sampleLocation.pathname.toString() === '/About/House' ? nutriaSinCasco : nutria} />
                    <h2>Nutria</h2>
                </PerfilNutrie>
            </Container>

        </>
    )
}

export default NavRPG