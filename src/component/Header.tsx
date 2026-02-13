"use client";

import { ChevronDown, ChevronDownIcon, Facebook, FacebookIcon, Instagram, Linkedin, Mail, Phone, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container">

                {/* Header */}
                <div className="mx-auto px-8 h-12 bg-primary-950 rounded-b-4xl flex items-center justify-between">

                    {/* Contact */}
                    <div className="flex items-center h-full gap-4">
                        <div>
                            <Phone className="h-4 w-4 text-white inline-block mr-2" />
                            <span className="text-white text-sm font-medium inline-block">+91 9512517666</span>
                        </div>
                        <div>
                            <Mail className="h-4 w-4 text-white inline-block mr-2" />
                            <span className="text-white text-sm font-medium inline-block">contact@example.com</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center h-full gap-6">
                        {/* Facebook */}
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group p-1 rounded-full bg-white transition-colors">
                            <FacebookIcon className="h-4 w-4 text-primary-800" />
                        </Link>
                        {/* LinkedIn */}
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group p-1 rounded-full bg-white transition-colors">
                            <Linkedin className="h-4 w-4 text-primary-800" />
                        </Link>
                        {/* Instagram */}
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group p-1 rounded-full bg-white transition-colors">
                            <Instagram className="h-4 w-4 text-primary-800" />
                        </Link>
                    </div>

                </div>

                {/* Navbar */}
                <div className="mx-auto px-8 flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div>
                            <span className="text-2xl font-bold text-primary-900">Logo</span>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {/* Main navigation links with numbers */}
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About', href: '/about' },
                            { name: 'Product', href: '/product', dropdown: true },
                            { name: 'Blog', href: '/blog' },
                            { name: 'Contact Us', href: '/contact' }
                        ].map((item) => (
                            item.dropdown ? (
                                <div key={item.name} className="relative group">
                                    <a
                                        href={item.href}
                                        className={`font-medium px-4 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${pathname === item.href ? 'text-white bg-primary-800 shadow-lg' : 'text-gray-700 hover:text-primary-800 hover:bg-primary-50'}`}
                                    >
                                        {item.name}
                                        <ChevronDownIcon className="w-3 h-3 ml-1" />
                                    </a>
                                    <div className="absolute left-0 top-full mt-1 min-w-72 bg-linear-to-br from-primary-50 via-white to-primary-100 border border-primary-200 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 p-3">
                                        <ul className="flex flex-col gap-1 divide-y divide-primary-100">
                                            {require("../utils/productData").AllProductsList.map((opt: { categoryName: string, categoryLabel: string }) => (
                                                <li key={opt.categoryLabel} className="group/item">
                                                    <a
                                                        href={`/product?category=${encodeURIComponent(opt.categoryLabel)}`}
                                                        className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 bg-white/80 hover:bg-primary-100 hover:text-primary-900 shadow-sm group-hover/item:shadow-md group-hover/item:scale-[1.03]"
                                                    >
                                                        <span className="font-semibold text-primary-950 text-base tracking-wide">{opt.categoryName}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <a key={item.name} href={item.href}
                                    className={`font-medium px-4 py-1 rounded-full transition-all duration-200 ${pathname === item.href
                                        ? 'text-white bg-primary-800 shadow-lg'
                                        : 'text-gray-700 hover:text-primary-800 hover:bg-primary-50'
                                        }`}>
                                    {item.name}
                                </a>
                            )
                        ))}
                    </nav>

                    {/* User Actions */}
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="flex items-center space-x-6">
                            <div className="cursor-pointer font-bold">
                                <Search className="h-5 w-5 text-primary-900" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="flex md:hidden flex-col p-2 space-y-1">
                        <span className="w-5 h-0.5 bg-gray transition-all"></span>
                        <span className="w-5 h-0.5 bg-gray transition-all"></span>
                        <span className="w-5 h-0.5 bg-gray transition-all"></span>
                    </button>
                </div>

            </div>
        </header>
    );
};


export default Header;