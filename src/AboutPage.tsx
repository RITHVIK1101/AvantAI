import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const AboutContainer = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3); /* Updated to lighter gradient */
  overflow: hidden;
  color: #222; /* Changed text color to dark for better contrast */
`;

const ContentWrapper = styled.div`
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
  color: #222; /* Ensure heading is dark */

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
  color: #555; /* Changed to darker gray */

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
  color: #444; /* Adjusted text color for readability */

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
  color: #ff8c00; /* Changed highlight color to a vibrant orange */
  font-weight: 600;
`;

const StatsGrid = styled.div`
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
  background-color: #fff; /* Changed to white background */
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Added shadow for depth */
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
  color: #222; /* Dark text */

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666; /* Darker gray for visibility */

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TestimonialsSection = styled(motion.section)`
  text-align: center;
`;

const Testimonial = styled(motion.blockquote)`
  font-size: 1.5rem;
  font-style: italic;
  margin: 0 auto;
  max-width: 800px;
  line-height: 1.6;
  color: #555; /* Darker color for contrast */

  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

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
    <AboutContainer>
      <Navbar />
      <ContentWrapper>
        <Section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading>About The Grid</Heading>
          <Subheading>Connecting Students in New and Exciting Ways</Subheading>
          <Text>
            College students value <Highlight>time</Highlight> and{" "}
            <Highlight>money</Highlight>. At <Highlight>The Grid</Highlight>, we created a
            platform where you can buy, sell, and rent items from fellow students. Whether it's
            textbooks, furniture, or gadgets—you'll find it here.
          </Text>
          <Text>
            Need help with tedious tasks? Pay others to assist you—be it with assignments or grabbing
            a quick boba from the local campus store.
          </Text>
        </Section>

        <StatsGrid>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>2024</StatNumber>
            <StatLabel>Founded</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>4</StatNumber>
            <StatLabel>Team Members</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <StatNumber>100+</StatNumber>
            <StatLabel>Active Users</StatLabel>
          </StatCard>
        </StatsGrid>

        <TestimonialsSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading>What Students Are Saying</Heading>

          <AnimatePresence mode="wait">
            <Testimonial
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              "{testimonials[currentTestimonial]}"
            </Testimonial>
          </AnimatePresence>
        </TestimonialsSection>
      </ContentWrapper>
    </AboutContainer>
  );
}
