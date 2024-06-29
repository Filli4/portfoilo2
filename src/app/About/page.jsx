import React from 'react';
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"; 

export default function About(params) {


  return(
    <>
    <div className=" flex flex-col justify-evenly ">

  <div className="grid grid-cols-1 rounded-2xl  justify-center items-center grid-rows-1 bg-gray-100 ">
  
  <div className="grid grid-cols-1 gap-4">
  <h1 className="text-3xl font-bold m-6 bg-gray-200 rounded-full p-9 border-x-lime-300   border-x-2 text-center">Hello! My Name Is Filmon & Welcome To My Website</h1>
  <div className='flex justify-between border-red-300  border-2 mx-2 rounded-2xl'>
    <p className="text-lg text-gray-800 w-2/5 flex-wrap p-2 h-fit mx-24 my-32">Currently I&apos;m a student&lsquo; studying FrontEnd at <b>Chasacademy</b> school&rsquo; I like React and would like to learn more about it&rsquo;</p>
    <img src="https://via.placeholder.com/800" alt="placeholder" className="w-96 rounded-2xl m-4" />
  </div>
</div>

  
  

  <div className="w-fit justify-center items-center  rounded-xl flex flex-col m-4 border-2 border-red-300  p-2">
  <img src="https://via.placeholder.com/100" alt="Card Image" className="w-40 mb-4 rounded-full" />
  <h2 className="text-xl font-semibold mb-4">CV</h2>
  <button className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-700 ">Download</button>
</div>

</div>

<Footer />

</div>
    
  



  

  


    </>
  )
}
