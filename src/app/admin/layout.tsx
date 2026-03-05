"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/component/AdminComponenet/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Prevent wrapping login or forgot password pages with admin layout shell if accessed directly
  if (pathname === "/admin/login" || pathname === "/admin/forgotPassword") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
