import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../others/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#00040F] backdrop-blur-md text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-blue-400 transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-400 transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Navigation - now positioned relative to the toggle button */}
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-[180px] bg-[#333538] rounded-md shadow-lg py-2 space-y-2 z-50">
              <Link 
                to="/" 
                className="block px-4 py-2 hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="block px-4 py-2 hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="block px-4 py-2 hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-2 hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;