import { TrendingUp } from "lucide-react"
export default function Gridlayout() {
  return (
<>
<section className=" p-6 min-h-screen bg-[#ffffff]">
  <div>
  < button className="bg-cyan-50 flex items-center border px-6 py-2 rounded-lg hover:shadow-lg cursor-pointer transition  "> Trending<TrendingUp/> </button>
  </div>
  <div className="grid font-bold py-20 md:grid-flow-col lg:grid-rows-4 gap-4">
    <div className="row-span-4 outline-2 outline-white cursor-pointer bg-[url(https://i.pinimg.com/1200x/df/07/7b/df077bb75af0de92b6d6e0855e631e7a.jpg)] bg-cover bg-center rounded-lg shadow-md p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
      <p className="text-gray-700 mb-6 text-center">Discover our top-rated product of the month, loved by customers worldwide.</p> 
    </div>
    <div className="row-span-4 outline-2 outline-white bg-[url(https://i.pinimg.com/736x/b5/b9/ff/b5b9ffdbe40a52c0e7990d97b5d2bebe.jpg)] bg-cover bg-center rounded-lg shadow-md p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
      <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
      <p className="text-black mb-6 text-center">Check out the latest additions to our collection.</p>
    </div>
    <div className="row-span-4 outilne-1 outline-white py-20 bg-[url(https://i.pinimg.com/736x/c3/74/b9/c374b96e6a1a138ff64b644fdaf1f666.jpg)] bg-cover bg-center rounded-lg shadow-md p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
      <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
      <p className="text-black mb-6 text-center">Browse our most popular products loved by customers.</p>
    </div>
  </div>

</section>

</>
  )
}
