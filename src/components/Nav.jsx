import React from 'react';

function Navbar() {


  return (
    <div className="flex items-center justify-between p-4">
  <img src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png" alt="logo" className="h-12 w-12 rounded-full" />
  <nav className="flex gap-4">
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">Projects</a>
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">About Me</a>
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">Skills</a>
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
  </nav>
</div>

  );
}

export default Navbar; 
