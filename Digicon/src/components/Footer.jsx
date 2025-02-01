import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="p-20 w-full bg-blue-700 flex flex-col gap-4">
      <div className="flex flex-col justify-between text-white font-semibold sm:flex-row">
        <div className="flex flex-col gap-2">
          <h1>Quick Links</h1>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link to="/">
            {" "}
            <p>About Us</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Our Services</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Blogs</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Quick Links</h1>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link to="/">
            {" "}
            <p>About Us</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Our Services</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Blogs</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Quick Links</h1>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link to="/">
            {" "}
            <p>About Us</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Our Services</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Blogs</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Quick Links</h1>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
          <Link to="/">
            {" "}
            <p>About Us</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Our Services</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Blogs</p>
          </Link>
          <Link to="/">
            {" "}
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <hr className="my-8 bg-gray-500" />
      <div className="flex flex-col justify-between items-center gap-4 text-white sm:flex-row">
        <div>
          <img src="/banner.png" width="200px" alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Contact Information</h1>
        </div>
        <div>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg w-full transition-all duration-300 font-semibold hover:bg-blue-800 hover:text-white">
            Get Quotes
          </button>
        </div>
        <div>
          <img src="/map.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 text-white sm:flex-row">
        <div>
          <p className="w-[200px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            est earum minima rerum maiores qui incidunt quasi ullam sunt
            expedita?
          </p>
        </div>
        <div className="max-w-[200px]">
          <p>9330383733 / 8420848164</p>
          <p>9330383733</p>
          <p>digiconmarketers@gmail.com</p>
          <p>
            Shibani Mahamaya Housing, Street 43, Block AC 64, NewTown Action
            Area I, Kolkata 700163
          </p>
        </div>
        <div className="flex gap-4">
           <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
          <FaYoutube size={30} />
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
