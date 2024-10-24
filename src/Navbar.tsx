"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./components/button";
import GridLogo from "./GridLogo"; // Import the previous GridLogo component
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: sticky;
  top: 16px;
  z-index: 50;
  max-width: 900px; /* Reduced the width */
  margin: 0 auto;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* Adjusted height to center-align logo */
  padding: 8px 20px; /* Adjusted padding for compactness */
  background: rgba(245, 245, 245, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center; /* Vertically align logo */
  gap: 8px;
  font-size: 18px; /* Adjusted font size for aesthetic */
  font-weight: bold;
  color: #000;
`;

const MenuItems = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 16px; /* Reduced gap for better spacing */
  }
`;

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #000;
  }
`;

const ConnectButton = styled(Button)`
  background: #000;
  color: white;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  &:hover {
    background: #333;
  }
`;

const MobileMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarContent>
        {/* Updated Logo with GridLogo Component */}
        <Logo>
          <div style={{ width: "54px", height: "24px" }}>
            <GridLogo />
          </div>
          <span>the GRID</span>
        </Logo>

        <MenuItems>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </MenuItems>

        <ConnectButton>Join Waitlist</ConnectButton>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-800" />
        </MobileMenuButton>
      </NavbarContent>

      {isOpen && (
        <div className="md:hidden mt-2 p-4 bg-white rounded-lg shadow-lg">
          <MenuItem href="#" className="block py-2">
            Home
          </MenuItem>
          <MenuItem href="#" className="block py-2">
            About
          </MenuItem>
          <MenuItem href="#" className="block py-2">
            Contact
          </MenuItem>
          <ConnectButton className="w-full mt-4">Connect with us</ConnectButton>
        </div>
      )}
    </NavbarContainer>
  );
}
