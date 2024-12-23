import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Navbar from "./Navbar";
import Popup from "./Popup"; // Import the Popup component
import GridFeatures from "./GridFeatures";
import "./gradientAnimation.css";
import "./scrollSnapStyles.scss";

const gradientWords = ["Everything", "Tasks", "Assignments"];
const imagePaths = ["/UIimg1.png", "/UIimg2.png", "/UIimage3.png"];

export default function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  const logoSectionRef = useRef(null);
  const gradientRef = useRef(null); // Reference for the gradient div
  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ["start end", "end start"],
  });
  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fade out
  const gradientHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["100vh", "0vh"]
  ); // Shrink height

  const logoSectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const getColorClass = () => "text-white drop-shadow-lg"; // Define the missing function

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
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "100vh",
          background: `
      linear-gradient(
        to top, 
        rgba(150, 237, 234, 3) 0%,    /* Start with solid blue-pink gradient */
        rgba(150, 242, 255, 0.6) 5%, /* Gradually fade at 40% */
        rgba(224, 214, 227, 0.3) 35%, /* Lighter fade */
        transparent 100%              /* Fully transparent at the top */
      )`,
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div className="relative z-6">
        <motion.div
          ref={gradientRef}
          style={{
            position: "fixed",
            inset: 0,
            height: gradientHeight, // Dynamic height shrinking
            background: "linear-gradient(135deg, #a8edea, #fed6e3)", // Gradient colors
            opacity: gradientOpacity, // Dynamic opacity
            pointerEvents: "none", // Avoid blocking interactions
            zIndex: -1, // Keep it behind other elements
          }}
        />
        <Navbar />
        {/* Main Content */}
        <main className="container mx-auto px-6 pt--72 pb-28 flex flex-col md:flex-row pt-14 items-start md:items-center min-h-screen">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/2 text-left md:px-12"
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
              className="text-4xl md:text-6xl font-medium mb-4 text-black"
              style={{ lineHeight: "1.2", fontFamily: "Poppins, sans-serif" }}
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base mb-6 text-gray-600 font-medium"
            >
              {"A campus marketplace to buy, sell, and rent equipment or hire help for tasks—connect with peers and make campus life easier."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                    style={{ display: "inline-block", marginRight: "4px" }}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.div>

            <div className="flex items-center justify-start mb-6">
              <motion.span
                className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-600 mr-2">
                Beta launching soon
              </span>
              {/* Information Button */}
              <button
  className="text-gray-500 hover:text-gray-800 focus:outline-none"
  onClick={() => setShowTooltip(!showTooltip)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01M12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z"
    />
  </svg>
</button>

{showTooltip && (
  <div className="absolute bg-white text-black text-xs p-2 rounded shadow-lg mt-2 w-64 z-10">
    <div className="flex justify-between items-center">
      <span>
        Join thousands of students on The Gridly’s waitlist to access The Gridly
        early or become part of our beta testing group.
      </span>
      <button
        className="text-gray-500 hover:text-gray-800 ml-2"
        onClick={() => setShowTooltip(false)}
      >
        &times;
      </button>
    </div>
  </div>
)}

            </div>

            <div className="flex justify-start space-x-4">
              <a
                href="https://tally.so/r/wb4k4L"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
              >
                Join Waitlist
              </a>
              <button className="bg-white text-gray-600 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition">
                <a href="mailto:rithviksaba@gmail.com">Contact</a>
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
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
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
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            Building communities at institutions nationwide
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-8 md:space-x-16">
              {[1, 2].map((iteration) => (
                <motion.div
                  key={iteration}
                  className="flex space-x-8 md:space-x-16"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[
                    "/columbia.png",
                    "/stanford.png",
                    "/dartmouth.png",
                    "/johnhopkins.png",
                    "/uta.png",
                    "/asu.png",
                    "/northwestern.png",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="w-20 h-12 md:w-40 md:h-24 flex items-center justify-center grayscale"
                    >
                      <img
                        src={src}
                        alt="University logo"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* First Divider Line */}
        <div className="relative h-px mt-20 mb-[1.7rem]">
          <motion.div
            className="absolute border-t border-gray-500"
            initial="hidden"
            whileInView="visible" // Trigger on scroll
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {
                width: "0%",
                opacity: 0,
                x: "-50%",
                left: "50%",
              },
              visible: {
                width: "50%",
                opacity: 0.6,
                x: "-50%",
                left: "50%",
                transition: {
                  duration: 1.2, // Sync with the question animation
                  ease: "easeInOut",
                },
              },
            }}
          />
        </div>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          {/* Text Container with Bounce Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }} // Start smaller and lower
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Trigger on scroll
            transition={{
              duration: 1.2, // Sync with the line animation
              type: "spring", // Adds bounce effect
              stiffness: 80,
              damping: 20,
            }}
            viewport={{ once: true, amount: 0.5 }}
            onAnimationComplete={() => {
              // Trigger the second divider animation after this completes
              const secondLine = document.querySelector("#second-divider");
              secondLine?.classList.add("animate-line");
            }}
            className="max-w-5xl mx-auto text-center"
          >
            <div
              className="inline-block md:text-[1.7rem] text-[1.3rem] leading-tight mx-2 md:mx-48"
              style={{ lineHeight: "1.3", fontFamily: "Poppins, sans-serif" }}
            >
              {/* Question and Answer Grouped Together */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Question */}
                <span className="text-black-800">How The Gridly Works? </span>

                {/* Answer for Desktop */}
                <span className="hidden md:inline text-gray-400">
                  We connect students for easy buying, selling, renting, and job
                  postings, creating a vibrant campus marketplace for everyone’s
                  needs.
                </span>

                {/* Answer for Mobile */}
                <span className="inline md:hidden text-gray-400">
                  We connect students to buy, sell, rent, and post jobs,
                  building a vibrant campus marketplace for all.
                </span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Second Divider Line */}
        <div className="relative h-px mt-6 mb-[1.7rem]">
          <motion.div
            className="absolute border-t border-gray-500"
            initial="hidden"
            whileInView="visible" // Trigger on scroll
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {
                width: "0%",
                opacity: 0,
                x: "-50%",
                left: "50%",
              },
              visible: {
                width: "50%",
                opacity: 0.6,
                x: "-50%",
                left: "50%",
                transition: {
                  duration: 1.2, // Sync with the question animation
                  ease: "easeInOut",
                },
              },
            }}
          />
        </div>

        {/* GridFeatures Section */}
        <GridFeatures /> {/* New addition of GridFeatures component */}

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-black bg-white mt-[9rem]">
          &copy; {new Date().getFullYear()} The Gridly. All rights reserved.
        </footer>

        {/* Popup Component */}
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
