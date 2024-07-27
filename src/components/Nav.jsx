'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div suppressHydrationWarning className="flex items-center justify-between p-4 dark:bg-black-500 flex-wrap">
      <img src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png" alt="logo" className="h-12 w-12 rounded-full" />
      
      <button
        className="sm:hidden  rounded-full transition duration-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg className='ml-11 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2zm0 6h16a1 1 0 110 2H4a1 1 0 010-2z"></path>
          </svg>
        )}
      </button>
      <nav className={`flex-col sm:flex sm:flex-row sm:items-center gap-4 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex ` }>
      <Link href="/" className="text-gray-800 dark:text-gray-50 dark:hover:bg-blue-800 dark:hover:rounded-lg dark:p-2 hover:text-black hover:bg-blue-400 p-2 rounded-lg">Home</Link>
<Link href="/Projects" className="text-gray-800 dark:text-gray-50 dark:hover:bg-blue-800 dark:hover:rounded-lg dark:p-2 hover:text-black hover:bg-blue-400 p-2 rounded-lg">Projects</Link>
<Link href="/About" className="text-gray-800 dark:text-gray-50 dark:hover:bg-blue-800 dark:hover:rounded-lg dark:p-2 hover:text-black hover:bg-blue-400 p-2 rounded-lg">About Me</Link>
<Link href="/Skills" className="text-gray-800 dark:text-gray-50 dark:hover:bg-blue-800 dark:hover:rounded-lg dark:p-2 hover:text-black hover:bg-blue-400 p-2 rounded-lg">Skills</Link>

        <button 
        className=" rounded-sm duration-300 items-center "
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (<div>
            <svg className='justify-center items-center ' xmlns="http://www.w3.org/2000/svg" viewBox="-15 -4 110 100" width="34" height="35" fill="currentColor">
              <path d="M45 68c-12.682 0-23-10.317-23-23 0-12.682 10.318-23 23-23 12.683 0 23 10.318 23 23 0 12.683-10.317 23-23 23zm0-40c-9.374 0-17 7.626-17 17s7.626 17 17 17 17-7.626 17-17-7.626-17-17-17zM45 17.556c-1.657 0-3-1.343-3-3V3c0-1.657 1.343-3 3-3s3 1.343 3 3v11.556c0 1.657-1.343 3-3 3zM45 90c-1.657 0-3-1.343-3-3V75.444c0-1.657 1.343-3 3-3s3 1.343 3 3V87c0 1.657-1.343 3-3 3zM14.556 48H3c-1.657 0-3-1.343-3-3s1.343-3 3-3h11.556c1.657 0 3 1.343 3 3s-1.343 3-3 3zM87 48H75.444c-1.657 0-3-1.343-3-3s1.343-3 3-3H87c1.657 0 3 1.343 3 3s-1.343 3-3 3zM66.527 26.473c-.768 0-1.535-.293-2.121-.878-1.172-1.172-1.172-3.071 0-4.243l8.171-8.171c1.172-1.172 3.07-1.171 4.242 0 1.172 1.172 1.172 3.071 0 4.243l-8.171 8.171c-.586.586-1.353.878-2.121.878zM15.302 77.698c-.768 0-1.536-.293-2.121-.879-1.172-1.171-1.172-3.071 0-4.242l8.171-8.171c1.171-1.172 3.071-1.172 4.242 0 1.172 1.171 1.172 3.071 0 4.242l-8.171 8.171c-.585.586-1.353.879-2.121.879zM23.473 26.473c-.768 0-1.536-.293-2.121-.878l-8.171-8.171c-1.172-1.172-1.172-3.071 0-4.243 1.172-1.172 3.072-1.171 4.243 0l8.171 8.171c1.172 1.172 1.172 3.071 0 4.243-.586.585-1.353.878-2.121.878zM74.698 77.698c-.768 0-1.535-.293-2.121-.879l-8.171-8.171c-1.172-1.171-1.172-3.071 0-4.242 1.172-1.172 3.07-1.172 4.242 0l8.171 8.171c1.172 1.171 1.172 3.071 0 4.242-.586.586-1.353.879-2.121.879z"/>
            </svg>
          </div>
        ) : (
          <div>
          <svg className='justify-center items-center ' xmlns="http://www.w3.org/2000/svg" viewBox="-15 -4 110 100" width="34" height="35" fill="currentColor">
            <path d="M87.823 60.7c-.463-.423-1.142-.506-1.695-.214-15.834 8.398-35.266 2.812-44.232-12.718-8.966-15.53-4.09-35.149 11.101-44.665.531-.332.796-.963.661-1.574-.134-.612-.638-1.074-1.259-1.153-9.843-1.265-19.59.692-28.193 5.66C13.8 12.041 6.356 21.743 3.246 33.35S1.732 57.08 7.741 67.487c6.008 10.407 15.709 17.851 27.316 20.961C38.933 89.486 42.866 90 46.774 90c7.795 0 15.489-2.044 22.42-6.046 8.601-4.966 15.171-12.43 18.997-21.586.61-1.453-.238-2.12-.698-2.543z"></path>
          </svg></div>
        )}
      </button>
      </nav>
      
    </div>
  );
}

export default Navbar;
