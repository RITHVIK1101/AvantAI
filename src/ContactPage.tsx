import { motion } from "framer-motion";
import styled from "styled-components";
import Navbar from "./Navbar"; // Adjust the path according to your project structure

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -40px;

  background: linear-gradient(135deg, #a8edea, #fed6e3);
`;

const ContactTitle = styled(motion.h1)`
  font-size: 42px;
  color: #222;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
  letter-spacing: 1.2px;
`;

const EmailBox = styled(motion.div)`
  background-color: #ffffff;
  padding: 20px 40px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  max-width: 350px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    border-color: #000;
    transform: translateY(-10px);
  }
`;

const EmailText = styled.a`
  color: #555;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #333;
  }
`;

const Button = styled(motion.button)`
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top: 40px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
`;

const FooterText = styled(motion.p)`
  margin-top: 40px;
  color: #666;
  font-size: 14px;
`;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Get in Touch
        </ContactTitle>

        <EmailBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <EmailText href="mailto:dhruvreddy05@gmail.com">
            dhruvreddy05@gmail.com
          </EmailText>
        </EmailBox>

        <EmailBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <EmailText href="mailto:rithviksaba@gmail.com">
            rithviksaba@gmail.com
          </EmailText>
        </EmailBox>

        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Send Us a Message
        </Button>

        <FooterText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          We’ll get back to you as soon as possible!
        </FooterText>
      </ContactContainer>
    </>
  );
}
