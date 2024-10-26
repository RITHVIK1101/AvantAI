import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Navbar from "./Navbar";
import Popup from "./Popup"; // Import the Popup component
import "./gradientAnimation.css";

const gradientWords = ["Everything", "Tasks", "Assignments"];
const imagePaths = ["/UIimg1.png", "/UIimg2.png", "/UIimage3.png"];

export default function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const logoSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ["start end", "end start"],
  });

  const logoSectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const getColorClass = () => "text-white drop-shadow-lg";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    const wordInterval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % gradientWords.length
      );
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 2000);

    // Show popup after a delay
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
      clearTimeout(popupTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-white text-gray-800 font-sans max-w-full overflow-x-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-[46rem] md:mt-0 h-[91vh] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 transform -skew-y-6 origin-top-left z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 opacity-50 animate-gradient"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-6">
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-6 pt--72 pb-28 flex flex-col md:flex-row pt-14 items-center justify-center min-h-screen">
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
              <a
                href="https://tally.so/r/wb4k4L"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              >
                Join Waitlist
              </a>
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
            <div
              className="bg-white p-8 rounded-3xl shadow-2xl md:mt-2"
              style={{
                width: isMobile ? "20rem" : "35rem",
                marginTop: isMobile ? "50px" : "10px",
                height: isMobile ? "14rem" : "23rem",
                overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={imagePaths[currentImageIndex]}
                  alt="Gig Marketplace Illustration"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
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
              {[1, 2].map((iteration) => (
                <motion.div
                  key={iteration}
                  className="flex space-x-16"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* University Logos */}
                  {/* Add your university logos here */}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
<<<<<<< HEAD
=======
        {/* Enhanced University Logos Section */}
        <motion.section
          ref={logoSectionRef}
          style={{ opacity: logoSectionOpacity }}
        >
          {/* University Logos Code Here */}
        </motion.section>
>>>>>>> master

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500 bg-white">
          &copy; {new Date().getFullYear()} The Grid. All rights reserved.
        </footer>

        {/* Popup Component */}
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
