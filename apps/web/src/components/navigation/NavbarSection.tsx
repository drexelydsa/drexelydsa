function NavbarSection({
  title,
  onClick,
  items,
}: {
  title: string;
  onClick?: () => void;
  items?: { title: string; href: string }[];
}) {
  return (
    <div
      className="uppercase font-bold relative flex items-center gap-1 group"
      onMouseLeave={items ? undefined : undefined}
    >
      <a
        href={`#${title.toLowerCase()}`}
        onClick={onClick}
        className="font-bold text-5xl md:text-xl relative inline-flex flex-col md:items-center text-background transition-colors duration-300 leading-none"
      >
        <span className="relative z-10">{title}</span>
        {!items && (
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
        )}
      </a>
      {items && (
        <div className="absolute left-0 top-full mt-2 hidden group-hover:block">
          <div className="bg-primary shadow-lg">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClick}
                className="block px-4 py-2 text-background hover:bg-background-secondary transition-colors duration-300 whitespace-nowrap"
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
