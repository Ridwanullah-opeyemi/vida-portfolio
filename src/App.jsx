import { Route, Routes } from "react-router-dom"
import Home from "./page/home"
import Nav from "./component/nav/nav"
import FullPortfolio from "./component/portfolio/works"

function App() {

  return (
    <>
    <Nav/>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/FullPortfolio' element={<FullPortfolio />} />
        </Routes>
    </>

  )
}

export default App
