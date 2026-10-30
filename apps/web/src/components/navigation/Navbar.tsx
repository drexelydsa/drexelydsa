import { useEffect, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import NavbarSection from "./NavbarSection";
import MobileNav from "./MobileNav";
import dsaLogo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 8 && currentScrollY > 50) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY - 8 || currentScrollY <= 50) {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`,
      );
    });

    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 bg-primary shadow-md transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="relative text-background max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <img src={dsaLogo} alt="Drexel YDSA Logo" className="h-16 md:h-32" />
          <div className="hidden items-center space-x-8 md:flex">
            <NavbarSection title="Home" route="/" />
            <NavbarSection
              title="About"
              items={[
                { title: "Drexel YDSA Constitution", route: "/consitution" },
              ]}
            />
            <NavbarSection title="Events" route="/events" />
            <NavbarSection
              title="Get Involved"
              items={[
                { title: "Campaigns", route: "/campaigns" },
                {
                  title: "Interest Form",
                  route: "https://forms.gle/fmdK5MUeJHJ1YXDRA",
                },
                {
                  title: "Discord",
                  route: "https://discord.drexelydsa.org",
                },
              ]}
            />
            <a href="https://act.dsausa.org/donate/membership/" target="_blank">
              <button className="uppercase ml-4 px-6 py-4 bg-background text-content font-black text-2xl rounded-full hover:bg-background-secondary transition-colors duration-300">
                Join DSA
              </button>
            </a>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full border border-background/40 text-background transition-colors duration-300 hover:bg-background/10"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative h-6 w-6">
              <MenuIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </button>
        </div>
      </nav>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;
