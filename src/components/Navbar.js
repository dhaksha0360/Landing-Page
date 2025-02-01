import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

import "../styles/Navbar.css"; // Custom CSS for hamburger menu and layout

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Main Navbar - only visible when menu is not open */}
      <Navbar expand="lg" style={{ backgroundColor: "#4F46E5" }}>
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src="../assets/logo.png" // Replace with your actual logo path
              alt="Logo"
              style={{
                width: "226px",
                height: "49.62px",
                objectFit: "contain",
              }}
            />
          </Navbar.Brand>

          {/* Hamburger Icon */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
            style={{ backgroundColor: "#fff" }}
          >
            <FaBars size={30} color="black" />
          </Navbar.Toggle>

          {/* Navigation links (visible when menu is not open) */}
          {!isMenuOpen && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{ gap: "28px" }}>
                <Nav.Link href="#services" className="text-white">
                  Services
                </Nav.Link>
                <Nav.Link href="#about" className="text-white">
                  About Us
                </Nav.Link>
                <Nav.Link href="#contact" className="text-white">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="#careers" className="text-white">
                  Careers
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>

      {/* Hamburger Menu (Visible only when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="menu-content">
            {/* Close Icon (Cross) at the top-right */}
            <div className="close-icon" onClick={toggleMenu}>
              <FaTimes size={30} color="black" /> {/* Black cross icon */}
            </div>

            {/* Navigation links inside the hamburger menu */}
            <div className="hamburger-links">
              <Nav className="flex-column">
                <Nav.Link href="#services" className="nav-link">
                  SERVICES
                </Nav.Link>
                <Nav.Link href="#about" className="nav-link">
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="#contact" className="nav-link">
                  CONTACT US
                </Nav.Link>
                <Nav.Link href="#careers" className="nav-link">
                  CAREERS
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;