import React from 'react';
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"; 

export default function About(params) {


  return(
    <div className='flex flex-col justify-around'>
       <div className="mb-6">
    <Hero/>
    
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
