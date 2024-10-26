// CardScrollSection.js
import { motion } from "framer-motion";

const CardScrollSection = () => {
  return (
    <div className="relative bg-white flex flex-col items-center py-24">
      {/* First Card */}
      <motion.div
        className="w-[130vh] h-[76vh] bg-gray-900 text-white rounded-2xl shadow-lg flex items-center justify-between px-8 py-24"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-left">
          <h3 className="text-3xl font-semibold mb-2">Card 1</h3>
          <p className="text-lg text-gray-400">
            This is an example card description.
          </p>
        </div>
        <img
          src="/profile-placeholder.png" // Replace with your image path
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default CardScrollSection;
