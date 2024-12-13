import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaCopy, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePaste } from "../features/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const PasteCard = ({id, title, textContent, createdAt}) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletePaste(id))
  }

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
    <div className="mt-4 rounded-md bg-gray-700 p-4">
      <h2>{title}</h2>
      <p>{textContent}</p>

      <div className="flex flex-col md:justify-end">
        <div className="flex gap-2 mt-4 justify-end mr-2">
        <button className="bg-white text-black px-3 py-2 rounded-md"><Link to={`/?pasteId=${id}`}><CiEdit /></Link></button>
        <button className="bg-white text-black px-3 py-2 rounded-md" onClick={() => handleDelete(id)}><MdDelete /></button>
        <button className="bg-white text-black px-3 py-2 rounded-md" onClick={() => handleCopy(textContent)}><FaCopy /></button>
        <button className="bg-white text-black px-3 py-2 rounded-md"><Link to={`/pastes/${id}`}><FaEye /></Link></button>
        </div>
        <p className="text-center mt-2 sm:mr-1 text-green-400 font-semibold sm:text-right">{createdAt}</p>
      </div>
    </div>
  )
}

export default PasteCard