import { useState } from "react";

function NavbarSection({
  title,
  onClick,
  items,
}: {
  title: string;
  onClick?: () => void;
  items?: { title: string; href: string }[];
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="uppercase font-black relative flex items-center gap-1 group"
      onMouseEnter={() => items && setDropdownOpen(true)}
      onMouseLeave={() => items && setDropdownOpen(false)}
    >
      <a
        href={`#${title.toLowerCase()}`}
        onClick={onClick}
        className="text-5xl md:text-2xl relative inline-flex flex-col md:items-center text-background transition-colors duration-300 leading-none"
      >
        <span className="relative z-10">{title}</span>
        {!items && (
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        )}
      </a>
      {items && dropdownOpen && (
        <div className="absolute left-0 top-full pt-2">
          <div className="bg-primary shadow-lg">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClick}
                className="text-2xl block px-4 py-2 text-background hover:text-background-secondary transition-colors duration-300 whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarSection;
