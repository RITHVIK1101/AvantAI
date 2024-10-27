import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaTasks, FaUserFriends, FaShoppingCart, FaChalkboardTeacher } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function GridFeatures() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  if (inView) {
    controls.start("visible");
  }

  const features = [
    {
      icon: <FaTasks size={28} />,
      title: "Tasks",
      description: "Find peers for assignments, projects, and tasks to create a connected campus experience.",
    },
    {
      icon: <FaUserFriends size={28} />,
      title: "Community",
      description: "Connect across campus to build friendships and foster a supportive community.",
    },
    {
      icon: <FaShoppingCart size={28} />,
      title: "Marketplace",
      description: "Buy, sell, or rent campus essentials like textbooks and electronics.",
    },
    {
      icon: <FaChalkboardTeacher size={28} />,
      title: "Tutoring",
      description: "Access or offer tutoring, creating a network of shared knowledge.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 text-gray-800 text-center font-sans">
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Discover The Grid
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        transition={{ delay: 0.1 }}
        className="max-w-md mx-auto text-sm lg:text-base mb-8 text-gray-600"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Enhance your campus experience with tools for connecting, learning, and sharing.
      </motion.p>

      {/* Responsive Layout */}
      <div className="grid sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white rounded-md shadow-md flex items-center lg:w-[45%] hover:shadow-lg transition-all duration-200"
          >
            <div className="flex-shrink-0 text-indigo-500 mr-3">{feature.icon}</div>
            <div className="text-left">
              <h3 className="text-sm font-medium mb-1 text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 leading-snug" style={{ fontFamily: "Poppins, sans-serif" }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
