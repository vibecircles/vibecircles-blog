import { config } from "@/config";
import { Button } from "./ui/button";
import { Rss, Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt={config.organization}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">
                {config.organization}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {config.description}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-pink-400 hover:bg-gray-800">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 hover:bg-gray-800">
                <Linkedin size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Github size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/rss" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1">
                  <Rss size={14} />
                  <span>RSS Feed</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} {config.organization}. All rights reserved.
          </div>
          <div className="text-xs text-gray-400">
            <Link
              href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
              className="hover:text-blue-400 transition-colors"
            >
              Powered by Wisp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
