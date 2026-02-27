// import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission (mock)
  //   alert('Thank you for your message! We will get back to you soon.');
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact Us</span>
          <h2>Let's Start Your Project</h2>
          <p>
            Ready to transform your business? Get in touch with us today and let's discuss
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:info@techconsult.com">info@techconsult.com</a>
                  <br />
                  <a href="mailto:support@techconsult.com">support@techconsult.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                  <br />
                  <a href="tel:+1234567891">+1 (234) 567-891</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>Visit Us</h4>
                <p>
                  123 Tech Street, Suite 100
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form"
          // onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                // value={formData.subject}
                // onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                // value={formData.message}
                // onChange={handleChange}
                required
                placeholder="Tell us about your project..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message <Send size={20} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
