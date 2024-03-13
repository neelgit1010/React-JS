import Navbar from "../../router-outdated/src/Components/Navbar"
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
      <h1 className=" text-center text-2xl">Welcome to react router</h1>
      <Outlet />
      </main>
    </>
  )
}

export default App
