 import { ShoppingBag, Menu } from "lucide-react";
 export default function Navbar() {
  return (
    <>
   

    <nav className="flex justify-between items-center px-6 py-4 ">
      
      <div className="flex items-center gap-2 text-black font-bold text-xl">
        <ShoppingBag /> Marazon
      </div>
      <ul className="hidden md:flex gap-6 text-gray-700 font-mono">
        <li><a href="#" className="hover:text-teal-600 cursor-pointer text-gray-900">Home</a></li>
        <li><a href="#" className="hover:text-teal-600 cursor-pointer text-gray-900">Shop</a></li>
        <li><a href="" className="hover:text-teal-600 cursor-pointer text-gray-900">About</a></li>
        <li><a href="#" className="hover:text-teal-600 cursor-pointer text-gray-900">Contact</a></li>
      </ul>
      <Menu className="md:hidden w-6 h-6 text-gray-700" />
    </nav>



    </>
  )
}