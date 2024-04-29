
import React from 'react';

import Hero from "@/components/Hero"; 
import Cards from "@/components/Cards"; 
import SkillPic from "@/components/Skill-First"; 
import Footer from "@/components/Footer"; 



function Home() {
  return (
    <div>
      
      
      <Hero/>
      <h1 className='text-2xl font-semibold m-4'>Lorem ipsum dolor sit amet.</h1>
      <p className='text-gray-600 m-4 w-2/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore libero quam laborum in. Fuga magni dolor dolore dolorum. Rerum.</p>
      <Cards/>
      <div className='bg-gray-100 '>
        
      <div className='flex flex-col justify-center items-center m-4 '>
      <h2 className='text-3xl font-semibold'>MY SKILLS</h2>
      <p className='text-gray-600 m-4 w-2/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores porro harum adipisci laudantium omnis! Quam suscipit consectetur laudantium voluptates minima.</p>
      </div>
      <SkillPic/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default Home;
