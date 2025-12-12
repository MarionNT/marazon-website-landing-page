import { useState } from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { products } from "../../data/products"; // Import data
import { Search } from "lucide-react";

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Collection</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          {/* Category Buttons */}
          <div className="flex gap-2">
            {["All", "Electronics", "Fashion"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg border transition ${
                  selectedCategory === cat 
                    ? "bg-teal-600 text-white border-teal-600" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wide">{product.category}</span>
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <button 
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}