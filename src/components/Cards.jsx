/* "use client"
import { useState } from "react";
import Link from"next/link";
import Footer from "./Footer";
import "./Card.css";

function Cards(params) {

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
      setShowDetails(!showDetails);
  };


    return(<>

      



       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mt-8 mb-4 
       mx-2 xl:grid-cols-4 ">

    <div  className="bg-white dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35  rounded-lg shadow-md p-4 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">To Do List</h2>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit&rsquo; Eligendi suscipit quia illo quo at ad&rsquo;</p>
      
      <div className=" grid grid-cols-2 justify-items-center items-end">
      
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300" onClick={toggleDetails}>More Info</button>
      {showDetails && (
         <div className="popout-container flex justify-center items-center ">
         <div className="details flex flex-col justify-center items-center ml-16">
           <div className="bg-white rounded-t-md p-4">
             <h2 className="text-xl font-semibold mb-4">To Do List</h2>
             <p className="text-gray-600 mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad</p>
             <button className="font-semibold text-l bg-slate-400 px-4 py-2 rounded" onClick={toggleDetails}>Close</button>
           </div>
         </div>
       </div>
       
       )}
      
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>
    
    <div  className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Todo-List</h2>
      <p id="" className="text-gray-600 text-wrap min-h-28 dark:text-gray-300">In this project i did a todo list&rsquo; it&apos;s a simple project for a quick list you want to do&rsquo; 
                                   You can Add a list&lsquo; you can hit the done button or even remove the list that you want&rsquo;   </p>
    
      <div className=" grid grid-cols-2 justify-items-center items-end">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href=" https:> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>    
    
    <div  className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Black-Jack</h2>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad</p>
    
      <div className=" grid grid-cols-2 justify-items-center items-end">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">More Info</button>
      </Link>
      <Link href="https://black-jack-rbe1bldvy-filmons-projects-b17674df.vercel.app/" target="_blank"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>  

    
    <div  className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35 ">
      <img src="https://via.placeholder.com/400" alt="Card Image" className="w-full mb-4  rounded-t-lg " />
      <h2 className="text-xl font-semibold mb-4">Project Name</h2>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad</p>
      
      <div className=" grid grid-cols-2 justify-items-center items-end">
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300" >More Info</button>
      </Link>
      <Link href="/Projects"> 
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
      </Link></div>
    </div>
    
      
</div>
</>
    )
}
export default Cards;
 */
"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import "./Card.css";

const cardData = [
  {
    title: "To Do List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    image: "https://via.placeholder.com/400",
    link: "https://todolist-redux-delta.vercel.app/"
  },
  {
    title: "Black Jack",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    image: "https://via.placeholder.com/400",
    link: "https://black-jack-rbe1bldvy-filmons-projects-b17674df.vercel.app/"
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    image: "https://via.placeholder.com/400",
    link: "https://todolist-redux-delta.vercel.app/"
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    image: "https://via.placeholder.com/400",
    link: "https://todolist-redux-delta.vercel.app/"
  }
];

function Cards() {
  const [showDetails, setShowDetails] = useState(cardData.map(() => false));

  const toggleDetails = (index) => {
    setShowDetails((prev) => {
      const newDetails = [...prev];
      newDetails[index] = !newDetails[index];
      return newDetails;
    });
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 mx-2 xl:grid-cols-4">
      
      {cardData.map((card, index) => (
        <div key={index} className="bg-white dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35 rounded-lg shadow-md p-4">
          <img src={card.image} alt="Card Image" className="w-full mb-4 rounded-t-lg" />
          <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          <div className="grid grid-cols-2 justify-items-center items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300" onClick={() => toggleDetails(index)}>More Info</button>
            {showDetails[index] && (
              <div className="popout-container flex justify-center items-center">
                <div className="details flex flex-col justify-center items-center ml-16">
                  <div className="bg-white rounded-t-md p-4">
                    <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <button className="font-semibold text-l bg-slate-400 px-4 py-2 rounded" onClick={() => toggleDetails(index)}>Close</button>
                  </div>
                </div>
              </div>
            )}
            <Link href={card.link} target="_blank">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">Web Site</button>
            </Link>
          </div>
        </div>
      ))}
     
    </div>
 
     </>
  );
}

export default Cards;
