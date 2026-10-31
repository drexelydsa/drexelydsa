import { useState } from "react";
import { Link } from "react-router-dom";
import { X as CloseIcon, ChevronRight, ChevronLeft } from "lucide-react";
import dsaLogo from "../../assets/logo.png";
import { NAV_ITEMS, type NavItem } from "../../constants/navigation";

function MobileNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const [activeSection, setActiveSection] = useState<NavItem | null>(null);

  function closeMenu() {
    setMenuOpen(false);
    setActiveSection(null);
  }

  return (
    <>
      {/* Main panel */}
      <div
        className={`fixed inset-0 z-60 bg-primary text-background transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={dsaLogo}
          alt="Drexel YDSA Logo"
          className={`h-16 absolute top-6 left-6 transition-opacity duration-200 ${
            menuOpen ? "opacity-100 delay-300" : "opacity-0 delay-0"
          }`}
        />
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-background/40 text-background transition-colors duration-300 hover:bg-background/10"
        >
          <span className="sr-only">Close menu</span>
          <CloseIcon className="h-6 w-6" />
        </button>
        <div className="flex h-full flex-col px-8 py-8">
          <div className="flex flex-col items-start gap-8 my-auto">
            {NAV_ITEMS.map((item) =>
              item.items ? (
                <button
                  key={item.title}
                  onClick={() => setActiveSection(item)}
                  className="uppercase font-black text-5xl text-background flex items-center gap-2"
                >
                  {item.title}
                  <ChevronRight className="h-6 w-6" />
                </button>
              ) : (
                <Link
                  key={item.title}
                  to={item.route!}
                  onClick={closeMenu}
                  className="uppercase font-black text-5xl text-background"
                >
                  {item.title}
                </Link>
              ),
            )}
            <a
              href="https://act.dsausa.org/donate/membership/"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Sub-panel */}
      <div
        className={`fixed inset-0 z-[70] bg-primary text-background transform transition-transform duration-300 md:hidden ${
          activeSection ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full border border-background/40 text-background transition-colors duration-300 hover:bg-background/10"
        >
          <span className="sr-only">Back</span>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-background/40 text-background transition-colors duration-300 hover:bg-background/10"
        >
          <span className="sr-only">Close menu</span>
          <CloseIcon className="h-6 w-6" />
        </button>
        <div className="flex h-full flex-col px-8 py-8">
          <div className="flex flex-col items-start gap-8 my-auto">
            <p className="uppercase font-black text-5xl text-background/40">
              {activeSection?.title}
            </p>
            {activeSection?.items?.map((item) =>
              item.route.startsWith("http") ? (
                <a
                  key={item.title}
                  href={item.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="uppercase font-black text-5xl text-background"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.route}
                  onClick={closeMenu}
                  className="uppercase font-black text-5xl text-background"
                >
                  {item.title}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
    </>
  );
}

export default MobileNav;
