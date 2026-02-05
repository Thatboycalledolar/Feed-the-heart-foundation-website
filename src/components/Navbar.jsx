import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#"><img src="./public/feed-the-heart-logo.svg" alt="Feed the Heart Logo" className="h-14
         w-auto" /></a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/gallery" className="hover:text-blue-500">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        <div className="hidden md:flex">
          <button className="bg-red-600 flex text-white text-[1rem] font-bold px-4 py-2 rounded-md gap-3 hover:bg-red-700 cursor-pointer"> Donate Now <Heart color="white"/></button>
        </div>
        

        {/* Hamburger */}
       <button
          onClick= {() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div  className={`md:hidden flex flex-col items-center gap-6 pb-10 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"}`}>
          <Link to="/" onClick={() => setOpen(false)} className="text-[#333333] font-medium">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="text-[#333333] font-medium">About</Link>
          <Link to="/gallery" onClick={() => setOpen(false)} className="text-[#333333] font-medium">Gallery</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-[#333333] font-medium">Contact</Link>
          <Link to="/donate" onClick={() => setOpen(false)}><button className="bg-red-600 flex text-white text-[1rem] font-bold px-4 py-2 rounded-md gap-3 hover:bg-red-700 cursor-pointer"> Donate Now <Heart color="white"/></button></Link>
           
        </div>
      )} 
    </nav>
  );
}


