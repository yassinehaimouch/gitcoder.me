"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/utils/constants";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Common background style for both header and mobile menu
  const bgStyle =
    isScrolled || mobileMenuOpen
      ? "backdrop-blur-md bg-background/80"
      : "bg-transparent";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? "py-3" : "py-5"
      } ${bgStyle}`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo with hover/focus effect */}
        <Link
          href="/"
          className="group relative rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
          aria-label="Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-300 rounded-full"></div>
          <Image
            className="rounded-full transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
            height={44}
            width={44}
            src="/assets/me.png"
            alt="logo"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation links - ONLY removed overflow-x-auto */}
        <div className="hidden md:block no-scrollbar">
          <ul className="flex items-center gap-1 sm:gap-2 px-1">
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
                      ${item.isExternal && "flex items-center gap-2"}
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                    href={item.link}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                    {item.isExternal && <GoArrowUpRight />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = item.isExternal ? false : pathname === item.link;

              return (
                <li key={item.label}>
                  <Link
                    className={`block py-2 px-3 rounded-md text-base capitalize font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-secondary bg-secondary/10"
                          : "text-primary hover:text-accent hover:bg-accent/10"
                      }
                      ${item.isExternal && "flex items-center gap-2"}
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
                    href={item.link}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.isExternal && <GoArrowUpRight />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
