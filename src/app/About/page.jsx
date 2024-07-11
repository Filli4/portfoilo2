import React from 'react';
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"; 
import Image from 'next/image';

export default function About(params) {


  return(
    <>
    <div className=" flex flex-col justify-evenly ">

  <div className="grid grid-cols-1 rounded-2xl  justify-center items-center grid-rows-1 bg-gray-100  dark:bg-black">
  
  <div className="grid grid-cols-1 gap-4">
  <h1 className="text-3xl font-bold m-3 bg-gray-200  p-3 rounded-2xl border-x-lime-300 dark:bg-black  border-x-2 text-center">Hello! My Name Is Filmon & Welcome To My Website</h1>


  <div className='flex justify-center items-center border-red-300  border-b-2 mx-2 rounded-2xl flex-col sm:flex-row sm:justify-between  md:px-20  '>
    
    <p className="text-lg w-64  text-gray-800 dark:text-white/70  p-2  ">Currently I&apos;m a student&lsquo; studying FrontEnd at <b>Chasacademy</b> school&rsquo; I like React and would like to learn more about it&rsquo;</p>
   
    <img src="https://via.placeholder.com/800" alt="placeholder" className="w-64 rounded-2xl m-2 flex-wrap flex " />
  </div>
</div>

  
  

  <div className="w-fit justify-center items-center  rounded-xl flex flex-col m-4  dark:border-y-2 border-blue-500  p-2">
  <Image src="/contact_page_40dp_5084C1_FILL0_wght400_GRAD0_opsz40.png"
                alt="Card Image"
                width={30} 
                height={1} 
                className="w-24 sm:w-40 mb-4 " />
  <h2 className="text-xl font-semibold mb-4">CV</h2>
  <button className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-700 ">Download</button>
</div>

</div>

<Footer />

</div>
    
  



  

  


    </>
  )
}
