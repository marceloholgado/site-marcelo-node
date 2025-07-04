import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./style.css";

function Nav({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`w-full p-4 ${className} menu neon`}>
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        {/* Botão Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu (desktop ou mobile aberto) */}
        <ul
          className={`
            flex-col md:flex-row gap-6 md:gap-10 list-none items-center 
            ${isOpen ? "flex" : "hidden"} md:flex
          `}
        >
          <li>
            <Link to="/" className="hover:bg-white/20 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-white/20 p-2 rounded">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:bg-white/20 p-2 rounded">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:bg-white/20 p-2 rounded">
              Contact
            </Link>
          </li>
          <a
            href="https://www.linkedin.com/in/marcelo-holgado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/marcelo.holgado.50/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/holgado.marcelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaInstagram />
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
