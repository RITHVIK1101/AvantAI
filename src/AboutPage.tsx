import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const AboutContainer = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3); /* Keep the theme's gradient */
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled(motion.div)`
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.85); /* Light background for text */
  border-radius: 16px;
  padding: 30px;
  max-width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9); /* Consistent with other text areas */
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
  border: 2px solid rgba(255, 223, 0, 0.3); /* Add subtle gold accents */
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(255, 223, 0, 0.4);
  }
`;

const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222; /* Dark text to contrast */
  margin-bottom: 16px;
`;

const Subheading = styled(motion.h2)`
  font-size: 1.3rem;
  color: #333; /* Darker text to complement the theme */
  margin-bottom: 20px;
`;

const Text = styled(motion.p)`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const Highlight = styled.span`
  color: rgba(255, 223, 0, 0.9); /* Gold highlight for key terms */
  font-weight: bold;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Box = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9); /* Lightened for consistency */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 150px;
  margin: 20px;
  border: 2px solid rgba(255, 223, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(255, 223, 0, 0.4);
  }
`;

const BoxHeading = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #222; /* Subtle dark text for contrast */
  margin-bottom: 8px;
`;

const BoxText = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const MouseFollower = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
`;

export default function AboutPage() {
  const questions = [
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [questions.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <AboutContainer onMouseMove={handleMouseMove}>
      <MouseFollower
        src="https://example.com/cat-cursor.png" /* Replace with actual image URL */
        alt="Cat Cursor"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <Navbar />
      <ContentWrapper>
        <Section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading>About The Grid</Heading>
          <Subheading>Connecting Students in New and Exciting Ways</Subheading>
          <Text>
            College students value <Highlight>time</Highlight> and{" "}
            <Highlight>money</Highlight>. At <Highlight>The Grid</Highlight>, we
            wanted a place where you can buy, sell, and rent stuff from other
            students. Whether it's textbooks, furniture, or gadgets, you can find
            it here.
          </Text>
          <Text>
            As well as pay others to do tedious tasks—whether it's helping on an
            assignment or grabbing boba from the local campus store for a quick drop-off.
          </Text>
        </Section>

        <GridContainer>
          <Card>
            <BoxHeading>Founded</BoxHeading>
            <BoxText>2024</BoxText>
          </Card>
          <Card>
            <BoxHeading>Team Size</BoxHeading>
            <BoxText>4</BoxText>
          </Card>
        </GridContainer>

        <Section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading>What Students Are Saying</Heading>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{questions[currentQuestion]}"
            </motion.div>
          </AnimatePresence>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
}
