import styled from "styled-components";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const BuildContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  padding: 60px 20px;
  margin-top: -60px;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 600;
  margin-top: 70px;
`;

const JobListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const JobCard = styled(motion.div)`
  background: #f9fafb;
  padding: 20px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const RoleTitle = styled.h2`
  color: #444;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const ApplyButton = styled.a`
  background-color: black;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1c3a9e;
  }
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const InstructionText = styled.p`
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  max-width: 700px;
  margin-top: 40px;
  padding: 0 20px;
`;

export default function BuildWithUsPage() {
  const roles = [
    {
      title: "Designer",
      description:
        "Looking for creative minds to refine our UI with modern aesthetics.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
    {
      title: "Developer",
      description:
        "Seeking developers to bring our platform to life with cutting-edge tech.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
    {
      title: "Beta Tester",
      description:
        "We need early adopters to test and improve the user experience.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
    {
      title: "Marketer",
      description: "Help us spread the word to colleges nationwide.",
      email: "mailto:dhruvreddy05@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <BuildContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build with Us
        </Title>

        <JobListingContainer>
          {roles.map((role) => (
            <JobCard
              key={role.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <RoleHeader>
                <RoleTitle>{role.title}</RoleTitle>
                <ApplyButton href={role.email}>Apply Now</ApplyButton>
              </RoleHeader>
              <Description>{role.description}</Description>
            </JobCard>
          ))}
        </JobListingContainer>

        <InstructionText>
          Tap "Apply Now" to reach out and join us!
        </InstructionText>
      </BuildContainer>
    </>
  );
}
