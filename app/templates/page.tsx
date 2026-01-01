import { Container, Row, Col } from "react-bootstrap";
import TemplateCard from "../../components/TemplateCard";

export default function Templates() {
    return (
        <Container className="hero text-center my-5">
            <h2 className="fw-bold mb-5">Choose a Template</h2>

            <Row className="g-4">
                <Col md={4}><TemplateCard title="Classic Professional" img="/template1.jpeg" templateName="ClassicProfessional" /></Col>
                <Col md={4}><TemplateCard title="Modern Minimalist" img="/template2.jpeg" templateName="ModernMinimalist" /></Col>
                <Col md={4}><TemplateCard title="Creative Visual" img="/template3.jpeg" templateName="CreativeVisual" /></Col>
            </Row>

            <Row className="g-4 mt-4">
                <Col md={4}><TemplateCard title="ATS Friendly" img="/template4.jpeg" templateName="ATSSimple" /></Col>
                <Col md={4}><TemplateCard title="Executive / Senior" img="/template5.jpeg" templateName="Executive" /></Col>
                <Col md={4}><TemplateCard title="Student Template" img="/template6.jpeg" templateName="StudentTemplate" /></Col>
            </Row>
        </Container>
    );
}
