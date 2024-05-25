import React from 'react';
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"; 

export default function About(params) {


  return(
    <div className='flex flex-col justify-around'>
       <div className="mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-2 bg-gray-100 justify-between p-4 gap-4 lg:gap-8">
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl font-bold mb-4">Hello! My Name Is Filmon & Welcome To My Website</h1>
    <p className="text-lg text-gray-800">Currently Im A Student, Studying About <big> <b>FrontEnd</b></big> At <b>Chasacademy</b> School. 
        I Like React And Would Like To Learn More About React. </p>
  </div>
  
  <img src="https://via.placeholder.com/800" alt="placeholder" className="w-full lg:w-96 justify-self-center rounded-2xl" />
</div>
    
    </div>
    <div className='w-full  flex justify-around'>
  <div className="w-fit justify-center items-center  rounded-xl flex flex-col m-4 border-2  p-2">
  <img src="https://via.placeholder.com/100" alt="Card Image" className="w-40 mb-4 rounded-full" />
  <h2 className="text-xl font-semibold mb-4">Cover Letter</h2>
  <button className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-700 ">Download</button>
</div>

<div className="w-fit justify-center items-center  rounded-xl flex flex-col m-4 border-2  p-2">
  <img src="https://via.placeholder.com/100" alt="Card Image" className="w-40 mb-4 rounded-full" />
  <h2 className="text-xl font-semibold mb-4">CV</h2>
  <button className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-700 ">Download</button>
</div>
</div>

  
    <Footer/> 
      

    </div>
  )
}
