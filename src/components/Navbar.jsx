import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const { global } = siteConfig;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-1">
                        <span className="font-display font-black text-2xl tracking-tighter text-primary">
                            {global.navbar.logoText}
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {global.navbar.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.href}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        {/* <div className="relative">
                            <input
                                className="pl-4 pr-10 py-2 rounded-full bg-gray-100 border-none text-sm w-64 focus:ring-2 focus:ring-primary placeholder-gray-400"
                                placeholder="Search for a place, city..." type="text" />
                            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
                        </div> */}
                        <button
                            onClick={() => window.open(`https://wa.me/${global.whatsapp}`, '_blank')}
                            className="bg-primary hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg"
                        >
                            WhatsApp
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {global.navbar.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
