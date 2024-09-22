
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import InnerLayout from "@/app/InnerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filmon-Portfolio",
  description: "My portfolio",
  openGraph:{

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <InnerLayout>{children}</InnerLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
