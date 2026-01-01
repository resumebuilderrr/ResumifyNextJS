"use client";

import { useSearchParams } from "next/navigation";
import ResumeForm from "../../components/ResumeForm";
import CreativeVisual from "../../templates/CreativeVisual";

const Views = {
    CreativeVisual: <CreativeVisual />,
    ClassicProfessional: <h2>Classic Template Coming Soon</h2>,
    ModernMinimalist: <h2>Modern Template Coming Soon</h2>,
    ATSSimple: <h2>ATS Template Coming Soon</h2>,
    Executive: <h2>Executive Coming Soon</h2>,
    StudentTemplate: <h2>Student Version Coming Soon</h2>,
} as const;

type TemplateKey = keyof typeof Views;

export default function ResumeBuilder() {
    const params = useSearchParams();
    const template = params.get("template");

    const selectedView =
        template && template in Views
            ? Views[template as TemplateKey]
            : null;

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <div style={{ flex: 1 }}>
                <ResumeForm />
            </div>

            <div
                style={{
                    flex: 1,
                    background: "#fff",
                    padding: "20px",
                    height: "90vh",
                    overflowY: "scroll",
                }}
            >
                {selectedView ?? <p>Select a Template</p>}
            </div>
        </div>
    );
}
