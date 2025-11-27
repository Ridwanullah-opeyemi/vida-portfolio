import React, { useState } from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image7.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import orange from "../../assets/orange.png";

// 1. Project Data (Keep this structure)
const projects = [
  {
    id: 1,
    image: image1,
    title: "Food Delivery App 1",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 2,
    image: image2,
    title: "Food Delivery App 2",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 3,
    image: image3,
    title: "Food Delivery App 3",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 4,
    image: image4,
    title: "Food Delivery App 4",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 5,
    image: orange,
    title: "Food Delivery App 5",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 6,
    image: image5,
    title: "Food Delivery App 6",
    description: "where u can order and enjoyed fast food",
    link: "https://trown-delivery-wuqu.vercel.app",
  },
  {
    id: 7,
    image: image6,
    title: "Admin Panel",
    description: "A management interface for an application.",
    link: "https://adminpenel-seven.vercel.app/add",
  },
];


function Works() {
  const [flippedCardId, setFlippedCardId] = useState(null);
  
  // Display only the first 4 projects on the home page
  const displayedProjects = projects.slice(0, 4); 

  const toggleFlip = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };
  
  return (
    <section id='works'>
      <h2 className="worksTtle">My Portfolio</h2>
      <span className="worksDiscription">I take pride in paying attention to the smallest details and meticulously testing every edge case to deliver robust solutions.</span>
      <div className="worksimages">
        
        {displayedProjects.map((project) => (
          <div className='works_container' key={project.id}>
            <div 
              className={`working_inner_con flip ${flippedCardId === project.id ? " workcon_change" : ''}`} 
            >
              {/* Front Face */}
              <div className="work_font" onClick={() => toggleFlip(project.id)}>
                <img src={project.image} alt="" className="worksimg" />
              </div>
              
              {/* Back Face */}
              <div className="work_back" onClick={() => toggleFlip(project.id)}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.link} target='_blank'>
                  <button>open</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Change the button to a Link for navigation */}
      {projects.length > 4 && (
        <button className="worksbtn">
          {/* This will link to the full portfolio page */}
          <Link to={"/FullPortfolio"}>See More</Link> 
        </button>
      )}
    </section>
  );
}

export default Works;