import { useState } from "react";
import { FaHome, FaTachometerAlt, FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import Submenu from "./Submenu"; // Ensure you have a Submenu component

const Sidebar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null); // Track active menu
  const [activeSideBar, setActiveSideBar] = useState(true);

  const menuItems = [
    {
      name: "Home",
      icon: <FaHome width="16" height="16" />,
      submenu: [
        { name: "Submenu 1", link: "#" },
        { name: "Submenu 2", link: "#" },
        { name: "Submenu 3", link: "#" },
      ],
    },
    {
      name: "Dashboard",
      icon: <FaTachometerAlt width="16" height="16" />,
      submenu: [
        { name: "Submenu 1", link: "#" },
        { name: "Submenu 2", link: "#" },
        { name: "Submenu 3", link: "#" },
      ],
    },
    {
      name: "Orders",
      icon: <FaCalendarAlt width="16" height="16" />,
      submenu: [
        { name: "Weekly", link: "#" },
        { name: "Monthly", link: "#" },
        { name: "Yearly", link: "#" },
      ],
    },
    {
      name: "Products",
      icon: <AiFillProduct width="16" height="16" />,
      submenu: [
        { name: "Add Product", link: "#" },
        { name: "View Products", link: "#" },
      ],
    },
    {
      name: "Customers",
      icon: <BsFillPeopleFill width="16" height="16" />,
      submenu: [
        { name: "Submenu 1", link: "#" },
        { name: "Submenu 2", link: "#" },
        { name: "Submenu 3", link: "#" },
      ],
    },
    
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      // Toggle submenu and update active menu
      if (activeMenu === item.name) {
        setActiveSubmenu(null);
        setActiveMenu(null);
      } else {
        setActiveSubmenu(item.name);
        setActiveMenu(item.name);
      }
    } else {
      console.log(`${item.name} clicked`);
      setActiveMenu(item.name); // Set active menu for non-submenu items
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <RiAdminFill width="40" height="40" /> <span className="fs-4">Admin</span>
      </a>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleMenuClick(item)}
              href="#"
              className={`nav-link text-white ${activeMenu === item.name ? "active" : ""}`}
            >
              {item.icon} {item.name}
            </a>
            {activeSubmenu === item.name && item.submenu && item.submenu.length > 0 && (
              <Submenu items={item.submenu} />
            )}
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>User</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
