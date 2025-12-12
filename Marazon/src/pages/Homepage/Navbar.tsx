import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // 1. State for Mobile Menu Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Function to toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-black font-bold text-xl">
        <ShoppingBag className="text-teal-600" /> Marazon
      </Link>

      {/* Desktop Links (Hidden on mobile, Flex on medium screens up) */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-mono items-center">
        <li><Link to="/" className="hover:text-teal-600 transition">Home</Link></li>
        <li><Link to="/shop" className="hover:text-teal-600 transition">Shop</Link></li>
        <li><Link to="/about" className="hover:text-teal-600 transition">About</Link></li>
        <li>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition">
            Cart (0)
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button (Visible only on mobile) */}
      <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden border-t">
          <Link to="/" className="text-lg font-bold text-gray-800 hover:text-teal-600" onClick={toggleMenu}>Home</Link>
          <Link to="/shop" className="text-lg font-bold text-gray-800 hover:text-teal-600" onClick={toggleMenu}>Shop</Link>
          <Link to="/about" className="text-lg font-bold text-gray-800 hover:text-teal-600" onClick={toggleMenu}>About</Link>
          
          {/* Added Cart Button for Mobile */}
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition w-3/4" onClick={toggleMenu}>
            Cart (0)
          </button>
        </div>
      )}
    </nav>
  );
}