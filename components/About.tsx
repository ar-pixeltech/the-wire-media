import ImageWithFallback from './figma/ImageWithFallback';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJVCUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc3MjE4NTYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional IT consulting team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2 id="about-heading">Your Trusted IT Partner for Digital Success</h2>
            <p>
              With over a decade of experience in the IT industry, we've helped hundreds of businesses
              transform their digital presence and achieve remarkable growth. Our team of expert
              consultants, developers, and marketers work together to deliver solutions that make
              a real impact.
            </p>
            <p>
              We believe in building long-term partnerships with our clients, understanding their
              unique challenges, and providing tailored solutions that drive measurable results.
              Our commitment to excellence and innovation sets us apart in the industry.
            </p>

            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">250+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}