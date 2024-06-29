import Footer from "@/components/Footer"; 
import React from 'react';
import Cards from "@/components/Cards"

export default function About(params) {


  return(
    <div className="grid grid-rows-span-2 gap-7">
    <Cards/>
    <div className=" content-end  row-span-4 ">
    <Footer />
    </div>
    
    </div>
  )
}