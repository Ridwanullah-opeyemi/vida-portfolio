import { Route, Routes } from "react-router-dom"
import Home from "./page/home"
import Works from "./component/portfolio/potfolio"
import Nav from "./component/nav/nav"

function App() {

  return (
    <>
    <Nav/>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/myworks' element={<Works />} />
        </Routes>
    </>

  )
}

export default App
