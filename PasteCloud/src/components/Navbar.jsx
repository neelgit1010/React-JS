import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex gap-4 bg-black shadow-xl">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          fontWeight: isActive && "bold",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
        style={({ isActive }) => ({
          color: isActive ? "green" : "white",
          fontWeight: isActive && "bold",
        })}
      >
        Pastes
      </NavLink>
      {/* <NavLink
        to="/pastes/:id"
        style={({ isActive }) => ({
          color: isActive ? "green" : "black",
          fontWeight: isActive && "bold",
        })}
      >
        ViewPastes
      </NavLink> */}
    </div>
  );
};

export default Navbar;
