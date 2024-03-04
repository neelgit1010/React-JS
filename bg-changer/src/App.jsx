import { useState } from "react"

function App() {
  const [mycolor,setmyColor] = useState('#212121');

  return (
    <div className="flex items-center w-full h-screen"
      style={
        {
          backgroundColor : mycolor
        }
      }
    >
      <div className="fixed  w-8 h-4/5 m-7 rounded-3xl bg-black">
        <div className="  w-6 h-6 rounded-full bg-red-600 my-2 mx-1 cursor-pointer" 
        onClick={() => setmyColor("red")}></div>
        <div className="  w-6 h-6 rounded-full bg-green-600 my-2 mx-1 cursor-pointer"
        onClick={() => setmyColor("green")}></div>
        <div className="  w-6 h-6 rounded-full bg-blue-600 my-2 mx-1 text-white cursor-pointer"
        onClick={() => setmyColor("blue")}></div>
        
      </div>
    </div>
  )
}

export default App
