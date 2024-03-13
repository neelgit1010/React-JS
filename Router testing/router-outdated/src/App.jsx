import { Route, Routes } from "react-router-dom"
import About from './pages/About'
import Home  from './pages/Home'
import Contact from './pages/Contact'

import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
     <h1 className=" text-center text-2xl">Welcome to react router</h1>

     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
    </div>
  )
}

export default App
