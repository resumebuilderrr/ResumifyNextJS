"use client";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/resumifyLogo.png";

export default function NavbarComp() {
    return (
        <Navbar expand="lg" className="custom-navbar py-2" sticky="top">
            <Container>
                <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
                    <Image src={logo} width={40} height={40} className="logo-img me-2" alt="logo" />
                    <p className="brand-text">Resumify</p>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/templates">Templates</Nav.Link>
                        <Nav.Link href="/review">Leave Review</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
