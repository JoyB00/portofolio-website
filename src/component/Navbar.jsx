import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed z-10 w-full bg-black/50 p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 sm:justify-around">
        <NavLink to="/" className="text-white">
          <p className="text-start">
            <span className="font-black">DENDYPORTO </span>&#169;2024
          </p>
        </NavLink>
        <div className="hidden gap-x-10 sm:flex">
          <NavLink to="/" className="font-black text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="font-black text-white">
            About
          </NavLink>
          <NavLink to="/contact" className="font-black text-white">
            Contact
          </NavLink>
        </div>
        <button
          className="bg-transparent text-white sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
          {/* <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg> */}
        </button>
      </div>
      {isMenuOpen && (
        <div className="rounded p-3 sm:hidden">
          <NavLink to="/" className="mb-4 block font-black text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="mb-4 block font-black text-white">
            About
          </NavLink>
          <NavLink to="/contact" className="block font-black text-white">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}
