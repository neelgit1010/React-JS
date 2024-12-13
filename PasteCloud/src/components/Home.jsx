import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { addPaste, updatePaste } from "../features/pasteSlice"
import toast from "react-hot-toast"

const Home = () => {

  const [title, setTitle] = useState('')
  const [textContent, setTextContent] = useState('')

  const [params, setParams] = useSearchParams()
  const pasteId = params.get('pasteId')
  const dispatch = useDispatch()

  const allPastes = useSelector(state => state.paste.pastes)

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find(p => p._id === pasteId)
      setTitle(paste.title)
      setTextContent(paste.textContent)
    }
  }, [pasteId])

  const handleCreatePaste = () => {

    if(!title || !textContent) {
      toast.error('All fields are required')
      return
    }

    const allPastes = JSON.parse(localStorage.getItem('pastes')) || []
    if(allPastes.some(paste => paste.title === title)){
      toast.error('Paste with same title already exists')
      return
    }

    const data = {
      title,
      textContent,
      _id: pasteId || Date.now().toString(30),
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }

   if(pasteId) {
    //update paste
      dispatch(updatePaste(data))
   }else{
    //create paste
    dispatch(addPaste(data))
   }

   setTitle('')
   setTextContent('')
   setParams({})

   toast.success(pasteId ? 'Paste updated successfully' : 'Paste created successfully')
  }

  return (
    <div className="flex place-items-center flex-col min-h-max ">
      <div className="flex flex-col gap-4 mt-4">
      <input type="text"
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Enter Title"
      className="px-4 py-2 rounded-md bg-transparent border border-blue-900 text-white" />

       <button className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-900 text-white font-bold"
       onClick={handleCreatePaste}>
        {pasteId ? 'Update' : 'Create'}
       </button>
    </div>

    <div className="mt-4">
      <textarea
      name="textContent"
      value={textContent}
      onChange={(e) => setTextContent(e.target.value)}
      placeholder="Enter Content"
      className="px-4 py-2 rounded-md w-[300px] sm:min-w-[500px] bg-transparent border border-blue-900 text-white" 
      rows={10}/>
    </div>
    </div>
  )
}

export default Home