import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"; // Import the new Navbar component

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
      <Navbar />

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left md:px-12">
          <link
            href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <h1
            className="text-10xl md:text-5xl font-semibold mb-6"
            style={{
              lineHeight: "1.4",
              marginBottom: "2rem",
              fontFamily: "Poppins",
            }}
          >
            The Grid:
            <br />
            Gig Marketplace for
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
            The first marketplace to connect college students with flexible job
            opportunities in seconds—internships, part-time jobs, freelance
            gigs, and more.
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
        </div>

        {/* Image Section (On Mobile it goes below) */}
        <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end">
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
        </div>
      </main>

      {/* Optional Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The Grid. All rights reserved.
      </footer>
    </div>
  );
}

/* Mobile Menu Component */
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90"
          >
            Waitlist
          </a>
        </div>
      )}
    </div>
  );
}
