import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <ul className=" flex justify-end text-white font-semibold my-6 mr-8 gap-11">
            <li >
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
    )
}

export default Navbar