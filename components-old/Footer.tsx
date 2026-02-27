import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">IT Consultant</h2>
                    <p className="text-gray-400">
                        Delivering modern IT solutions for startups and enterprises.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400">email@yourcompany.com</p>
                    <p className="text-gray-400">+91 9876543210</p>
                </div>

            </div>

            <div className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
                © {new Date().getFullYear()} IT Consultant. All rights reserved.
            </div>
        </footer>
    );
}