import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Navbar from "./Navbar";
import "./gradientAnimation.css";

const gradientWords = ["Everything", "Tasks", "Assignments"];

export default function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const logoSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ["start end", "end start"],
  });

  const logoSectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const getColorClass = () => "text-white drop-shadow-lg";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % gradientWords.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white text-gray-800 font-sans max-w-full overflow-x-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-[86vh] md:mt-0 h-[92vh] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 transform -skew-y-6 origin-top-left z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 opacity-50 animate-gradient"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-6">
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-6 pt--72 pb-28 flex flex-col md:flex-row items-center justify-center min-h-screen">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/2 text-center md:text-left md:px-12"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-4 p-2 bg-white text-gray-800 rounded-md shadow-lg text-sm font-medium text-center
             md:mt-0 mt-16"
            >
              Join the waitlist now for free lifetime access
            </motion.div>

            <h1
              className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800"
              style={{
                lineHeight: "1.4",
                marginBottom: "2rem",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              The Campus Marketplace
              <br />
              for{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-clip-text ${getColorClass()}`}
                  style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)" }}
                >
                  {gradientWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="text-base mb-6 text-gray-600 font-bold">
              The first marketplace to buy, sell, rent, and hire for gigs and
              campus tasks. From grabbing boba to getting assignment help,
              connect with peers and get things done together.
            </p>

            <div className="flex items-center justify-center md:justify-start mb-6">
              <motion.span
                className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-600">
                Beta launching soon
              </span>
            </div>

            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
                Join Waitlist
              </button>
              <button className="bg-white text-gray-600 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Contact
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
          >
            <motion.div
              className="bg-white p-8 pl-18 rounded-3xl shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="./img3.png"
                alt="Gig Marketplace Illustration"
                className="w-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        </main>

        {/* Enhanced University Logos Section */}
        <motion.section
          ref={logoSectionRef}
          style={{ opacity: logoSectionOpacity }}
          className="py--6 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Trusted by students at top institutions
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-16">
              {/* Two identical sets of logos to ensure smooth looping */}
              {[1, 2].map((iteration) => (
                <motion.div
                  key={iteration}
                  className="flex space-x-16"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 20, // Adjust the speed as needed
                    repeat: Infinity,
                    ease: "linear", // Smooth looping
                  }}
                >
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/columbia.png"
                      alt="Columbia University"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/stanford.png"
                      alt="Stanford University"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/dartmouth.png"
                      alt="Dartmouth College"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/johnhopkins.png"
                      alt="Johns Hopkins University"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/uta.png"
                      alt="University of Texas"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/asu.png"
                      alt="Arizona State University"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-24 flex items-center justify-center">
                    <img
                      src="/northwestern.png"
                      alt="Northwestern University"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500 bg-white">
          &copy; {new Date().getFullYear()} The Grid. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
