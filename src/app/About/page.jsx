
import React from 'react';
import Hero from "@/components/Hero";
import Footer from "@/components/Footer"; 
import Image from 'next/image';
import DownloadButton from "@/components/DownloadButton";

export default function About() {
  return (
    <div className=" grid grid-cols-1  justify-center items-center   dark:bg-black">
      <div className='flex justify-center mt-12 items-center border-red-300 border-b-2 mx-2 rounded-2xl flex-col sm:flex-row sm:justify-between '>
        <p className="text-lg  text-gray-800 m-10 lg:w-[700px] dark:text-white/70 p-2">
        I&apos;m really excited about diving deeper into React and getting a better handle on this awesome library. I also want to learn how to use React with Next.js to make the most of both. My aim is to boost my skills and use them to build cool and dynamic web apps.
        </p>

        <Image 
        src="/face2.jpg" 
        alt="placeholder" 
        width={500} 
        height={200} 
        priority
        className="w-60 sm:w-72 md:w-96 lg:mr-36 m-4 rounded-xl" 
      />
      </div>
      <div className="w-fit justify-center items-center rounded-xl flex flex-col m-4 dark:border-y-2 border-blue-500 p-2">
        <Image 
          src="/svgviewer-output.svg"
          alt="Card Image"
          width={34} 
          height={1} 
          
          className="w-40  mb-4 dark:bg-white rounded-2xl" 
        />
        <h2 className="text-xl font-semibold mb-4">CV</h2>
        <DownloadButton />
      </div>
      <Footer home="home m-3 lg:mt-6" />
    </div>
  );
}
