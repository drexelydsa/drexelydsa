import ydsaLogo from "../assets/logo-transparent.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 mb-4">
        <img
          src={ydsaLogo}
          alt="Drexel YDSA Logo"
          className="h-12 mx-auto mb-2"
        />
      </div>
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Drexel YDSA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
