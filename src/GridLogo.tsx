import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "lucide-react";

// Animation for rotation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 45px; /* Default for desktop */
  height: 26px; /* Default for desktop */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px; /* Move the logo to the right */

  @media (max-width: 768px) {
    width: 30px; /* Smaller size for mobile */
    height: 25px;
    margin-top: -2px;
    margin-left: 12px; /* Increase margin for mobile */
  }
`;

// Rotating grid icon
const RotatingGrid = styled(Grid)`
  animation: ${rotate} 10s linear infinite;
`;

// GridLogo Component
const GridLogo: React.FC = () => {
  return (
    <LogoContainer>
      <RotatingGrid size={42} /> {/* Adjusted size */}
    </LogoContainer>
  );
};

export default GridLogo;
