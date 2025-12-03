import React from 'react'
import Intro from '../component/intro/intro.jsx'
import Skill from '../component/skill/skill.jsx'
import Contact from '../component/contact/contact.jsx'
import Works from '../component/portfolio/potfolio.jsx'


function Home() {
  return (
    <>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
    </>
  )
}

export default Home