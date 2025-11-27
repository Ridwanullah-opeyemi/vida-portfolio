import React from 'react';
import './skill.css';
import ux from "../../assets/ui.jpg";
import web from "../../assets/website.jpg";
import app from "../../assets/images (1).png";


function Skill() {
    return (
        <section id='skills'>
            <span className="skillsTitle">What I Do</span>
            
            {/* --- Main Skill Description Updated --- */}
            <span className="skillDiscribtion">
                I'm a passionate **Full-Stack Developer** with expertise in **JavaScript, React, and Node.js**. I specialize in crafting scalable, high-performance applications from the ground up. I thrive on solving complex technical challenges, writing clean, efficient code, and bringing innovative concepts to life, blending technical precision with a keen eye for user-centered design.
            </span>
            {/* -------------------------------------- */}
            
            <div className="sikksbars">
                
                {/* --- Skill Bar 1: UI/UX Design Updated --- */}
                <div className="skillbar">
                    <img src={ux} className='skillbarimg' alt="UI/UX Design icon" />
                    <div className="skillbartext">
                        <h2>UI/UX Design 🎨</h2>
                        <p>
                            I design intuitive and engaging user interfaces. This includes wireframing, prototyping, and ensuring a seamless user experience (UX) that aligns with both business goals and user needs.
                        </p>
                    </div>
                </div>
                {/* ----------------------------------------- */}
                
                {/* --- Skill Bar 2: Web Development Updated --- */}
                <div className="skillbar">
                    <img src={web} className='skillbarimg' alt="Website Design icon" />
                    <div className="skillbartext">
                        <h2>Full-Stack Web Development 💻</h2>
                        <p>
                            Specializing in **React** (Frontend) and **Node.js/Express** (Backend), I build responsive, modern, and high-performance websites and web applications with robust database integration.
                        </p>
                    </div>
                </div>
                {/* ------------------------------------------ */}
                
                {/* --- Skill Bar 3: App Development Updated --- */}
                <div className="skillbar">
                    <img src={app} className='skillbarimg' alt="App Design icon" />
                    <div className="skillbartext">
                        <h2>Mobile App Development (React Native) 📱</h2>
                        <p>
                            I develop cross-platform mobile applications using **React Native**. This allows me to deliver high-quality, native-feeling apps for both iOS and Android from a single codebase.
                        </p>
                    </div>
                </div>
                {/* ------------------------------------------ */}
            </div>
        </section>
    );
}

export default Skill;