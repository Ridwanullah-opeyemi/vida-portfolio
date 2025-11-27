import React from 'react'
import Intro from '../component/intro/intro.jsx'
import Skill from '../component/skill/skill.jsx'
import Works from '../component/portfolio/potfolio.jsx'
import Contact from '../component/contact/contact.jsx'
import Footer from '../component/footer/footer.jsx'


function Home() {
  return (
    <>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home