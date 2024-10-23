import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import "./gradientAnimation.css";

const gradientWords = ["Freelancers", "Interns", "Part-timers", "Volunteers"];

export default function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % gradientWords.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-sans max-w-full overflow-x-hidden">
      {/* Updated Gradient Background */}
      <div className="absolute top-0 left-0 right-0 h-[78vh] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 transform -skew-y-6 origin-top-left z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 opacity-50 animate-gradient"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar that stays fixed at the top */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-6 pt-24 pb-12 flex flex-col md:flex-row items-center justify-center">
          {/* Fade-in effect for Waitlist Message */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 p-2 bg-white text-gray-800 rounded-md shadow-lg text-sm font-medium text-center md:hidden"
          >
            Join the waitlist now for free lifetime access
          </motion.div>

          {/* Text Section with Fade-in effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/2 text-center md:text-left md:px-12"
          >
            <link
              href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
              rel="stylesheet"
            />

            {/* Move the waitlist message above the heading for larger screens */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block mb-4 p-2 bg-white text-gray-800 rounded-md shadow-lg text-sm font-medium text-center"
            >
              Join the waitlist now for free lifetime access
            </motion.div>

            <h1
              className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800"
              style={{
                lineHeight: "1.4",
                marginBottom: "2rem",
                fontFamily: "Poppins",
              }}
            >
              Connect, Trade, Hire
              <br />
              College{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-green-400"
                >
                  {gradientWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="text-base mb-6 text-gray-600 font-bold">
              The first marketplace to buy, sell, rent, and hire for everything
              from gigs to campus tasks. Connect with your peers and get things
              done together.
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

          {/* Image Section (On Mobile it goes below) with Fade-in effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
          >
            <motion.div
              className="bg-white p-6 rounded-3xl shadow-2xl"
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

        {/* New Section for College Logos */}
        <section className="py-12 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Trusted by students at top institutions
          </h2>
          <div className="flex justify-center space-x-8 overflow-hidden">
            <motion.div
              className="flex space-x-8 animate-logo-scroll"
              animate={{ x: [-200, 0, 200] }} // Adjust this for the amount of movement
              transition={{
                duration: 10, // Duration for the animation
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <img
                src="/columbiaLogo.avif"
                alt="Columbia University"
                className="h-8"
              />
              <img
                src="/stanford-logo.png"
                alt="Stanford University"
                className="h-8"
              />
              <img
                src="/darthmouthLogo.avif"
                alt="Dartmouth College"
                className="h-8"
              />
              <img
                src="/johns-hopkins-logo.png"
                alt="Johns Hopkins University"
                className="h-8"
              />
              <img
                src="/texasLogo.avif"
                alt="University of Texas"
                className="h-8"
              />
              <img
                src="/asuLogo.jpg"
                alt="Arizona State University"
                className="h-8"
              />
              <img
                src="/northwesternLogo.png"
                alt="Northwestern University"
                className="h-8"
              />{" "}
              {/* Added Northwestern logo */}
            </motion.div>
          </div>
        </section>

        {/* Optional Footer */}
        <footer className="py-6 text-center text-sm text-gray-500 bg-white">
          &copy; {new Date().getFullYear()} The Grid. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
