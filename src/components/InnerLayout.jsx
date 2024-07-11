'use client';

import Navbar from './Nav';

export default function InnerLayout({ children }) {


  return (
    <>
      <Navbar />
      
      {children}
    </>
  );
}
