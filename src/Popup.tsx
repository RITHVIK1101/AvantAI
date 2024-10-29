import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PopupProps = {
  onClose: () => void;
};

export default function Popup({ onClose }: PopupProps) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Update the state when the window is resized
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          style={{
            maxWidth: isDesktop ? "29rem" : "22rem", // Adjust size based on screen width
            backgroundColor: "#F9FAFB",
            borderRadius: "2rem",
            boxShadow: isDesktop
              ? "0px 12px 36px rgba(0, 0, 0, 0.2)"
              : "0px 8px 24px rgba(0, 0, 0, 0.1)", // Subtle shadow difference for smaller screens
            padding: isDesktop ? "2rem" : "1.5rem", // Slight padding change for smaller screens
            position: "relative",
            textAlign: "center",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            style={{
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              borderRadius: "0.75rem",
              border: "1px solid rgba(59, 130, 246, 0.6)",
              animation: "rotate-border 5s linear infinite",
              pointerEvents: "none",
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              color: "#9CA3AF",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            &times;
          </button>

          <h2
            style={{
              fontSize: "1.75rem",
              color: "#1F2937",
              marginBottom: "1rem",
              fontWeight: "600",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Get Exclusive Access
          </h2>

          <p
            style={{
              color: "#4B5563",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Be part of an exclusive group with permanent access to The Gridly's
            top features. Join the waitlist today for early access & member-only
            perks.
          </p>

          <div>
            <a
              href="https://tally.so/r/wb4k4L"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "black",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "500",
                fontFamily: "'Poppins', sans-serif",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#111827")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "black")
              }
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </AnimatePresence>
  );
}
