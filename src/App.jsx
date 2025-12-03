import { Route, Routes } from "react-router-dom"
import Home from "./page/home"
import Nav from "./component/nav/nav"
import FullPortfolio from "./component/portfolio/works"
import Scoll from "./component/scollingUp/scoll"
import Contact from "./component/contact/contact"
import Footer from "./component/footer/footer"

function App() {

  return (
    <>
      <Nav />
      <Scoll />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FullPortfolio' element={<FullPortfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App
