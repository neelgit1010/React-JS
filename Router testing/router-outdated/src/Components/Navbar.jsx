import { Link } from "react-router-dom";

function Navbar() {
    return(
        <ul className=" flex items-center justify-center">
            <li className=" mx-3">
                <Link to='/'>Home</Link>
            </li>
            <li className=" mx-3">
                <Link to='/about'>About</Link>
            </li>
            <li className=" mx-3">
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;