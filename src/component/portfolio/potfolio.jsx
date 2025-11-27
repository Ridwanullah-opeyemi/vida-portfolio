import React from 'react'
import './portfolio.css'
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image7.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"
import orange from "../../assets/orange.png"
import { Link } from 'react-router-dom'


function Works() {
  return (
    <section id='works'>
        <h2 className="worksTtle">My Portfolio</h2>
        <span className="worksDiscription">I take pride in paying attention to the smallet details and</span>
        <div className="worksimages">
            <img src={image1} alt="" className="worksimg" />
            <img src={image2} alt="" className="worksimg" />
            <img src={image3} alt="" className="worksimg" />
            <img src={image4} alt="" className="worksimg" />
            <img src={image5} alt="" className="worksimg" />
            <img src={image6} alt="" className="worksimg" />
            <div>
              <Link to={"https://trown-delivery-wuqu.vercel.app"}></Link>
              <img src={orange} alt="" className="worksimg" />

            </div>
        </div>
        <button className="worksbtn"><Link to={"/myworks"}>See More</Link></button>
    </section>
  )
}

export default Works