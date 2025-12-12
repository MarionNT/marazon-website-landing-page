import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Your One-Stop Shop for <span className="text-neutral-700">Everything</span>
      </h1>
      <p className="text-gray-600 max-w-xl mb-8 font-serif">
        Discover exclusive deals, trending fashion, and cutting-edge gadgets — all in one place.
      </p>
       
      <button 
        onClick={() => navigate('/shop')}
        className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-teal-600 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Start Shopping <ArrowRight size={20} />
      </button>
    </section> 
  );
}