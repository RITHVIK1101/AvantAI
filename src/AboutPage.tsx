import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaUserGraduate } from "react-icons/fa";

// Main Container with improved spacing
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 60px 40px;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #222;

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled(motion.div)`
  padding: 60px 20px;
  max-width: 900px;
  margin: 25px auto 0; // Added top margin here

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;


const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
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
  font-size: 1.3rem;
  font-weight: 400;
  margin: 25px 0 20px;
  text-align: center;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProductInfo = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 30px;
  text-align: center;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Highlight = styled.span`
  color: #ff8c00;
  font-weight: 600;
`;

const FoundersSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  text-align: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: #333;
  max-width: 700px;
  margin: 30px auto;
  transform-origin: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const StatsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, background 0.3s ease;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-8px);
    background: linear-gradient(135deg, #fceabb, #f8b500);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`;

const StatIcon = styled.div`
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  border-radius: 50%;
  padding: 12px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContentWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading>About The Gridly</Heading>
          <Subheading>
            Started by students, for students, to make campus life easier.
          </Subheading>
          <ProductInfo>
            College students value <Highlight>time</Highlight> and{" "}
            <Highlight>money</Highlight>. At <Highlight>The Gridly</Highlight>,
            we created a platform where you can buy, sell, and rent items from
            fellow students. Whether it’s textbooks, furniture, or gadgets—
            you’ll find it here.
          </ProductInfo>

          <FoundersSection
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Heading style={{ fontSize: "1.8rem" }}>Our Story</Heading>
            <ProductInfo>
              Founded by high school and college students who were tired of the
              grind, we wanted a simpler campus life. The Gridly connects
              students to make everyday tasks easier—buy, sell, and get things
              done without hassle.
            </ProductInfo>
          </FoundersSection>

          <StatsGrid>
            <StatCard>
              <StatIcon>
                <FaCalendarAlt size={24} color="#fcb69f" />
              </StatIcon>
              <StatNumber>2035</StatNumber>
              <StatLabel>Founded</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <FaUsers size={24} color="#fcb69f" />
              </StatIcon>
              <StatNumber>5</StatNumber>
              <StatLabel>Team Members</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <FaUserGraduate size={24} color="#fcb69f" />
              </StatIcon>
              <StatNumber>30+</StatNumber>
              <StatLabel>Campuses Targeted</StatLabel>
            </StatCard>
          </StatsGrid>
        </ContentWrapper>
      </AboutContainer>
    </>
  );
}
