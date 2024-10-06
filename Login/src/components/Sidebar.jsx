import { useState } from "react";
import { FaHome, FaTachometerAlt, FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { TbLogout2, TbLogout } from "react-icons/tb";
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
    {
      name: "Logout",
      icon: <IoLogOut width="16" height="16" />,
      submenu: null,
    },
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      // Expand sidebar if it's collapsed
      if (!activeSideBar) {
        setActiveSideBar(true); // Expanding the sidebar
      }

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

      if (!activeSideBar) {
        setActiveSideBar(true); // Expanding the sidebar
      }

      setActiveMenu(item.name); // Set active menu for non-submenu items
    }
  };

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar`}
      style={{ width: `${activeSideBar ? "280px" : "60px"}` }}
    >
      <div className="d-flex justify-content-between items-center">
        <a
          href="/"
          className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none ${
            !activeSideBar && "d-none fade"
          }`}
        >
          <RiAdminFill width="40" height="40" />{" "}
          <span className="fs-4">Admin</span>
        </a>
        <button
          type="button"
          className="bg-transparent border-0"
          onClick={() => {
            // Toggle the sidebar
            setActiveSideBar((prev) => !prev);

            // If the sidebar is about to collapse, reset the active menu and submenu
            if (activeSideBar) {
              setActiveMenu(null);
              setActiveSubmenu(null);
            }
          }}
        >
          {activeSideBar ? (
            <TbLogout2 className="text-white fs-4" />
          ) : (
            <TbLogout className="text-white fs-4 mx-3" />
          )}
        </button>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleMenuClick(item)}
              href="#"
              className={`nav-link text-white ${
                activeMenu === item.name ? "active" : ""
              }`}
            >
              {item.icon} {activeSideBar && item.name}
            </a>
            {activeSubmenu === item.name &&
              item.submenu &&
              item.submenu.length > 0 && <Submenu items={item.submenu} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
