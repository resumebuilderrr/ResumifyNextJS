"use client";

import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";

type TemplateCardProps = {
    title: string;
    img: string;
    templateName: string;
};

export default function TemplateCard({
    title,
    img,
    templateName,
}: TemplateCardProps) {
    const router = useRouter();

    return (
        <Card className="template-card">
            <Image src={img} width={400} height={300} alt={title} />

            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Button
                    className="custom-btn"
                    onClick={() => router.push(`/builder?template=${templateName}`)}
                >
                    Use Template
                </Button>
            </Card.Body>
        </Card>
    );
}
