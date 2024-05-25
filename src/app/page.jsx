
import React from 'react';

import Hero from "@/components/Hero"; 
import Cards from "@/components/Cards"; 
import SkillPic from "@/components/Skill-First"; 
import Footer from "@/components/Footer"; 



function Home() {
  return (
    <div>
      
      
      <Hero/>
      <h1 className='text-2xl font-semibold m-4'>Here are some of projects i did. </h1>
      <p className='text-gray-600 m-4 w-2/4'>I just want to show some of the projects i did here on the front page. You can go to <b><i>projects</i></b> page on the navbar if you want to see more or just hit the <b><i>More Info</i></b> to take you there.</p>
      <Cards/>
      <div className='bg-gray-100 '>
        
      <div className='flex flex-col justify-center items-center '>
      <h2 className='text-3xl p-2 m-2 mt-4 shadow-md font-semibold'>MY SKILLS</h2>
      <p className='text-gray-600 m-4 w-2/4'>I have learned and used this languages to make my projects. I love some of the languages but some i find hard. Right now im very intressted to learn <b>React with Next.JS</b>.</p>
      </div>
      <SkillPic/>
      <Footer/>
      </div>
      
    </div>
  );
}

export default Home;
