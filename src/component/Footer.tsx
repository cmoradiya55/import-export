"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-primary-50 text-gray border-t border-primary-100">
      <div className="container">
        <div className="mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary-800">
                  Logo
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a leading exporter of high-quality agricultural products,
                committed to delivering excellence and fostering global trade
                relationships.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-3 py-2 border border-primary-900 rounded text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-100 outline-none bg-input placeholder:text-gray-600"
                />
                <button className="px-4 py-2 bg-primary-800 text-white rounded hover:bg-primary-900 transition-colors">
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Get In Touch
                </h4>
                <div className="w-12 h-0.5 bg-primary-800"></div>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p>
                    9Th, E 924-925, Ganesh Glory 11, Near BSNL Office, Off
                    Sarkhej Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat,
                    382470
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-primary-800 hover:underline duration-400 transition-colors">
                    <span className="text-primary-800">
                      info@import-export.com
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 hover:underline duration-400 transition-colors">
                    <span>+91 9876543210</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 px-8">
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Quick Links
                </h4>
                <div className="w-12 h-0.5 bg-accent"></div>
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-primary-800 hover:font-bold transition-colors hover:underline duration-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-primary-800 hover:font-bold transition-colors duration-300 hover:underline text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-600 hover:text-primary-800 hover:font-bold transition-colors duration-300 hover:underline text-sm"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="text-gray-600 hover:text-primary-800 hover:font-bold transition-colors duration-300 hover:underline text-sm"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Gallery
                </h4>
                <div className="w-12 h-0.5 bg-primary-900"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Coffee</span>
                  </div>
                </div>
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Oil</span>
                  </div>
                </div>
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Spices</span>
                  </div>
                </div>
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Cocoa</span>
                  </div>
                </div>
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Colors</span>
                  </div>
                </div>
                <div className="aspect-square rounded overflow-hidden">
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                    <span className="text-black text-xs">Beans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-primary-100 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                Copyright © 2024 Import-Export.com. All Rights Reserved.
              </div>
              <div className="text-sm text-gray-600">
                Developed by <span className="text-accent">InfiniusTech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
