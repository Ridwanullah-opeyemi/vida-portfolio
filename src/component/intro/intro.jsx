import React from 'react';
import './intro.css';
import vida from "../../assets/vida4.jpg";
import hire from "../../assets/hire02.jpeg";
import { Link } from 'react-router-dom';

function Intro() {
  const phoneNumber = "+2347041763688";
  
  return (
    <section id="into">
      <div className='into'>

      <div className="introcontent">
        <span className='hello'>Hello,</span>
        <span className="inroduction">
          I'm <span className="introname">Ridwanullah (VIDA)</span><br />Full-Stack Developer
        </span>
        <p className="intopara">
          I am a skilled **Full-Stack Developer** proficient in **JavaScript, React, and Node.js**. <br />
          I deliver clean, efficient code and love solving complex problems. <br /> I also have a passion for art and design. 
          Contact me at: ¨{phoneNumber}¨.
        </p>
        
        {/* Link updated to use the tel: protocol for direct calling */}
        <Link to={"/contact"}>
          <button className="btn">
            <img src={hire} alt="Hire me icon" className='btnimg' />
            Hire Me
          </button>
        </Link>
        
      </div>
      <img className='bg' src={vida} alt="Profile background image" />
      </div>

    </section>
  );
}

export default Intro;