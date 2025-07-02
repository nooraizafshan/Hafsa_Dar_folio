// components/ui/navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/publications", label: "Publications" },
  ];

  return (
    <nav className="bg-teal-600 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left - Name */}
        <div className="text-xl font-semibold hover:text-teal-100 transition-colors duration-300">
          <Link href="/">Hafsa S Dar</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-teal-100 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-100 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <SocialIcons />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-teal-200 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-4 mt-4">{<SocialIcons />}</div>
        </div>
      )}
    </nav>
  );
}

function SocialIcons() {
  return (
    <>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-teal-700 transition-colors duration-300 group"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-teal-700 transition-colors duration-300 group"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-teal-700 transition-colors duration-300 group"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href="mailto:your@email.com"
        className="p-2 rounded-full hover:bg-teal-700 transition-colors duration-300 group"
        aria-label="Email"
      >
        <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </>
  );
}
