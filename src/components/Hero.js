import React from "react";
import "../styles/Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div 
        className="hero-background" 
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      ></div>
      <div className="hero-content">
        <Container>
          <Row className="align-items-center justify-content-start">
            <Col md={6}>
              <div className="hero-text">
                <h1>
                  We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </h1>
                <Button className="hero-button">Get Free Consultation</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;