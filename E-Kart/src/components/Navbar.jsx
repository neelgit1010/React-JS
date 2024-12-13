import { useState, useRef } from "react";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navWrapper, getItem, search, cart }) => {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false); // State for toggling nav-wrapper

  const setGetItem = (item) => {
    if (item === "Clear") getItem("");
    else getItem(item);
  };

  const searchRef = useRef("");

  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3 bg-dark">
        {/* Brand Name */}
        <Link to={"/"} className="brand text-white">
          E-Kart
        </Link>

        {/* Search Bar */}
        <div className="d-md-block">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            ref={searchRef}
            onChange={() => search(searchRef.current.value)}
          />
        </div>

       <div className="gap-3">
         {/* Cart Icon */}
         <Link to={"/cart"} className="position-relative">
          <button
            type="button"
            className="btn btn-primary position-relative bg-transparent border-0 p-0"
          >
            <IoMdCart size={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="btn btn-light d-md-none bg-transparent text-white border-0"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          ☰
        </button>
       </div>
      </div>

      {/* Nav Wrapper */}
      {location.pathname === "/" && (
        <div
          className={`${
            isNavVisible ? "d-flex" : "d-none"
          } flex-column flex-md-row justify-content-center align-items-center bg-light`}
          style={{
            gap: "10px",
            padding: "10px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {navWrapper.map((item) => (
            <div
              key={item}
              className="btn btn-outline-primary"
              onClick={(e) => setGetItem(e.target.innerText)}
              style={{
                cursor: "pointer",
                minWidth: "100px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
