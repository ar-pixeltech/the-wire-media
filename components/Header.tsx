// import { useState, useEffect } from 'react';
import { Menu } from "@/components/icons";
import Link from 'next/link';

// export default function Header() {
//   return (
//     <>
//       {/* <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner"> */}
//       <header className={`header `} role="banner">
//         <div className="container">
//           <a href="#home" className="logo" aria-label="TechConsult Home">
//             TechConsult
//           </a>

//           <nav role="navigation" aria-label="Main navigation">
//             <Link href="#services">Services</Link>
//             <Link href="#about">About</Link>
//             <Link href="#portfolio">Portfolio</Link>
//             <Link href="#testimonials">Testimonials</Link>
//             <button className="cta-button">
//               <Link href="#contact">
//                 Get Started
//               </Link>
//             </button>
//           </nav>

//           <button
//             className="mobile-menu-btn"
//             // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {/* {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
//             {/* <Menu size={24} /> */}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {/* {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-slate-900 z-[1040] pt-20 px-6" style={{ top: '80px' }}>
//           <nav className="flex flex-col gap-6">
//             <a
//               href="#services"
//               className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
//               onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
//               onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
//             >
//               About
//             </a>
//             <a
//               href="#portfolio"
//               className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
//               onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
//             >
//               Portfolio
//             </a>
//             <a
//               href="#testimonials"
//               className="text-white text-xl py-2 hover:text-indigo-400 transition-colors"
//               onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
//             >
//               Testimonials
//             </a>
//             <button
//               className="cta-button w-full py-4 text-lg mt-4"
//               onClick={() => scrollToSection('contact')}
//             >
//               Get Started
//             </button>
//           </nav>
//         </div>
//       )} */}
//     </>
//   );
// }


export default function Header() {
  return (
    <header className="header fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="logo text-2xl font-bold">
          TechConsult
        </Link>

        {/* Hidden Checkbox */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link
            href="#contact"
            className="cta-button"

          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <label htmlFor="menu-toggle" className="mobile-menu-btn md:hidden cursor-pointer">
          <Menu size={28} />
        </label>
      </div>

      {/* Mobile Menu */}
      <div className="hidden peer-checked:flex md:hidden flex-col items-center gap-6 py-8 bg-white">
        <Link href="#services">Services</Link>
        <Link href="#about">About</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link
          href="#contact"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}