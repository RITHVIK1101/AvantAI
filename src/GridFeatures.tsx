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
      className="relative bg-white p-8 font-sans mt-[11rem]"
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

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-2 text-black">
          Discover The Grid
        </h1>
        <p className="text-2xl text-gray-500 mt-[3rem] mb-16">
          Enhance your campus experience with tools for connecting, learning,
          and sharing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[7rem]">
          <FeatureCard
            icon={<CheckSquare className="w-6 h-6" />}
            title="Tasks"
            description="Find peers for assignments, projects, and tasks to create a connected campus experience."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Community"
            description="Connect across campus to build friendships and foster a supportive community."
          />
          <FeatureCard
            icon={<ShoppingCart className="w-6 h-6" />}
            title="Marketplace"
            description="Buy, sell, or rent campus essentials like textbooks and electronics."
          />
          <FeatureCard
            icon={<GraduationCap className="w-6 h-6" />}
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

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-left">
      <div className="bg-black p-4 rounded-lg inline-block mb-4 text-white">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
