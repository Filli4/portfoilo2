"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // Detect current route

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu when clicking outside OR clicking the "X" in hamburger menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Utility function to detect the active link
  const isActive = (path) => pathname === path;

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50">
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

      {/* Hamburger Menu Button - Mobile View */}
      <button
        className="sm:hidden p-2 rounded-md text-gray-600 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={toggleMenu}
      >
        {!isMenuOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
        {isMenuOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      {/* Navbar Links - Desktop View */}
      <nav
        ref={menuRef}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 absolute sm:static bg-white backdrop-blur-lg sm:bg-transparent w-full sm:w-auto top-16 sm:top-0 left-0 p-6 sm:p-0 shadow-lg rounded-b-3xl sm:shadow-none transition-all dark:bg-gray-950`}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)} // Close on link click
          className={`nav-link ${isActive("/") ? "active-link" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/Projects"
          onClick={() => setIsMenuOpen(false)} // Close on link click
          className={`nav-link ${isActive("/Projects") ? "active-link" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/About"
          onClick={() => setIsMenuOpen(false)} // Close on link click
          className={`nav-link ${isActive("/About") ? "active-link" : ""}`}
        >
          About Me
        </Link>
        <Link
          href="/Skills"
          onClick={() => setIsMenuOpen(false)} // Close on link click
          className={`nav-link ${isActive("/Skills") ? "active-link" : ""}`}
        >
          Skills
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21.7 13A9 9 0 1111 2.3a7 7 0 0010.7 10.7z"></path>
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
