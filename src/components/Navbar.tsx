"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Home, Users, } from "lucide-react";
import { config } from "@/config";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-sky-500/95 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={config.organization}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white hidden sm:block">
              {config.organization}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              href="/category" 
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Users size={18} />
              <span>Categories</span>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://vibecircles.co.za/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Join Now
            </Button>
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link 
                href="/category" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <Users size={18} />
                <span>Categories</span>
              </Link>
              <div className="pt-4 border-t border-gray-700">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
