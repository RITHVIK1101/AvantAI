// Navbar.tsx
"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./components/button";
import GridLogo from "./GridLogo";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 46px;
  z-index: 50;
  width: 680px;
  margin: 0 auto;
  margin-left: 420px;

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    margin: 0; /* Center it on mobile */
    padding: 0 16px; /* Optional padding for content spacing */
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 8px 20px;
  @media (min-width: 768px) {
    background: rgba(245, 245, 245, 0.8);
  }
  backdrop-filter: blur(10px);
  border-radius: 50px;
  @media (max-width: 768px) {
    background: none;
    backdrop-filter: none;
    gap: 16px;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const MenuItems = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
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
        <Logo href="/">
          <div style={{ width: "54px", height: "24px" }}>
            <GridLogo />
          </div>
          <span className="hidden md:inline">The Grid</span>
        </Logo>
        <MenuItems>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
          {/* <MenuItem href="/build-with-us">Build with Us</MenuItem>{" "} */}
          {/* New Link */}
        </MenuItems>
        <a
          href="https://tally.so/r/wb4k4L"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        >
          <ConnectButton>Join Waitlist</ConnectButton>
        </a>
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
          {/* <a href="/build-with-us" className="block py-2 px-4">
            Build with Us
          </a> */}
          <a
            href="https://tally.so/r/wb4k4L"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-black text-white py-2 rounded-lg block text-center"
          >
            Join Waitlist for Lifetime Access
          </a>
        </div>
      )}
    </NavbarContainer>
  );
}
