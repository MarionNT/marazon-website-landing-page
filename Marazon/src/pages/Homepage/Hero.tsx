import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <>
    
 
    <section className="  flex flex-col items-center justify-center text-center  py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Your One-Stop Shop for <span className="text-neutral-700">Everything</span>
      </h1>
      <p className="text-shadow-cyan-800 max-w-xl mb-8 font-serif">
        Discover exclusive deals, trending fashion, and cutting-edge gadgets — all in one place.
      </p>
       
      <button className="flex items-center border gap-2 bg-gray-700 text-black px-6 py-3 rounded-lg hover:bg-gray-500 cursor-pointer transition">
  
        Start Shopping <ArrowRight />
      </button>
    </section> 





    </>
  )
}
