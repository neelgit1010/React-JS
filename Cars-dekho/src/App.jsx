import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import Background from "./Components/Background";
import Cars from "./Components/Cars";

// Components
import Navbar from "./Components/Navbar";

const App = () => {

  const [carCount, setCarCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    if (!playStatus) {
      setInterval(() => {
        setCarCount((count) => count === 2 ? 0 : (count + 1));
      }, 3000);
    }
  }, [])

  const carData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into", text2: "your passions" }
  ]
  return (

    <div>

      <header className=" flex justify-between items-center">
        <h1 className=" text-white font-bold text-3xl ml-6">Cars Dekho</h1>
        <Navbar />
      </header>

      <Background
        playStatus={playStatus}
        carCount={carCount}
      />

      <Cars
        setPlayStatus={setPlayStatus}
        carData={carData}
        carCount={carCount}
        playStatus={playStatus}
        setCarCount={setCarCount} />
      {/* <Outlet/> */}

    </div>
  )
}

export default App