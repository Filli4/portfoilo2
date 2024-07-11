"use client";

function Footer() {
  return (
    < >
      <div className="flex items-center justify-evenly p-6">
        <p className="text-gray-400">© 2024 Filmon</p>
        <img
          src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png"
          alt="logo"
          className="h-12 w-12 rounded-xl hidden sm:block"
        />
        <nav className="flex gap-4 text-gray-800 transition duration-300 dark:text-white">
          <a href="https://www.linkedin.com/feed/" className="hover:bg-blue-400 rounded-lg p-3">
            LinkedIN
          </a>
          <a href="https://github.com/Filli4" className="hover:bg-gray-400 rounded-lg p-3">
            Github
          </a>
        </nav>
      </div>
    </>
  );
}

export default Footer;
