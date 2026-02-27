import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* <div className="container">
        <div className="hero-content fade-in-up">
          <h1>
            Transform Your Business with{' '}
            <span className="gradient-text">Expert IT Solutions</span>
          </h1>
          <p>
            We provide cutting-edge IT consulting, SEO optimization, and web development services
            to help your business grow faster and reach new heights in the digital landscape.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" aria-label="Get started with our services">
              Get Started <ArrowRight size={20} aria-hidden="true" />
            </button>
            <button className="btn-secondary" aria-label="Watch demo video">
              <Play size={20} aria-hidden="true" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div
        className="hero-image"
        role="img"
        aria-label="Modern IT office with technology"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1760346546767-95b89356a6bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBJVCUyMG9mZmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMTg1NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      />
    </section> */}

        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Expert IT Solutions
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            We provide cutting-edge IT consulting, SEO optimization, and web
            development services to help your business grow faster and reach
            new heights in the digital landscape.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="cta-button inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <Play size={18} />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1760346546767-95b89356a6bb?auto=format&fit=crop&w=1080&q=80"
            alt="Modern IT office with technology"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}