import NavbarSection from "./NavbarSection";
import { X as CloseIcon } from "lucide-react";
import dsaLogo from "../../assets/logo.png";

function MobileNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div
      className={`fixed inset-0 z-60 bg-primary text-background transform transition-transform duration-300 md:hidden ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <img
        src={dsaLogo}
        alt="Drexel YDSA Logo"
        className={`h-16 absolute top-6 left-6 transition-opacity duration-200 ${menuOpen ? "opacity-100 delay-300" : "opacity-0 delay-0"}`}
      />
      <button
        onClick={closeMenu}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-background/40 text-background transition-colors duration-300 hover:bg-background/10"
      >
        <span className="sr-only">Close menu</span>
        <div className="relative h-6 w-6">
          <CloseIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
      <div className="flex h-full flex-col px-8 py-8">
        <div className="flex flex-col items-start gap-8 my-auto">
          <NavbarSection title="Home" onClick={closeMenu} />
          <NavbarSection title="About" onClick={closeMenu} />
          <NavbarSection title="Events" onClick={closeMenu} />
          <NavbarSection title="Contact" onClick={closeMenu} />
          <a
            href="https://act.dsausa.org/donate/membership/"
            target="_blank noopener noreferrer"
            className="w-full mb-8"
          >
            <button
              onClick={closeMenu}
              className="w-full uppercase px-6 py-4 bg-background text-content font-black text-xl rounded-full hover:bg-background-secondary transition-colors duration-300"
            >
              Join DSA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
