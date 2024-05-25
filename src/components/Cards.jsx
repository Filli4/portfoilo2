"use client"

import Link from "next/link";

function Cards(params) {




    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-8
       ">
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">To Do List</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <div className=" grid grid-cols-2 justify-items-center">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Todo-List</h2>
      <p className="text-gray-600">In this project i did a todo list. its a simple project for a quick list you want to do. 
                                   You can Add a list, you can hit the done button or even remove the list that you want.   </p>
      <div className=" grid grid-cols-2 justify-items-center">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>    
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <div className=" grid grid-cols-2 justify-items-center">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>  
    <div  className="bg-white rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit quia illo quo at ad.</p>
      <div className=" grid grid-cols-2 justify-items-center">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>
    
  
</div>

    )
}
export default Cards;
