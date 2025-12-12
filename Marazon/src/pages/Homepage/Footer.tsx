import { motion } from "framer-motion";
import { Facebook, Twitter} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ffffff]text-black px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 tracking-wide">Marazon</h2>
          <p className="text-black leading-relaxed">
            Building powerful and scalable web experiences with elegance and performance.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-black text-bold cursor-pointer">
              <li className="hover:text-gray-600 transition ">About Us</li>
              <li className="hover:text-gray-600 transition">Careers</li>
              <li className="hover:text-gray-600 transition">Blog</li>
              <li className="hover:text-gray-600 transition">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-black text-bold cursor-pointer">
              <li className="hover:text-gray-600 transition">Help Center</li>
              <li className="hover:text-gray-600 transition">Privacy Policy</li>
              <li className="hover:text-gray-600 transition">Terms of Service</li>
              <li className="hover:text-gray-600 transition">Status</li>
            </ul>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col"
        >
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

          
          <div className="flex space-x-5">
            {[Facebook, Twitter].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
              >
                <Icon size={22} />
              </motion.div>
            ))}
          </div>
    

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-9 border-t border-gray-700 pt-6 text-center text-gray-500"
      >
        © {new Date().getFullYear()} Marazon. All rights reserved.
      </motion.div>
    </footer>
  );
}
