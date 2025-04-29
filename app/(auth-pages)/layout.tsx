export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto flex h-screen max-w-7xl flex-col items-center justify-center gap-12">
      {children}
    </div>
  );
}
