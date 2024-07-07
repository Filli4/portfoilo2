function Hero(params) {
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 m-2 border-red-300  border-t-2 rounded-2xl border-b-2 bg-gray-100 justify-between p-4 gap-4 sm:gap-8">
  <div className="flex flex-col justify-center">

    <h1 className="text-3xl font-bold mb-4">Hello! My Name Is Filmon & Welcome To My Website</h1>

    <p className="text-lg text-gray-800 my-2 p-2 bg-white rounded-lg">Currently I&apos;m A Student&lsquo; Studying About <big> <b className="bg-gradient-to-r from-blue-300 text-xl to-red-300 p-1 rounded-lg ">FrontEnd</b></big> At <b>Chasacademy</b> School&rsquo;
        I Like React And Would Like To Learn More About React&rsquo; </p>
  </div>
  
  <img src="https://via.placeholder.com/800" alt="placeholder" className="w-72 sm:w-96 justify-self-center rounded-2xl" />
</div>

    )
}
export default Hero;