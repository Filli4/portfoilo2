'use client';

import Navbar from '../components/Nav';

export default function InnerLayout({ children }) {


  return (
    <div suppressHydrationWarning>
      <Navbar suppressHydrationWarning />
      
      {children}
    </div>
  );
}
