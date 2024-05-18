import React from "react";
import { Col, Container, Image} from "react-bootstrap";
import "./about.scss";
const About = () => {
  return (
    <Container className="about-all">
      <Col className="about-image-col">
        <Image className="about-image" src="borcelle2.jpg" />
      </Col>
      <Col className="about-paragraf">
        <h3>About Us</h3>Welcome! At Borcelle Kindergarten, we are here to
        ensure that your children grow up in a safe, happy, and encouraging
        environment for learning. Our goal is to help each child discover their
        individual potential while equipping them with the essential values and
        skills they need to prepare for life. We believe that every child is
        unique and deserves a nurturing environment where they can thrive. Our
        dedicated and experienced staff are committed to providing personalized
        attention and fostering a love for learning in each child.
      </Col>
    </Container>
  );
};

export default About;
