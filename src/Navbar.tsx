"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./components/button";
import GridLogo from "./GridLogo"; // Import the previous GridLogo component
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: sticky;
  top: 46px;
  z-index: 50;
  max-width: 840px; /* Reduced the width */
  margin: 0 auto;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* Adjusted height to center-align logo */
  padding: 8px 20px; /* Adjusted padding for compactness */
  @media (min-width: 768px) {
    background: rgba(245, 245, 245, 0.8);
  }

  backdrop-filter: blur(10px);
  border-radius: 50px;
  @media (max-width: 768px) {
    background: none;
    backdrop-filter: none;
    gap: 16px; /* Reduced gap for better spacing */
  }
`;

const Logo = styled.a`
  /* Wrapped the logo in an anchor tag */
  display: flex;
  align-items: center; /* Vertically align logo */
  gap: 8px;
  font-size: 18px; /* Adjusted font size for aesthetic */
  font-weight: bold;
  color: #000;
  text-decoration: none; /* Remove underline from the link */
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
const MobileMenu = styled.div`
  position: absolute; /* Position the menu absolutely */
  top: 60px; /* Position it right below the navbar */
  left: 0;
  width: 100%; /* Full width on mobile */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100; /* Ensure it stays on top of other content */
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarContent className="bg-transparent md:bg-white md:rounded-full">
        <Logo href="/">
          <div style={{ width: "54px", height: "24px" }}>
            <GridLogo />
          </div>
          <span className="hidden md:inline">The Grid</span>{" "}
          {/* Only visible on md and above */}
        </Logo>
        <MenuItems>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </MenuItems>
        <ConnectButton className="hidden md:inline-block">
          Join Waitlist
        </ConnectButton>{" "}
        {/* Hidden on phone screens */}
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-800" />
        </MobileMenuButton>
      </NavbarContent>

      {isOpen && (
        <div className="absolute top-[60px] p-4 left-0 w-full bg-white rounded-lg shadow-lg z-50">
          <a href="/" className="block py-2 px-4">
            Home
          </a>
          <a href="/about" className="block py-2 px-4">
            About
          </a>
          <a href="/contact" className="block py-2 px-4">
            Contact
          </a>
          <button className="w-full mt-4 bg-black text-white py-2 rounded-lg">
            Join Waitlist for Lifetime Access
          </button>
        </div>
      )}
    </NavbarContainer>
  );
}
