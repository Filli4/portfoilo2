
import React from 'react';

import Hero from "@/components/Hero"; 
import Cards from "@/components/Cards"; 
import Footer from "@/components/Footer"; 



function Home() {
  return (
    <div className='flex justify-center items-center flex-col flex-wrap '>
      
      
      <Hero/>
      <h1 className='text-2xl font-semibold m-4'>Here are some of projects i did&rsquo;</h1>
      <p className='text-gray-600 m-4 w-2/4'>I just want to show some of the projects i did here on the front page&rsquo; You can go to <b><i>projects</i></b> page on the navbar if you want to see more or just hit the <b><i>More Info</i></b> to take you there&rsquo;</p>
      <Cards/>
      <Footer />
      
    </div>
  );
}

export default Home;
