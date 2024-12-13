import toast from "react-hot-toast"
import { FaCopy } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ViewPaste = () => {
  const {id} = useParams()
  const pastes = useSelector(state => state.paste.pastes)

  const paste = pastes.find(p => p._id === id)
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      toast.success("Copied to clipboard!");
    })
    .catch((err) => {
      toast.error("Failed to copy!");
      console.error("Error copying to clipboard:", err);
    });
  }

  return (
    <div className="w-full p-4 h-screen sm:p-16 text-white overflow-y-scroll">
      <div className="flex justify-between">
        <h1 className="text-4xl bg-white text-black px-3 py-2 font-bold w-full">{paste.title}</h1>
        <p className="bg-white text-black px-3 py-2 text-xl outline-none" onClick={() => handleCopy(paste.textContent)}><FaCopy /></p>
      </div>   
      <p className="text-xl p-4 sm:p-4 border border-white">{paste.textContent}</p> 
    </div>
  )
}

export default ViewPaste