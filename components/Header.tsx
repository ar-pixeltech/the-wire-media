// import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //     setIsMobileMenuOpen(false);
  //   }
  // };

  return (
    <>
      {/* <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner"> */}
      <header className={`header `} role="banner">
        <div className="container">
          <a href="#home" className="logo" aria-label="TechConsult Home">
            TechConsult
          </a>

          <nav role="navigation" aria-label="Main navigation">
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#testimonials">Testimonials</Link>
            <button className="cta-button">
              <Link href="#contact">
                Get Started
              </Link>
            </button>
          </nav>

          <button
            className="mobile-menu-btn"
            // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
            {/* <Menu size={24} /> */}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-[1040] pt-20 px-6" style={{ top: '80px' }}>
          <nav className="flex flex-col gap-6">
            <a
              href="#services"
              className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Testimonials
            </a>
            <button
              className="cta-button w-full py-4 text-lg mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
          </nav>
        </div>
      )} */}
    </>
  );
}