export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-16 py-16">{children}</div>;
}
