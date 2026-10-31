export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-24 py-24 text-content">{children}</div>;
}
