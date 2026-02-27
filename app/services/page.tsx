import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Learn more about our IT consulting company.",
};

export default function ServicesPage() {
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Services</h1>
            <p>We provide enterprise IT solutions.</p>
        </div>
    );
}