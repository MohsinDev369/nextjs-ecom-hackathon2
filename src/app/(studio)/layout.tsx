import { Button } from "@/components/ui/button";
import "../globals.css";
import RevalidateComponent from "@/components/RevalidateComponent";
import Link from "next/link";
export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by Next + Sanity",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-end m-4 gap-4">
          <Link href={'/'}>
          <Button>Home</Button>
          </Link>
          <RevalidateComponent />
        </div>
        {children}
      </body>
    </html>
  );
}
