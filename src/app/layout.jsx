
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import InnerLayout from "@/components/InnerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filmon-Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <InnerLayout>{children}</InnerLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

/* import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";

import { ThemeProvider } from "next-themes";
import {ThemeContext} from 'react'
import {useContext} from 'react'

import { useTheme } from 'next-themes';

export const metadata = {
  title: "Filmon-Portfolio",
  description: "My portfolio",
};

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
 
const{switchDark, switchLight, theme}= useContext(ThemeContext)
  return (
    <html  lang="en">
      <body>
        <ThemeProvider defaultTheme="system" attribute="class">

        <Navbar/>
        
        {children}
        <button 
  onClick={theme=== 'dark'? switchLight:switchDark}
  >
    {theme ==='dark'? 'Light': 'Dark'}
  </button>
        </ThemeProvider>
      </body>
    </html>
  );
}
 */
