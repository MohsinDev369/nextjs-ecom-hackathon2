import "../globals.css";

export const metadata = {
  title: "My Awesome Site",
  description: "Generated by Next + Sanity",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
