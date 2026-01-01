"use client";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function Review() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("5");
    const [review, setReview] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({ name, email, rating, review });
        setSubmitted(true);
        setName(""); setEmail(""); setRating("5"); setReview("");
    };

    return (
        <div className="container mt-5 review-container" style={{ maxWidth: "600px" }}>
            <h2 className="mb-4 text-center">Add Your Review</h2>

            {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Review submitted successfully!
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"
                        value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="5">⭐️⭐️⭐️⭐️⭐ Excellent</option>
                        <option value="4">⭐️⭐️⭐️⭐ Good</option>
                        <option value="3">⭐️⭐️⭐ Average</option>
                        <option value="2">⭐️⭐ Poor</option>
                        <option value="1">⭐ Very Poor</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your review here..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="light" type="submit" className="px-4">
                        Submit Review
                    </Button>
                </div>
            </Form>
        </div>
    );
}
