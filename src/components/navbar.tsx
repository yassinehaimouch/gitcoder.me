"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/utils/constants";

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if scrolled to add background blur
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only render client-side to use pathname
  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-md bg-background/80"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with hover/focus effect */}
        <Link
          href="/"
          className="group relative rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
          aria-label="Home"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-300 rounded-full"></div>
          <Image
            className="rounded-full transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
            height={44}
            width={44}
            src="/assets/logo.PNG"
            alt="logo"
            priority
          />
        </Link>

        {/* Navigation links */}
        <div className="overflow-x-auto no-scrollbar">
          <ul className="flex items-center gap-1 sm:gap-2 md:gap-4 px-1">
            {navItems.map((item) => {
              const isActive = item.isExternal ? false : pathname === item.link;

              return (
                <li key={item.label}>
                  <Link
                    className={`py-2 px-3 rounded-md text-sm md:text-base capitalize font-medium transition-all duration-300 relative
                      ${
                        isActive
                          ? "text-secondary"
                          : "text-primary hover:text-accent"
                      }
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                    href={item.link}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
