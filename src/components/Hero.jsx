import React from "react";
import Image from "next/image";


function Hero(params) {
    return(
      <div className="grid grid-cols-1 sm:grid-cols-2 m-2 border-red-300 border-t-2 rounded-2xl border-b-2 bg-gray-100 justify-between p-4 gap-4 sm:gap-8 dark:bg-black   ">

  {/* Left side - Text content */}
  <div className="flex flex-col justify-center space-y-4">
    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105">
      Hello! My Name Is Filmon & Welcome To My Website
    </h1>

    <p className="text-lg text-gray-800 my-2 p-2 bg-white dark:bg-blue-500/15 border-x-2 dark:text-white rounded-lg shadow-sm hover:shadow-xl hover:bg-gray-200 dark:hover:bg-blue-500/20 transition-all duration-300 transform hover:translate-y-2">
      Currently, I am a student at <b>Chas Academy</b>, focusing on 
      <big><b className="bg-gradient-to-r from-blue-300 to-red-300 text-xl p-1 rounded-lg">Frontend Development</b></big>. 
      I have a particular interest in React and am eager to further enhance my skills and knowledge in this area.
    </p>
  </div>

  <div className="relative p-6 rounded-3xl shadow-2xl border backdrop-blur-md hover:scale-95 transition-all duration-500 ease-in-out transform overflow-hidden">

  {/* Wave Effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/55 to-amber-200/40 animate-wave rounded-full blur-sm"></div>

  {/* Image */}
  <Image 
    src="/face2.jpg" 
    alt="Striking face image" 
    width={150} 
    height={100} 
    className="w-full sm:w-96 mx-auto rounded-2xl shadow-lg ring-4 ring-white/10 transition-all duration-300 transform hover:scale-90 hover:translate-y-3"
  />
</div>



</div>

    

    )
}
export default Hero;