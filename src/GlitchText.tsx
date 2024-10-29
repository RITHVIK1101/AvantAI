import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface CoolTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const CoolText: React.FC<CoolTextProps> = ({ text, className, style }) => {
  const words = text.split(" "); // Split text into words

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
      style={style}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: index * 0.1 }} // Delay for each word
          style={{ display: "inline-block", marginRight: "4px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default CoolText;