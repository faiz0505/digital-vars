"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Owners", href: "#owners" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 z-50">
        <Image
          src="/logo.jpg"
          alt="Agencie"
          height={60}
          width={60}
          className=""
        />
        <span className="font-semibold text-lg tracking-tight">
          Digital Vars
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
        {navItems.map((nav) => (
          <li key={nav.href}>
            <Link href={nav.href} className="relative group transition-all">
              {nav.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <Button>Contact</Button>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden flex flex-col justify-center items-center h-10 w-10 bg-black rounded-xl cursor-pointer z-50 gap-1"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <motion.div
          animate={isMenuOpen ? { rotate: 45, y: 2.6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-0.5 bg-white rounded-sm origin-center"
        />

        <motion.div
          animate={isMenuOpen ? { rotate: -45, y: -2.6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-0.5 bg-white rounded-sm origin-center"
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 z-40"
          >
            {navItems.map((nav, index) => (
              <motion.div
                key={nav.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={nav.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-900 hover:text-black transition-all"
                >
                  {nav.label}
                </Link>
              </motion.div>
            ))}

            <Button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-black text-white hover:bg-gray-800 px-6 py-3"
            >
              Contact
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
