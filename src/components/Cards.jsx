"use client"
import { useState } from "react";
import Link from "next/link";
import "./Card.css";

const cardData = [
  {
    title: "To Do List",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a . . .",
    image: "https://via.placeholder.com/400",
    link: "https://todolist-redux-delta.vercel.app/"
  },
  {
    title: "Black Jack",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad ...",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image: "https://via.placeholder.com/400",
    link: "https://black-jack-rbe1bldvy-filmons-projects-b17674df.vercel.app/"
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad . . .",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
    image: "https://via.placeholder.com/400",
    link: "https://todolist-redux-delta.vercel.app/"
  },
  {
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi suscipit quia illo quo at ad . . .",
    more:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quas minima delectus nostrum corporis temporibus, possimus iste quae pariatur a.",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4 mx-2 xl:grid-cols-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white dark:bg-gray-700/[30%] dark:border-x-4 dark:rounded-3xl dark:border-lime-200/35 rounded-lg shadow-md p-4">
          <img src={card.image} alt="Card Image" className="w-full mb-4 rounded-t-lg" />
          <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          <div className="grid grid-cols-2 justify-items-center items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300" onClick={() => toggleDetails(index)}>More Info</button>
            {showDetails[index] && (
              <div className={`popout-container  ${showDetails[index] ? 'active' : ''}`} onClick={() => toggleDetails(index)}>
                <div className="details dark:bg-black  dark:text-white dark:border-y-[3px] dark:rounded-3xl" onClick={(e) => e.stopPropagation()}>
                  <img src={card.image} alt="Card Image" className="w-full mb-4 rounded-t-lg" />
                  <h2 className="text-xl font-semibold  mb-4">{card.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{card.more} </p>
                  <button className="font-semibold " onClick={() => toggleDetails(index)}>Close</button>
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
