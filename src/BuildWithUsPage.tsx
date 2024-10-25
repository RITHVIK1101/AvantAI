import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BuildContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  padding: 40px 20px;
  margin-top: -60px; /* Aligns gradient with Navbar for seamless transition */
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 1.5px;
  font-weight: 700;
  margin-top: 70px;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const electricAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(270deg, #00b4db, #0083b0);
  background-size: 400% 400%;
  animation: ${electricAnimation} 8s ease infinite;
  padding: 25px 20px;
  border-radius: 20px;
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
`;

const RoleText = styled.a`
  color: #fff;
  font-size: 1.75rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 15px;
  display: inline-block;
  transition: color 0.3s;
  position: relative;
  z-index: 1;
  &:hover {
    color: #ffe600;
  }
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  margin-top: 15px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  backdrop-filter: blur(5px);
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
  &:focus {
    outline: 2px solid #007bff;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

const InstructionText = styled.p`
  color: #333;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  max-width: 700px;
  margin-top: 40px;
  line-height: 1.6;
  padding: 0 20px;
`;

const ProgressDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: ${(props) => (props.active ? "12px" : "8px")};
  height: ${(props) => (props.active ? "12px" : "8px")};
  background: ${(props) => (props.active ? "#007bff" : "#ccc")};
  border-radius: 50%;
  margin: 0 6px;
  transition: all 0.3s ease;
`;

export default function BuildWithUsPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const roles = [
    {
      title: "Designers",
      description: "Creative minds to help refine our UI.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
    {
      title: "Developers",
      description: "Innovators to bring our platform to life.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
    {
      title: "Beta Testers",
      description: "Early adopters to test and improve our app.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
  ];

  const handlePrev = () => {
    setCurrentCard((prev) => (prev === 0 ? roles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <BuildContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build with Us
        </Title>

        <CarouselContainer>
          <LeftArrow onClick={handlePrev} aria-label="Previous Role">
            <ChevronLeft size={24} />
          </LeftArrow>

          <CardWrapper>
            <Card
              key={roles[currentCard].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <RoleText href={roles[currentCard].email}>
                {roles[currentCard].title}
              </RoleText>
              <Description>{roles[currentCard].description}</Description>
            </Card>
          </CardWrapper>

          <RightArrow onClick={handleNext} aria-label="Next Role">
            <ChevronRight size={24} />
          </RightArrow>
        </CarouselContainer>

        <ProgressDots>
          {roles.map((_, index) => (
            <Dot key={index} active={index === currentCard} />
          ))}
        </ProgressDots>

        <InstructionText>
          Use the arrows or swipe to navigate. Click a role to reach out via email and join our journey!
        </InstructionText>
      </BuildContainer>
    </>
  );
}
