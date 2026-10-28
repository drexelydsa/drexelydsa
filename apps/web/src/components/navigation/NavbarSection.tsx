function NavbarSection({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={`#${title.toLowerCase()}`}
      onClick={onClick}
      className="font-bold text-5xl md:text-3xl group relative inline-flex flex-col md:items-center text-background hover:text-background secondary transition-colors duration-300 leading-none"
    >
      <span className="relative z-10">{title}</span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export default NavbarSection;
