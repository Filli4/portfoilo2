/* 
import React from 'react';

import Hero from "@/components/Hero"; 
import Cards from "@/components/Cards"; 
import Footer from "@/components/Footer"; 



function Home() {

  


  return (
    <div className='  items-center flex-col flex-wrap '>
      
      
      <Hero/>
      <h1 className='text-2xl font-semibold m-4 '>Here are some of projects i did&rsquo;</h1>
      <p className='text-gray-600 m-4 w-2/4'>I just want to show some of the projects i did here on the front page&rsquo; You can go to <b><i>projects</i></b> page on the navbar if you want to see more or just hit the <b><i>More Info</i></b> to take you there&rsquo;</p>
      <Cards/>

      
     
        
      
    </div>
  );
}

export default Home;
 */
import React from 'react';
import Hero from "@/components/Hero"; 
import Cards from "@/components/Cards"; 
import Footer from "@/components/Footer"; 

function Home() {
  return (
    <div className='items-center justify-center flex-col flex-wrap'>
      <Hero />
      <h1 className='text-2xl font-semibold m-4 items-center justify-center'>Highlighted Projects Portfolio</h1>
<p className='text-gray-600 m-4 md:w-3/4  lg:w-2/4 items-center justify-center'>
  Below are some of the key projects I have completed. For a detailed overview of each project, click on <b>More Info</b>. To visit and interact with the project directly, click <b>Web Site</b>. To explore additional projects, please visit the <b><i>Projects</i></b> page via the navigation bar.
</p>
      <Cards />
      <Footer home="home m-6" />
    </div>
  );
}

export default Home;
