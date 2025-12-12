import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Gridlayout() {
  const navigate = useNavigate();

  return (
    <section className="p-6 min-h-screen bg-white">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate('/shop')}
          className="bg-teal-50 text-teal-700 font-bold flex items-center gap-2 border border-teal-100 px-6 py-2 rounded-full hover:bg-teal-100 hover:shadow-md cursor-pointer transition-all"
        > 
          Trending <TrendingUp size={18}/> 
        </button>
      </div>

      <div className="grid font-bold py-10 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Card 1: Featured */}
        <div 
          onClick={() => navigate('/shop')}
          className=" cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="absolute inset-0 bg-[url(https://i.pinimg.com/1200x/df/07/7b/df077bb75af0de92b6d6e0855e631e7a.jpg)] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Featured Product</h2>
            <p className="text-gray-200 font-medium">Discover our top-rated product of the month.</p> 
          </div>
        </div>

        {/* Card 2: New Arrivals */}
        <div 
          onClick={() => navigate('/shop')}
          className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="absolute inset-0 bg-[url(https://i.pinimg.com/736x/b5/b9/ff/b5b9ffdbe40a52c0e7990d97b5d2bebe.jpg)] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold mb-1">New Arrivals</h2>
            <p className="text-gray-200 text-sm">Fresh additions to the collection.</p>
          </div>
        </div>

        {/* Card 3: Best Sellers */}
        <div 
          onClick={() => navigate('/shop')}
          className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg md:col-span-2 lg:col-span-1"
        >
          <div className="absolute inset-0 bg-[url(https://i.pinimg.com/736x/c3/74/b9/c374b96e6a1a138ff64b644fdaf1f666.jpg)] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold mb-1">Best Sellers</h2>
            <p className="text-gray-200 text-sm">Browse customer favorites.</p>
          </div>
        </div>

      </div>
    </section>
  );
}