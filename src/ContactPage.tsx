import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Navbar from "./Navbar";

// Define the props interface for the Button component
interface ButtonProps {
  color?: string;
  hoverColor?: string;
}

const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 0px;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  padding: 0 20px;
`;

const ContactTitle = styled(motion.h1)`
  font-size: 42px;
  color: #222;
  margin-bottom: 20px;
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

// Add the props type to the Button styled component
const Button = styled(motion.button)<ButtonProps>`
  background-color: ${(props) => props.color || "#000"};
  color: #fff;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#333"};
    transform: scale(1.05);
  }
`;

const FooterText = styled(motion.p)`
  margin-top: 40px;
  color: #666;
  font-size: 14px;
`;

export default function ContactPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const urlBase64ToUint8Array = (base64String: string) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const subscribeUser = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      const registration = await navigator.serviceWorker.ready;

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        alert("Permission not granted for Notifications");
        return;
      }

      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BNRiNnC_trFbArHQncLj9X-6XEVBaBqXVM4axQBrzoLl1ePrxXaiUT0X82soQgvp_CivVMMxkZ2J-svQIuVdAAY"
        ),
      };

      try {
        const pushSubscription = await registration.pushManager.subscribe(
          subscribeOptions
        );

        // Send subscription to the server
        await fetch("/subscribe", {
          method: "POST",
          body: JSON.stringify(pushSubscription),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setIsSubscribed(true);
        alert("Subscribed to push notifications!");
      } catch (error) {
        console.error("Push subscription error: ", error);
        alert("Failed to subscribe to push notifications.");
      }
    } else {
      alert("Push messaging is not supported in your browser.");
    }
  };

  const sendNotification = async () => {
    await fetch("/send-notification", {
      method: "POST",
    });
  };

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
          <EmailText href="mailto:thegridly@gmail.com">
            thegridly@gmail.com
          </EmailText>
        </EmailBox>

        {!isSubscribed ? (
          <Button
            onClick={subscribeUser}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            color="#28a745"
            hoverColor="#218838"
          >
            Subscribe to Notifications
          </Button>
        ) : (
          <Button
            onClick={sendNotification}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            color="#007bff"
            hoverColor="#0069d9"
          >
            Send Special Notification
          </Button>
        )}

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
