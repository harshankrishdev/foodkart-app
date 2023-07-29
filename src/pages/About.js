import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../assets/images/about-image.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about-us">
      <Container className="mt-5 text-white">
        <Row>
          <Col md={6}>
            <h1>About Us</h1>
            <p>
              At Foot Kart, we blend diverse culinary traditions with innovative
              techniques, creating a menu that's a celebration of flavors,
              textures, and aromas. Our charming ambiance complements your
              dining experience, whether it's a romantic dinner or a special
              celebration. Our attentive staff ensures impeccable service, while
              we also host memorable events and private gatherings. As a
              community-oriented restaurant, we actively engage in local
              initiatives and support sustainable practices. Join us for a
              unique culinary journey and savor the magic of flavors at Foot
              Kart.
            </p>
          </Col>
          <Col md={6}>
            <Image src={aboutImage} alt="About Us" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
