import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"; // Import the Navbar component

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
      {/* Rotating Grid in the Background */}
      <motion.div
        className="absolute inset-0 opacity-10 grid-background"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "url(/path/to/grid-image.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Navbar that stays fixed at the top */}
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center z-10">
        
        {/* Fade-in effect for Waitlist Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-4 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-lg text-sm font-medium text-center"
        >
          Join the waitlist now for free lifetime access
        </motion.div>

        {/* Text Section with Fade-in effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for a staggered effect
          className="md:w-1/2 text-center md:text-left md:px-12"
        >
          <link
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
            rel="stylesheet"
          />
          <h1
            className="text-3xl md:text-5xl font-semibold mb-6"
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
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              >
                {gradientWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>

          <p className="text-base mb-6">
            The first marketplace to buy, sell, rent, and hire for everything from gigs to campus tasks. Connect with your peers and get things done together.
          </p>

          <div className="flex items-center justify-center md:justify-start mb-6">
            <motion.span
              className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm font-medium">Beta launching soon</span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              Join Waitlist
            </button>
            <button className="bg-transparent text-purple-500 border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition">
              Contact
            </button>
          </div>
        </motion.div>

        {/* Image Section (On Mobile it goes below) with Fade-in effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Slight delay for a staggered effect
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
        >
          <motion.div
            className="bg-gray-100 p-6 rounded-3xl shadow-2xl"
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

      {/* Optional Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The Grid. All rights reserved.
      </footer>
    </div>
  );
}
