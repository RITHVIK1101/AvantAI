import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Coins, ShoppingBag, ClipboardList } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="text-center md:text-left p-0 sm:p-6 md:bg-white md:rounded-lg md:shadow-lg hover:shadow-xl transition-shadow duration-200"
      initial={{ opacity: 0, y: 20, scale: 0.95 }} // Initial hidden state
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // On scroll into view
      transition={{
        type: "spring", // Spring animation for smooth effect
        stiffness: 120,
        damping: 15,
        duration: 2.5,
      }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
    >
      {/* Adjusted icon alignment and styling */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full inline-block mb-4 text-white mx-auto md:mx-0">
        {icon}
      </div>

      <h2 className="text-lg md:text-xl font-semibold mb-2 text-black">
        {title}
      </h2>

      <p className="text-sm md:text-base text-gray-500">{description}</p>
    </motion.div>
  );
}

export default function GridFeatures() {
  const gradientRef = useRef(null); // Reference for tracking scroll
  const { scrollYProgress } = useScroll({
    target: gradientRef,
    offset: ["start end", "end start"],
  });

  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fading out effect
  const gradientHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["100vh", "0vh"]
  ); // Height shrinking

  return (
    <div
      ref={gradientRef}
      className="relative bg-white p-6 sm:p-8 font-sans mt-10 md:mt-[9rem]"
    >
      {/* Gradient Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          height: gradientHeight, // Dynamic shrinking height
          background: "linear-gradient(135deg, #a8edea, #fed6e3)", // Subtle gradient
          opacity: gradientOpacity, // Dynamic opacity
          pointerEvents: "none", // No interaction blocking
          zIndex: -1, // Send to background
        }}
      />

      <div className="max-w-7xl mx-auto text-center px-6 sm:px-8 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-black">
          Discover The Grid
        </h1>

        <p className="text-md sm:text-lg md:text-2xl text-gray-500 mt-3 sm:mt-4 mb-10 md:mt-[2.3rem] md:mb-16">
          Enhance your campus experience with tools for connecting, learning,
          and sharing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:mt-[8rem] mt-6">
          <FeatureCard
            icon={<Shield className="w-8 h-8 sm:w-6 sm:h-6" />}
            title="Anonymity"
            description="Post jobs or requests anonymously or with your name. Choose your level of privacy with each posting."
          />
          <FeatureCard
            icon={<Coins className="w-8 h-8 sm:w-6 sm:h-6" />}
            title="Grid Credit"
            description="Earn Grid Credit through platform activity to unlock free postings and access special offers."
          />
          <FeatureCard
            icon={<ShoppingBag className="w-8 h-8 sm:w-6 sm:h-6" />}
            title="Marketplace"
            description="Buy, sell, or rent items like textbooks, electronics, and more with your campus community."
          />
          <FeatureCard
            icon={<ClipboardList className="w-8 h-8 sm:w-6 sm:h-6" />}
            title="Flexible Campus Gigs"
            description="Earn money by taking on on-campus tasks whenever it fits your schedule. Help peers and gain extra cash with ease."
          />
        </div>
      </div>
    </div>
  );
}
