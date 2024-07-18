/* import Footer from "@/components/Footer"; 
import React from 'react';
import Cards from "@/components/Cards";

export default function Projects(params) {
  return (
    <div className="grid grid-rows-[auto-1dvh]">
      <Cards />
     
        <Footer />
      
    </div>
  );
}
 */
import Footer from "@/components/Footer"; 
import React from 'react';
import Cards from "@/components/Cards";

export default function Projects(params) {
  return (
    <div className=" grid grid-rows-1 lg:mt-24">
     
        <Cards />
    

      <Footer home="home m-3 lg:mt-3" />
    </div>
  );
}
