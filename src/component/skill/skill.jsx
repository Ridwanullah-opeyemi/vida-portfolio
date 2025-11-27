import React from 'react'
import './skill.css'
import ux from "../../assets/ui.jpg"
import web from "../../assets/website.jpg"
import app from "../../assets/images (1).png"


function Skill() {
    return (
        <section id='skills'>
            <span className="skillsTitle">What I do</span>
            <span className="skillDiscribtion">I am a highly motivated developer with expertiese in Javascript, React,and Node.js. i craft clean, efficient code and solve complex problems with ease.Collaborative and adaptable, i'm passionate about innovtion and learning,with a keen eye for detail and a drive for excellence in front-endand back-end development, and i actually draw inspiration from art.</span>
            <div className="sikksbars">
                <div className="skillbar">
                    <img src={ux} className='skillbarimg' alt="" />
                    <div className="skillbartext">
                        <h2>UI/UX design</h2>
                        <p>I am a highly motivated developer with expertiese in Javascript, React,and Node.js.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={web} className='skillbarimg' alt="" />
                    <div className="skillbartext">
                        <h2>Website design</h2>
                        <p>I am a highly motivated developer with expertiese in Javascript, React,and Node.js.</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={app


                    } className='skillbarimg' alt="" />
                    <div className="skillbartext">
                        <h2>App design</h2>
                        <p>I am a highly motivated developer with expertiese in Javascript, React,and Node.js.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill