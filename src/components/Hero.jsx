import React from "react";
import Image from "next/image";


function Hero(params) {
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 m-2 border-red-300  border-t-2 rounded-2xl border-b-2 bg-gray-100 justify-between p-4 gap-4 sm:gap-8 dark:bg-black">
  <div className="flex flex-col justify-center">

    <h1 className="text-3xl font-bold mb-4">Hello! My Name Is Filmon & Welcome To My Website</h1>

    <p className="text-lg text-gray-800 my-2 p-2 bg-white dark:bg-blue-500/15 border-x-2 dark:text-white rounded-lg">
  Currently, I am a student at <b>Chas Academy</b>, focusing on <big><b className="bg-gradient-to-r from-blue-300 to-red-300 text-xl p-1 rounded-lg">Frontend Development</b></big>. I have a particular interest in React and am eager to further enhance my skills and knowledge in this area.
</p>

  </div>
  
  <Image 
        src="/face2.jpg" 
        alt="placeholder" 
        width={500} 
        height={200} 
        className="w-62 sm:w-96 justify-self-center rounded-xl" 
      />
</div>

    )
}
export default Hero;