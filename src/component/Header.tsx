"use client";

import {
  ChevronDownIcon,
  FacebookIcon,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
  Phone,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AllProductsList } from "@/data/productData";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Hide header on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto">
        {/* Header - Top Bar */}
        <div className="hidden lg:flex mx-auto px-8 h-12 bg-primary-950 rounded-b-4xl items-center justify-between">
          {/* Contact */}
          <div className="flex items-center h-full gap-4">
            <div>
              <Phone className="h-4 w-4 text-white inline-block mr-2" />
              <span className="text-white text-sm font-medium inline-block">
                +91 9512517666
              </span>
            </div>
            <div>
              <Mail className="h-4 w-4 text-white inline-block mr-2" />
              <span className="text-white text-sm font-medium inline-block">
                contact@example.com
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center h-full gap-6">
            {/* Facebook */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-1 rounded-full bg-white transition-colors"
            >
              <FacebookIcon className="h-4 w-4 text-primary-800" />
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-1 rounded-full bg-white transition-colors"
            >
              <Linkedin className="h-4 w-4 text-primary-800" />
            </Link>
            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-1 rounded-full bg-white transition-colors"
            >
              <Instagram className="h-4 w-4 text-primary-800" />
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <div className="mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-900">Logo</span>
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main navigation links with numbers */}
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Product", href: "/product", dropdown: true },
              { name: "Blog", href: "/blog" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`font-medium px-4 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${pathname === item.href ? "text-white bg-primary-950 shadow-lg" : "text-gray-700 hover:text-primary-950 hover:bg-primary-50"}`}
                  >
                    {item.name}
                    <ChevronDownIcon className="w-3 h-3 ml-1" />
                  </a>
                  <div className="absolute left-0 top-full mt-1 min-w-72 bg-linear-to-br from-primary-50 via-white to-primary-100 border border-primary-200 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 p-3">
                    <ul className="flex flex-col gap-1 divide-y divide-primary-100">
                      {AllProductsList.map(
                        (opt: {
                          categoryName: string;
                          categoryLabel: string;
                        }) => (
                          <li key={opt.categoryLabel} className="group/item">
                            <a
                              href={`/product?category=${encodeURIComponent(opt.categoryLabel)}`}
                              className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 bg-white/80 hover:bg-primary-100 hover:text-primary-900 shadow-sm group-hover/item:shadow-md group-hover/item:scale-[1.03]"
                            >
                              <span className="font-semibold text-primary-950 text-base tracking-wide">
                                {opt.categoryName}
                              </span>
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium px-4 py-1 rounded-full transition-all duration-200 ${
                    pathname === item.href
                      ? "text-white bg-primary-950 shadow-lg"
                      : "text-gray-700 hover:text-primary-800 hover:bg-primary-50"
                  }`}
                >
                  {item.name}
                </a>
              ),
            )}
          </nav>

          {/* User Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-6">
              {/* <button className="cursor-pointer font-bold">
                <Menu className="h-5 w-5 text-primary-900" />
              </button> */}
              <Link
                href="/contact"
                className="font-medium px-4 py-1 rounded-full transition-all duration-200 text-white bg-primary-950 shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden p-2 text-primary-900 hover:bg-primary-50 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden scroll-smooth scroll-y-auto transition-all duration-300 ${isMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            <span className="text-2xl font-bold text-primary-900">Logo</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Product", href: "/product", dropdown: true },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsProductOpen(!isProductOpen)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold transition-all ${isProductOpen ? "bg-primary-950 text-white" : "text-gray-700 hover:bg-primary-50"}`}
                      >
                        {item.name}
                        {isProductOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${isProductOpen ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="flex flex-col gap-1 pl-4 border-l-2 border-primary-100">
                          {AllProductsList.map((opt) => (
                            <Link
                              key={opt.categoryLabel}
                              href={`/product?category=${encodeURIComponent(opt.categoryLabel)}`}
                              className="px-4 py-3 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-900 transition-colors font-medium"
                            >
                              {opt.categoryName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${pathname === item.href ? "bg-primary-950 text-white shadow-md" : "text-gray-700 hover:bg-primary-50"}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="font-bold text-gray-900">+91 9512517666</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-900">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    contact@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
