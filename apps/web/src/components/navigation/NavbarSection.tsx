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
      className="font-bold text-2xl group relative inline-flex flex-col md:items-center text-background hover:text-background secondary transition-colors duration-300 leading-none"
    >
      {title}
      <span className="mt-px h-0.5 w-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}

export default NavbarSection;
