"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Package, FileText, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/blog", label: "Blog Posts", icon: FileText },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md shadow-gray-500/20 flex flex-col h-screen">
      {/* Logo / Brand */}
      <div className="px-6 py-5 border-b border-gray-300 shadow-xs">
        <h2 className="text-2xl font-bold bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
          Admin Panel
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Import & Export Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1.5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary-950 text-white border border-primary-500/20"
                  : "text-primary-800 hover:text-primary-950 hover:bg-primary-600/10 hover:border-primary-600 border border-transparent"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Info & Sign Out */}
      <div className="px-3 py-2 border-t border-gray-300">
        <div className="px-4 py-2 mb-1">
          <p className="text-xs text-gray-500 font-medium">Signed in as</p>
          <p className="text-md text-gray-700 font-bold truncate">Admin</p>
        </div>
        <Link
          href="/admin/login"
          className="flex items-center gap-3 w-full px-4 py-2.5 mb-2 rounded-lg text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-400/10 transition-all duration-200 border border-transparent hover:border-red-500/20"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
