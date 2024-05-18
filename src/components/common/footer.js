import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
import { FaXTwitter, FaAppStore } from "react-icons/fa6";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Row className="footer-container-row">
        <Row className="d-flex justify-content-between">
          <Col className="footer-section">
            <Nav className="footer-column">
            <h3>NAVIGATION</h3>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-section">
            <Nav className="footer-column">
            <h3>PRIVACY & INFO</h3>
              <Nav.Link as={Link} to="/">
                Privacy Policy
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Terms & Conditions
              </Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-section">
            <Nav className="footer-column">
            <h3>CONTACT</h3>
              <Nav.Link>11230 Gregory Cartwright/USA</Nav.Link>
              <Nav.Link>(123)456 78 90</Nav.Link>
              <Nav.Link>abc@example.com </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="button-wrapper">
          <FaAppStore />
          <FaXTwitter />
          <SlSocialFacebook />
          <SlSocialInstagram />
          <SlSocialLinkedin />
        </Row>
        <Row>
          <Col>
            <p className="copyright">&copy; 2024 All rights reserved </p>
          </Col>
        </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
