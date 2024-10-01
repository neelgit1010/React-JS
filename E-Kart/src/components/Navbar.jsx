import { useRef } from "react";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navWrapper, getItem, search, cart }) => {
  const location = useLocation()
  const setGetItem = (item) => {
    if (item === "Clear") getItem("");
    else getItem(item);
  };

  const searchRef = useRef("");

  return (
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} className="brand">
          E-Kart
        </Link>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            ref={searchRef}
            onChange={(e) => search(searchRef.current.value)}
          />
        </div>
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative bg-transparent border-0 p-0">
            <IoMdCart size={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
      {location.pathname === "/" && (
        <div className="nav-wrapper">
        {navWrapper.map((item) => (
          <div
            key={item}
            className="nav-item"
            onClick={(e) => setGetItem(e.target.innerText)}
          >
            {item}
          </div>
        ))}
      </div>
      )}
    </header>
  );
};

export default Navbar;
