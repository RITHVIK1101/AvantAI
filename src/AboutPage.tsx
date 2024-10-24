// AboutPage.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const AboutContainer = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #c3cfe2, #f5f7fa);
`;

const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled(motion.section)`
  margin-bottom: 60px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const Subheading = styled(motion.h2)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 24px;
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 24px;
`;

const Highlight = styled.span`
  color: #000;
  font-weight: bold;
`;

const AboutImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  margin-top: 24px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
`;

const QuestionsContainer = styled.div`
  position: relative;
  height: 100px;
  margin-top: 40px;
  overflow: hidden;
`;

const QuestionText = styled(motion.div)`
  position: absolute;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  color: #444;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 4000); // Change question every 4 seconds

    return () => clearInterval(interval);
  }, [questions.length]);

  return (
    <AboutContainer>
      <Navbar />
      <ContentWrapper>
        <Section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About The Grid
          </Heading>
          <Subheading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connecting Students in New and Exciting Ways
          </Subheading>
          <Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            College students value <Highlight>time</Highlight> and{" "}
            <Highlight>money</Highlight>. At <Highlight>The Grid</Highlight>, we
            wanted a place where you can buy, sell, and rent stuff from other
            students. Whether it's textbooks, furniture, or gadgets, you can find
            it here.
          </Text>
          <Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            As well as pay others (post job offerings) to do tedious tasks—
            whether it's helping on an assignment or grabbing boba from the local
            campus boba store for a $5 drop-off. Our platform empowers students to
            collaborate, learn, and grow together by providing a dynamic space
            where jobs and opportunities flow effortlessly.
          </Text>
          <AboutImage
            src="https://via.placeholder.com/800x400"
            alt="About The Grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </Section>

        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Vision
          </Heading>
          <Subheading
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering the Next Generation
          </Subheading>
          <Text
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our vision is to bridge gaps in student life by creating opportunities
            for collaboration. Whether it's picking up a task, completing an
            assignment, or simply building new connections, we make it easy for
            students to thrive.
          </Text>
          <Text
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Founded in <Highlight>2024</Highlight>, we are a passionate team of{" "}
            <Highlight>5</Highlight> dedicated to empowering students across
            campuses. We believe in the power of community and the impact it can
            have on student life.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            What Students Are Saying
          </Heading>

          <QuestionsContainer>
  <AnimatePresence mode="wait">
    <QuestionText
      key={currentQuestion}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      "{questions[currentQuestion]}"
    </QuestionText>
  </AnimatePresence>
</QuestionsContainer>

        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
}
