

import Link from "next/link";

function Footer({home}) {
  return (
    <div className={`flex items-center h-fit justify-evenly ${home}`}>
      <p className="text-sm">&copy; {new Date().getFullYear()} Filmon Elias</p>
      <img
          src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png"
          alt="logo"
          className="h-12 w-12 rounded-xl hidden sm:block"
        />
      <div className="flex items-center ">
        <Link href="https://github.com/Filli4" className="hover:bg-gray-500 rounded-lg p-2">GitHub</Link>
        <Link href="https://www.linkedin.com/in/filmon-elias-388b341a0/" className="hover:bg-blue-400 rounded-lg p-2">LinkedIn</Link>
      </div>
    </div>
  );
}

export default Footer;

