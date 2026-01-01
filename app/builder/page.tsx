import { Suspense } from "react";
import BuilderClient from "../builder/BuilderClient";

export default function BuilderPage() {
    return (
        <Suspense fallback={<p>Loading builder...</p>}>
            <BuilderClient />
        </Suspense>
    );
}
