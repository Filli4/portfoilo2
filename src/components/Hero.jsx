function Hero(params) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2 bg-gray-100 justify-between p-4 gap-4 lg:gap-8">
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit, amet</h1>
    <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quisquam?</p>
  </div>
  
  <img src="https://via.placeholder.com/800" alt="placeholder" className="w-full lg:w-96 justify-self-center rounded-2xl" />
</div>

    )
}
export default Hero;