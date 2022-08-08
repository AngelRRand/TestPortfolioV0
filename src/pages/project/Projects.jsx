import React from 'react'

const Projects = () => {

  const ProjectsContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `
  const PlanetContainer = styled.div`
    display: flex;
    width: 450px;
    height: 450px;
    border: none;
    box-shadow: none;
    overflow: hidden;
    img{
      width: 100vw;
      image-rendering: pixelated;
    }
    z-index: 1;
  `
  return (
    <div>
        <p>
            Hola gente esta es la Projects
        </p>

    </div>
  )
}

export default Projects