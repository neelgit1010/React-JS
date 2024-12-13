import { useState } from "react"
import { useSelector } from "react-redux"
import PasteCard from "./PasteCard"

const Pastes = () => {
 
  const [search, setSearch] = useState('')
  const pastes = useSelector(state => state.paste.pastes)

  const filteredPastes = pastes.filter(paste => paste.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="text-white w-full p-16 h-screen overflow-y-scroll">
      <input type="text"
      name="title"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Pastes..."
      className="px-4 py-2 rounded-md bg-transparent border border-blue-900 text-white w-[250px] sm:w-full" />

       <div className="mt-4 flex flex-col">
         <h1 className="text-4xl text-center sm:text-left">Your Pastes</h1>

         {
          filteredPastes.length>0 ? filteredPastes.map(paste => <PasteCard key={paste._id} id={paste._id} title={paste.title} textContent={paste.textContent} createdAt={paste.createdAt} />) : <p className="mt-4 text-xl font-semibold text-center">No pastes found</p>
         }
       </div>
    </div>
  )
}

export default Pastes