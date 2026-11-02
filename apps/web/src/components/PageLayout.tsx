export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 py-12 sm:px-12 md:px-24 md:py-24 text-content">{children}</div>;
}
