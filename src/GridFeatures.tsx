import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckSquare, Users, ShoppingCart, GraduationCap } from "lucide-react";

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
      className="relative bg-white p-8 font-sans mt:[6rem] md:mt-[9rem]"
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

      <div className="max-w-7xl mx-auto text-center px-4 md:px-0">
        {/* Adjust heading size based on screen size */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          Discover The Grid
        </h1>

        {/* Adjust paragraph size and spacing */}
        <p className="text-lg md:text-2xl text-gray-500 md:mt-[2.3rem] mt-[2rem] mb-12 md:mb-16">
          Enhance your campus experience with tools for connecting, learning,
          and sharing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-[8rem] mt-[2rem] gap-8">
          <FeatureCard
            icon={<CheckSquare className="w-8 h-8 md:w-6 md:h-6" />}
            title="Tasks"
            description="Find peers for assignments, projects, and tasks to create a connected campus experience."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 md:w-6 md:h-6" />}
            title="Community"
            description="Connect across campus to build friendships and foster a supportive community."
          />
          <FeatureCard
            icon={<ShoppingCart className="w-8 h-8 md:w-6 md:h-6" />}
            title="Marketplace"
            description="Buy, sell, or rent campus essentials like textbooks and electronics."
          />
          <FeatureCard
            icon={<GraduationCap className="w-8 h-8 md:w-6 md:h-6" />}
            title="Tutoring"
            description="Access or offer tutoring, creating a network of shared knowledge."
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Apply motion effect to FeatureCard
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, y: 20, scale: 0.9 }} // Initial hidden state
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // On scroll into view
      transition={{
        type: "spring", // Spring animation for bounce effect
        stiffness: 100,
        damping: 18,
        duration: 2.8,
      }}
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
    >
      {/* Adjust icon size and alignment */}
      <div className="bg-black p-4 rounded-lg inline-block mb-4 text-white mx-auto md:mx-0">
        {icon}
      </div>

      {/* Adjust title size for mobile */}
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-black">
        {title}
      </h2>

      {/* Adjust paragraph size for better readability */}
      <p className="text-sm md:text-base text-gray-500">{description}</p>
    </motion.div>
  );
}
