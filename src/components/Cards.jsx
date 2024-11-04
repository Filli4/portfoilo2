"use client"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const cardData = [
  {
    title: "To Do List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    more:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus, dolorem ratione fugit quibusdam perferendis illum consectetur corporis porro reprehenderit error a, explicabo nulla autem exercitationem ea. Cupiditate facere molestias earum rem velit atque quibusdam at. Similique maxime at eveniet nostrum provident rem alias, non architecto sed molestias ipsa maiores aspernatur, temporibus quas porro eos velit nesciunt ullam commodi amet praesentium corporis saepe. Reiciendis placeat ex iure quibusdam asperiores voluptate ducimus enim corporis odit, expedita commodi provident praesentium quos eius fugit, voluptatibus nulla deleniti, aliquid sequi accusantium. Autem, ab. Modi nulla quod reiciendis nostrum dolorum ducimus maxime vero ad hic!",
    image: "/todo-list-icon.jpg",
    link: "https://todolist-redux-delta.vercel.app/"
  },
  {
    title: "Black Jack",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad ...",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image: "/blackjack.jpg",
    link: "https://black-jack-exp.vercel.app/"
  },
  {
    title: "Movie Search",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad . . .",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image:"/vfx-visual-effects-vanas.jpg",
    link: "https://exam-movie-site-hsgp0tsta-filmons-projects-b17674df.vercel.app/"
  },
  {
    title: "Clothing Store",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad . . .",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image: "/clotheStore.png",
    link: "https://e-handel-2.vercel.app/"
  },
  {
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad . . .",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image: "/svgviewer-png-output.png",
    image2:"/comming.jpeg",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 mx-2 xl:grid-cols-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 dark:border-x-2 dark:shadow-emerald-700 dark:shadow-l dark:rounded-3xl dark:border-lime-200/35 rounded-lg shadow-md p-4 grid grid-rows-1 content-center">
         <div className="place-content-center flex justify-center items-center"> <Image 
            src={card.image2 ? card.image2 : card.image} 
            alt="Card Image" 
            width={400} 
            height={200} 
            className="place-content-center my-4 rounded-xl" 
          /></div>
          <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          <div className="grid grid-cols-2 justify-items-center items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300" onClick={() => toggleDetails(index)}>More Info</button>
            {showDetails[index] && (
              <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-600 ease-in-out ${showDetails[index] ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => toggleDetails(index)}>
                 <div className="overflow-y-auto scroll-m-1 dark:bg-black dark:text-white dark:border-y-[3px] dark:rounded-3xl p-4 bg-white bg-opacity-95 rounded-lg max-h-[80vh] w-4/5 sm:w-3/4 lg:w-2/3 xl:w-1/2" onClick={(e) => e.stopPropagation()}>
                  <div className="grid place-items-center">
                    <Image 
                      src={card.image2 ? card.image2 : card.image} 
                      alt="Card Image" 
                      width={200} 
                      height={120} 
                      className="w-fit my-4 rounded-3xl" 
                    />
                    <h2 className="text-xl font-semibold mb-4 text-center">{card.title}</h2>
                    <p className="text-gray-600 text-start dark:text-gray-300 mb-4 p-4 ">{card.more}</p>
                    <button className="font-semibold bg-red-700  place-self-stretch sm:place-self-center sm:w-60 hover:bg-red-400 text-white px-4 py-2 rounded-full" onClick={() => toggleDetails(index)}>Close</button>
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
  );
}

export default Cards;
