import { Facebook, Twitter, Linkedin, Instagram, Github } from "@/components/icons";
import Link from "next/link";
// import { pool } from "@/lib/db";
// import { getAppConfigurationsService } from "@/modules/app-configuration/app-configuration.service";
import { siteConfig } from "@/config/site";
// export default async function Home() {
//   

//   return (
//     <div>
//       {result.rows.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  // const appConfigurations = await getAppConfigurationsService();

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{siteConfig.name || "The Wire Media"}</h3>
            {/* <div>{JSON.stringify(appConfigurations)}</div>; */}
            <p>
              Your trusted partner for IT consulting, web development, and digital marketing
              solutions. We help businesses grow and thrive in the digital age.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link href="/services#web-development">Web Development</Link></li>
              <li><Link href="/services#seo-optimization">SEO Optimization</Link></li>
              <li><Link href="/services#digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/services#mobile-development">Mobile Development</Link></li>
              <li><Link href="/services#cloud-solutions">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TechConsult. All rights reserved. Built with passion for digital excellence.</p>
        </div>
      </div>
    </footer>
  );
}