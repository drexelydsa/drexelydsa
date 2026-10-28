import NavbarSection from "./NavbarSection";

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
      className={`fixed inset-0 z-40 bg-primary text-background transform transition-transform duration-300 md:hidden ${
        menuOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
        <NavbarSection title="Home" onClick={closeMenu} />
        <NavbarSection title="About" onClick={closeMenu} />
        <NavbarSection title="Events" onClick={closeMenu} />
        <NavbarSection title="Contact" onClick={closeMenu} />
        <a
          href="https://act.dsausa.org/donate/membership/"
          target="_blank"
          className="w-full"
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
  );
}

export default MobileNav;
