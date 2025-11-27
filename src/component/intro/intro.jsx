import React from 'react'
import './intro.css'
import vida from "../../assets/vida4.jpg"
import hire from "../../assets/hire02.jpeg"
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <section id="into">
        <div className="introcontent">
            <span className='hello'>Hello,</span>
            <span className="inroduction">I'm <span className="introname">Vida</span><br />Website Designer</span>
            <p className="intopara">I am a skilled developer, proficient in JavaScript, React, and <br /> Node.js with a passion for coding and art drawing. </p>
            <Link ><button className="btn"><img src={hire} alt="" className='btnimg' />hire me</button></Link>
        </div>
        <img className='bg' src={vida} alt="" />
    </section>
  )
}

export default Intro