import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="container">
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
    </section>
  );
}