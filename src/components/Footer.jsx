function Footer(params) {
    return(
    
         <div className="flex items-center justify-between p-4">
  
  <p className="text-gray-400">@copyright 2024 Filmon</p>
  <img src="https://pbs.twimg.com/profile_images/2606587238/8pnalgsjrr2k8p5jmbhy_200x200.png" alt="logo" className="h-12 w-12 rounded-xl" />
  <nav className="flex gap-4">
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">Instagram</a>
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">LinkedIN</a>
    <a href="http://#" className="text-gray-800 hover:text-blue-600 transition duration-300">Github</a>
  
  </nav>
</div>
   )
}
export default Footer;