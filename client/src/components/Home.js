import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { IoIosCalculator, IoIosCard } from 'react-icons/io';
import { FaWindowRestore, FaLaptopCode } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Home() {
  return (
    <div style={{ background: '#333' }}>
      <header class="showcase">
        <div class="content">
          <div class="title">Find the best Credit Card</div>
          <div class="text">Earn on every dollar you spend</div>
          <Button variant="primary" size="lg" style={{ marginTop: 30 }}>
            Explore
          </Button>
        </div>
      </header>
      <section className="section">
        <Container>
          <Row>
            <Col className="col" sm={10} md={4} lg={4}>
              <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                <IoIosCalculator className="icon" />
                <h3>Calcultor</h3>
                <p>Find out how much you can earning</p>
                <Button variant="primary" href="/calculator">
                  Learn More
                </Button>
              </ScrollAnimation>
            </Col>
            <Col className="col" sm={10} md={4} lg={4}>
              <ScrollAnimation delay={250} animateIn="flipInY" animateOnce={true}>
                <IoIosCard className="icon" />
                <h3>Best Card</h3>
                <p>Highest reward on different category</p>
                <Button variant="primary" href="/category">
                  Learn More
                </Button>
              </ScrollAnimation>
            </Col>
            <Col className="col" sm={10} md={4} lg={4}>
              <ScrollAnimation delay={500} animateIn="flipInY" animateOnce={true}>
                <FaWindowRestore className="icon" />
                <h3>Card Picker</h3>
                <p>Best card based on your spend</p>
                <Button variant="primary" href="/category">
                  Learn More
                </Button>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about">
        <Container>
          <Row>
            <Col xs={5}>
              <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                <FaLaptopCode className="icon" />
              </ScrollAnimation>
            </Col>
            <Col xs={6}>
              <ScrollAnimation delay={500} animateIn="flipInX" animateOnce={true}>
                <h3>About Us</h3>
                <p>
                  Our mission is helping everyone to find out the best credit card in a simple, fast
                  and elegance way
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}