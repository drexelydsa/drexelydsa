import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import ydsaLogo from "../assets/logo-transparent.png";

function Footer() {
  return (
    <footer className="bg-content text-background py-6 px-16">
      <div className="flex flex-row justify-between items-center mb-4">
        <img src={ydsaLogo} alt="Drexel YDSA Logo" className="h-24" />
        <div className="flex flex-row gap-4">
          <a
            href="https://www.instagram.com/drexelydsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-background-secondary transition-colors duration-300"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://twitter.com/drexelydsa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-background-secondary transition-colors duration-300"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="mailto:drexelydsa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-background-secondary transition-colors duration-300"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Drexel YDSA. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
