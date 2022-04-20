import React from 'react'
import serpiente from '../../img/Home2.svg'
import './Home.css'



export const Home = () => {
  return (
    <div className="home">
      <div className="home-presentation">
        <div className="home-img">
          <img src={serpiente} alt="" className="serpiente" />
        </div>
        <div className="text-presentation">
          <h1>Welcome to my portfolio</h1>
          <p>
            My name is Horacio, full stack web developer. Specialized in the area of front end and animation
          </p>
          <br />
          <p >
            This website is designed for those who want to know more about my education, the projects that I have prepared and those that I will sell in the future. I hope you like it.
          </p>
        </div>
      </div>
    </div>
  )
}
