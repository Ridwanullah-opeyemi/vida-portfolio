import React, { useState } from 'react'
import "./nav.css";
import R from "../../assets/R.jpeg"
import contact from "../../assets/contact.jpeg"
import { Link } from 'react-router-dom';
import menu from "../../assets/menu.png"


function Nav() {
  const [showmenu,setShowmenu] = useState(false)
  return (
    <>
      <nav className='navber'>
        <Link to={"/"}><img className='logo' src={R} alt="" /></Link>
        
        <ul className='desktopmemu'>
          <a href="#into" activeClass="active" className='desktopmenulistitem'>Home</a>
          <a href="#skills" className='desktopmenulistitem' >About</a>
          <a className='desktopmenulistitem' href="#works">Portfolio</a>
          <a className='desktopmenulistitem' href="#client">Client</a>
        </ul>
        <button className='desktopmemubuttom'>
          <Link to={'/contact'}></Link><img src={contact} className='logocontact' alt="" />
          Contact me
        </button>
        <img className='mobmenu' src={menu} onClick={()=>setShowmenu(!showmenu)} alt="" />
        <ul className='navmenu' style={{display: showmenu ? "flex" : "none"}}>
          <a href="#into" activeClass="active" className='listitem' onClick={()=>setShowmenu(false)} offset={100}>Home</a>
          <a href="#skills" className='listitem' onClick={()=>setShowmenu(false)} >About</a>
          <a className='listitem' onClick={()=>setShowmenu(false)} href="#works">Portfolio</a>
          <a className='listitem' onClick={()=>setShowmenu(false)} href="#client">Client</a>
        </ul>
      </nav>
    </>
  )
}

export default Nav