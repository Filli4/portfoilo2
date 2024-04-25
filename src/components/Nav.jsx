"use client"
import Link from 'next/link';
import React from 'react';
/* import { Projects } from "@/app/Projects/page";
import { AboutMe } from "@/app/AboutME/page";
import { Skills } from "@/app/Skills/page";
import {Contact} from "@/app/Contact/page"; */



function Navbar() {


  return (
    <div className="flex items-center justify-between p-4">
  <img src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png" alt="logo" className="h-12 w-12 rounded-full" />
  <nav className="flex gap-4">
    <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
    <Link href="Projects" className="text-gray-800 hover:text-blue-600 transition duration-300">Projects</Link>
    <Link href="About" className="text-gray-800 hover:text-blue-600 transition duration-300">About Me</Link>
    <Link href="Skills" className="text-gray-800 hover:text-blue-600 transition duration-300">Skills</Link>
    <Link href="Contact" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link>
  </nav>
</div>

  );
}

export default Navbar; 
