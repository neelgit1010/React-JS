
const Navbar = () => {
  return (
    <nav className=" bg-slate-800 text-white flex justify-between items-center p-5">
      <div className="text-2xl font-bold">
        <span className="text-green-500">&lt;</span>
        CiperKey
        <span className="text-green-500">Pro/&gt;</span>
      </div>
      <ul className="flex gap-10">
        <a href="/" className="hover:font-bold transition-all"> <li>Home</li> </a>
        <a href="/" className="hover:font-bold transition-all"> <li>About</li> </a>
        <a href="/" className="hover:font-bold transition-all"> <li>Contact</li> </a>
      </ul>
    </nav>
  )
}

export default Navbar