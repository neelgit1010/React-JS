
const Navbar = () => {
  return (
    <nav className=" bg-purple-500 text-white flex justify-between items-center p-5">
      <div className="text-3xl font-bold">CiperKey Pro</div>
      <ul className="flex gap-10">
        <a href="/"> <li>Home</li> </a>
        <a href="/"> <li>ABout</li> </a>
        <a href="/"> <li>Contact</li> </a>
      </ul>
    </nav>
  )
}

export default Navbar