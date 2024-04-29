"use client"

import Link from "next/link";

function Cards(params) {




    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8
       ">
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
    </div>
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
    </div>    
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
    </div>  
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
    </div>
    
  
</div>

    )
}
export default Cards;
