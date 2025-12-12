import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { Award, Users, Truck, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative bg-gray-900 text-white py-24 px-6 text-center overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            We Are <span className="text-teal-500">Marazon</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Redefining the online shopping experience. We believe in quality, 
            speed, and putting the customer first—every single time.
          </p>
        </div>
      </section>

      {/* --- Our Story Section --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full blur-xl opacity-70"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60" 
            alt="Our Team" 
            className="relative rounded-2xl shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Journey</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2024, Marazon started as a small project in a garage with a big idea: 
            <strong> Tech and Fashion should be accessible to everyone.</strong>
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            What began as a team of two has grown into a global family. We obsess over 
            every detail—from the stitching on our backpacks to the chipsets in our gadgets—to 
            ensure you get the best value possible.
          </p>
          
          <div className="flex gap-8 mt-8">
            <div>
              <h3 className="text-4xl font-bold text-teal-600">10k+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-teal-600">50+</h3>
              <p className="text-gray-500 text-sm">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-teal-600">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us (Features) --- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Shop With Us?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300 text-center group">
              <div className="bg-white w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-500">Every item is handpicked and tested for durability.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300 text-center group">
              <div className="bg-white w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Truck className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-500">Free delivery on orders over $50 worldwide.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300 text-center group">
              <div className="bg-white w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Community First</h3>
              <p className="text-sm text-gray-500">We donate 1% of all profits to local charities.</p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300 text-center group">
              <div className="bg-white w-14 h-14 mx-auto rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Globe className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-500">Sustainable packaging for a greener planet.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}