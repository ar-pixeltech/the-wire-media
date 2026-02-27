import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our IT consulting company.",
};

export default function AboutPage() {
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p>We provide enterprise IT solutions.</p>
        </div>
    );
}