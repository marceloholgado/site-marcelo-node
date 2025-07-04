import "./style.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h1 className="title text-2xl mb-4">Contact</h1>
        <p className="mb-6">Hit me up via social media or send me an email</p>

        {/* Social Links */}
        <div className="flex gap-6 mb-10 text-xl">
          <a
            href="https://www.linkedin.com/in/marcelo-holgado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Email Form */}
        <div className="w-full max-w-md p-6 border rounded">
          <h2 className="text-lg mb-4">Send me an email</h2>
          <form className="flex flex-col gap-4 text-left">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border rounded px-3 py-2"
              ></textarea>
            </div>
            <button type="submit" className="py-2 border rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
