import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./style.css";

function Footer({ className = "" }) {
  return (
    <footer className={`w-full p-4 ${className} menu neon`}>
      <div className="max-w-7xl mx-auto flex justify-end items-center">
        <ul
          className={`
            flex-col md:flex-row gap-6 md:gap-10 list-none items-center
          `}
        >
          <a
            href="https://www.linkedin.com/in/marcelo-holgado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/20 p-2 rounded"
          >
            <FaInstagram />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
