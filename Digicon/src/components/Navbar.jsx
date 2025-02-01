import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Our Services", path: "/", hasDropdown: true },
    { name: "Blogs", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  const megaMenu = [
    {
      title: "Performance Marketing",
      links: [
        "SEO or SEM",
        "SEO or SMM",
        "PPC (Google AdWords)",
        "Object-Relational Mapping",
        "Email Marketing",
        "Bulk SMS & WA Marketing",
        "Lead Generation",
        "App Store Optimization",
      ],
    },
    {
      title: "Development Services",
      links: [
        "Web Dev. & Redesigning",
        "App Development",
        "Software Development",
        "CRM Development",
        "Product Development",
        "Blockchain & Crypto Dev.",
        "Game Development",
      ],
    },
    {
      title: "Designing Services",
      links: [
        "UI/UX Designing",
        "Logo Designing",
        "Graphic Designing",
        "Brochure Designing",
        "Newsletter Designing",
        "Flyer Design",
        "Landing Page Design",
        "Adobe XD, Figma Design",
      ],
    },
    {
      title: "Other Services",
      links: [
        "Animation",
        "Cyber Security",
        "Linguistics Services",
        "Data Entry",
        "Product Entry",
      ],
    },
  ];

  return (
    <div className="flex justify-between p-5 sticky top-0 z-50 bg-white">
      <div>
        <img src="/banner.png" alt="banner" width="135px" />
      </div>

      {/* Desktop Menu */}
      <div className="lg:flex lg:gap-5 lg:items-center font-semibold hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
            onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
          >
            <Link to={item.path} className="hover:text-blue-600">
              {item.name}
            </Link>

            {/* Mega Menu for Desktop */}
            {item.hasDropdown && (
              <div
                className={`absolute left-0 top-full w-[800px] bg-black bg-opacity-85 text-white shadow-lg rounded-lg p-6 flex 
                  transition-all duration-300 transform ${
                    servicesOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3 pointer-events-none"
                  }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {megaMenu.map((category, catIndex) => (
                  <div key={catIndex} className="w-1/4 px-5">
                    <h3 className="font-bold border-b border-white pb-2 mb-3">
                      {category.title}
                    </h3>
                    {category.links.map((link, linkIndex) => (
                      <p
                        key={linkIndex}
                        className="text-sm hover:underline cursor-pointer py-1"
                      >
                        {">"} {link}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="lg:flex lg:gap-5 hidden">
        <button className="text-black py-2 px-4 rounded-lg border-black border hover:bg-black hover:text-white font-semibold transition-all duration-300">
          Support
        </button>
        <button className="bg-black text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800">
          Get Quotes
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col p-5 gap-4 transition-all duration-300 transform overflow-y-auto ${
          isOpen
            ? "opacity-85 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) =>
          item.hasDropdown ? (
            <div key={index} className="w-full text-center">
              <button
                className="hover:text-blue-600 w-full text-left font-semibold flex justify-between items-center py-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing mobile menu
                  setServicesOpen(!servicesOpen);
                }}
              >
                {item.name}
                <span>{servicesOpen ? "▲" : "▼"}</span>
              </button>

              {/* Expandable Submenu in Mobile */}
              <div
                className={`transition-all duration-300 text-left ${
                  servicesOpen
                    ? "max-h-[500px] opacity-85 overflow-y-auto"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {megaMenu.map((category, catIndex) => (
                  <div key={catIndex} className="px-5 py-2">
                    <h3 className="font-bold pb-1">{category.title}</h3>
                    {category.links.map((link, linkIndex) => (
                      <p
                        key={linkIndex}
                        className="text-sm hover:underline cursor-pointer py-1"
                      >
                        {">"} {link}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-all duration-200"
            >
              {item.name}
            </Link>
          )
        )}

        <button className="text-white py-2 px-4 rounded-lg border-white border hover:bg-white hover:text-black font-semibold w-full transition-all duration-300">
          Support
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full transition-all duration-300 font-semibold hover:bg-gray-800">
          Get Quotes
        </button>
      </div>
    </div>
  );
};

export default Navbar;