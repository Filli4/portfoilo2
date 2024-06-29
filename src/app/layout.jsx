import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Filmon-Portfolio",
  description: "My portfolio",
};

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body>
        
        <Navbar/>
        
        {children}
        {/* <Footer/> */}
        
      </body>
    </html>
  );
}
