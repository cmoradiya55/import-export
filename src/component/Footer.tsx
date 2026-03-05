"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  const gallery = [
    { id: 1, name: "Coffee", image: "/image/footerCoffee.webp" },
    { id: 2, name: "Oil", image: "/image/footerOil.webp" },
    { id: 3, name: "Spices", image: "/image/footerSpices.webp" },
    { id: 4, name: "Food Color", image: "/image/footerFoodColor.webp" },
    { id: 5, name: "Beans", image: "/image/footerBeans.webp" },
    { id: 6, name: "Cocoa", image: "/image/footerCocoa.webp" },
  ];

  return (
    <footer className="bg-primary-50 text-gray border-t border-primary-100">
      <div className="container mx-auto">
        <div className="px-6 py-12 md:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Company Info */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary-800">
                  Logo
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                We are a leading exporter of high-quality agricultural products,
                committed to delivering excellence and fostering global trade
                relationships.
              </p>
              <div className="flex w-full max-w-sm space-x-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 border border-primary-200 rounded-xl text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-100 outline-none bg-white placeholder:text-gray-400 shadow-sm"
                />
                <button className="p-2 bg-primary-800 text-white rounded-xl hover:bg-primary-900 transition-all shadow-md active:scale-95">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">
                  Get In Touch
                </h4>
                <div className="w-12 h-1 bg-primary-800 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  <p>
                    9Th, E 924-925, Ganesh Glory 11, Near BSNL Office, Off
                    Sarkhej Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat,
                    382470
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href="mailto:info@import-export.com"
                    className="block text-sm font-semibold text-primary-800 hover:text-primary-600 hover:underline transition-colors"
                  >
                    info@import-export.com
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="block text-sm font-semibold text-gray-900 hover:text-primary-800 transition-colors"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">
                  Quick Links
                </h4>
                <div className="w-12 h-1 bg-primary-800 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              {["Home", "About", "Products", "Blogs"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-primary-800 transition-all font-medium text-sm hover:translate-x-1 inline-block"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Gallery */}
            <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">
                  Gallery
                </h4>
                <div className="w-12 h-1 bg-primary-800 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full max-w-[240px]">
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-xl overflow-hidden shadow-sm border border-primary-100 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-primary-100 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div className="text-sm text-gray-500 font-medium">
                Copyright © 2024{" "}
                <span className="text-primary-800">Import-Export.com</span>. All
                Rights Reserved.
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Developed by{" "}
                <span className="text-primary-900 font-bold">InfiniusTech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
