"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef;
  const pathname = usePathname(); // Detect current route

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50 transition-all">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png"
          alt="logo"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          Filmon
        </span>
      </Link>

      {/* Hamburger Button - Mobile */}
      <button
        className="sm:hidden p-2 rounded-md text-gray-600 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </button>

      {/* Navbar Links */}
      <nav
        useRef={menuRef}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto p-6 sm:p-0 bg-white dark:bg-gray-950 shadow-lg sm:shadow-none transition-all duration-300 rounded-b-3xl sm:rounded-none`}
      >
        {["Home", "Projects", "About", "Skills"].map((item, index) => {
          const path = item === "Home" ? "/" : `/${item.replace(/\s+/g, "")}`;
          return (
            <Link
              key={index}
              href={path}
              className={`px-4 py-2 text-lg font-medium transition ${
                pathname === path ? "text-blue-500" : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600 dark:hover:text-blue-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {resolvedTheme === "dark" ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21.7 13A9 9 0 1111 2.3a7 7 0 0010.7 10.7z"></path>
              </svg>
            )}
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
