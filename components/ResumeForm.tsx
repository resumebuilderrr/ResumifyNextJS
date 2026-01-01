"use client";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function ResumeForm() {
    return (
        <div className="resume-form container mt-4 text-white">
            <h2 className="text-center mb-4">Build Your Resume</h2>

            <Form>

                {/* -------- BASIC INFO -------- */}
                <h4 className="mt-3">Basic Information</h4>
                <Row>
                    <Col><Form.Control placeholder="Full Name" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="Email Address" className="mt-2" /></Col>
                </Row>
                <Row>
                    <Col><Form.Control placeholder="Phone Number" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="Location / City, Country" className="mt-2" /></Col>
                </Row>
                <Form.Control placeholder="LinkedIn Profile URL" className="mt-2" />
                <Form.Control placeholder="Portfolio/GitHub URL" className="mt-2" />


                {/* -------- SUMMARY -------- */}
                <h4 className="mt-4">Professional Summary</h4>
                <Form.Control as="textarea" rows={3} placeholder="Brief summary about yourself..." className="mt-2" />


                {/* -------- EXPERIENCE -------- */}
                <h4 className="mt-4">Work Experience</h4>
                <Row>
                    <Col><Form.Control placeholder="Job Title" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="Company" className="mt-2" /></Col>
                </Row>
                <Row>
                    <Col><Form.Control placeholder="Start Date (e.g. 2022)" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="End Date / Present" className="mt-2" /></Col>
                </Row>
                <Form.Control as="textarea" rows={3} placeholder="Job Responsibilities / Achievements" className="mt-2" />


                {/* -------- EDUCATION -------- */}
                <h4 className="mt-4">Education</h4>
                <Row>
                    <Col><Form.Control placeholder="Degree (BS / MS etc.)" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="Institution Name" className="mt-2" /></Col>
                </Row>
                <Row>
                    <Col><Form.Control placeholder="Start Year" className="mt-2" /></Col>
                    <Col><Form.Control placeholder="Graduation Year" className="mt-2" /></Col>
                </Row>


                {/* -------- SKILLS -------- */}
                <h4 className="mt-4">Skills</h4>
                <Form.Control placeholder="e.g. React, Java, SQL, Problem Solving..." className="mt-2" />


                {/* -------- PROJECTS -------- */}
                <h4 className="mt-4">Projects</h4>
                <Form.Control placeholder="Project Title" className="mt-2" />
                <Form.Control as="textarea" rows={3} placeholder="Describe your project briefly..." className="mt-2" />


                {/* -------- CERTIFICATIONS -------- */}
                <h4 className="mt-4">Certifications</h4>
                <Form.Control placeholder="Certification Name" className="mt-2" />


                {/* -------- LANGUAGES -------- */}
                <h4 className="mt-4">Languages</h4>
                <Form.Control placeholder="e.g. English - Fluent" className="mt-2" />


                {/* -------- INTERESTS -------- */}
                <h4 className="mt-4">Interests</h4>
                <Form.Control placeholder="e.g. Coding, Reading, Public Speaking..." className="mt-2" />


                {/* -------- SUBMIT -------- */}
                <Button className="mt-4 w-100 custom-btn" variant="light">
                    Generate Resume
                </Button>
            </Form>
        </div>
    );
}
