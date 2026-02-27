import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between p-5 shadow">
            <h1 className="font-bold text-xl">IT Consultant</h1>
            <div className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}