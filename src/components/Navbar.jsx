import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-400">Neo</span>Bank
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-blue-400 transition">Features</Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-center py-6 space-y-4">
          <Link to="/" className="block hover:text-blue-400 transition">Home</Link>
          <Link to="/features" className="block hover:text-blue-400 transition">Features</Link>
          <Link to="/pricing" className="block hover:text-blue-400 transition">Pricing</Link>
          <Link to="/about" className="block hover:text-blue-400 transition">About</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
