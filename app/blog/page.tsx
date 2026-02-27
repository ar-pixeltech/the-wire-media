import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Learn more about our IT consulting company.",
};

export default function BlogPage() {
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p>We provide enterprise IT solutions.</p>
        </div>
    );
}