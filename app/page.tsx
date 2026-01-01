"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import robo from "../public/robo.png";

export default function Home() {
  return (
    <Container className="hero my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="fw-bold">AI-Powered Smart Resume Builder</h1>
          <p className="lead">Create professional resumes in minutes with AI help.</p>

          <Button href="/templates" className="custom-btn-alt">
            Build Your Resume
          </Button>
        </Col>

        <Col md={6} className="text-center">
          <Image src={robo} alt="Robot" className="img-fluid hero-img" />
        </Col>
      </Row>
    </Container>
  );
}
