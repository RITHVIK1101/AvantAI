import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaUserGraduate } from "react-icons/fa";

// Adjusted AboutContainer to match ContactContainer
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  min-height: 100vh;
  padding: 20px; /* Add some padding */
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #222;
`;

// Styled Components
const ContentWrapper = styled(motion.div)`
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: #222;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subheading = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const Text = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 24px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 16px;
  }
`;

const Highlight = styled.span`
  color: #ff8c00;
  font-weight: 600;
`;

const StatsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 40px;
  }
`;

const StatCard = styled(motion.div)`
  background-color: #fff;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 250px;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 480px) {
    padding: 30px;
    width: 200px;
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TestimonialsSection = styled(motion.section)`
  text-align: center;
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

const Testimonial = styled(motion.blockquote)`
  font-size: 1.5rem;
  font-style: italic;
  margin: 40px auto 0;
  max-width: 800px;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

// Motion Variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const testimonials = [
    "I wish somebody could grab boba for me from the campus drop-off.",
    "I really need help on this assignment.",
    "Why do I have to walk to get my lunch every day?",
    "Is there a place where I can rent textbooks from other students?",
    "I need someone to proofread my essay.",
    "Can someone help me move my furniture?",
    "I wish I could find affordable gadgets on campus.",
    "Is anyone selling used lab equipment?",
    "I need a study partner for finals week.",
    "Who can take notes for me in today's lecture?",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Navbar />
      <AboutContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Section>
            <Heading variants={itemVariants}>About The Grid</Heading>
            <Subheading variants={itemVariants}>
              Connecting Students in New and Exciting Ways
            </Subheading>
            <Text variants={itemVariants}>
              College students value <Highlight>time</Highlight> and{" "}
              <Highlight>money</Highlight>. At <Highlight>The Grid</Highlight>,
              we created a platform where you can buy, sell, and rent items from
              fellow students. Whether it's textbooks, furniture, or
              gadgets—you'll find it here.
            </Text>
            <Text variants={itemVariants}>
              Need help with tedious tasks? Pay others to assist you—be it with
              assignments or grabbing a quick boba from the local campus store.
            </Text>
          </Section>

          <StatsGrid variants={containerVariants}>
            <StatCard
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaCalendarAlt
                size={48}
                color="#ff8c00"
                style={{ marginBottom: "16px" }}
              />
              <StatNumber>2024</StatNumber>
              <StatLabel>Founded</StatLabel>
            </StatCard>
            <StatCard
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers
                size={48}
                color="#ff8c00"
                style={{ marginBottom: "16px" }}
              />
              <StatNumber>4</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
            <StatCard
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaUserGraduate
                size={48}
                color="#ff8c00"
                style={{ marginBottom: "16px" }}
              />
              <StatNumber>50+</StatNumber>
              <StatLabel>Active Beta Users</StatLabel>
            </StatCard>
          </StatsGrid>

          <TestimonialsSection
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading variants={itemVariants}>What Students Are Saying</Heading>

            <AnimatePresence mode="wait">
              <Testimonial
                key={currentTestimonial}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
              >
                "{testimonials[currentTestimonial]}"
              </Testimonial>
            </AnimatePresence>
          </TestimonialsSection>
        </ContentWrapper>
      </AboutContainer>
    </>
  );
}
