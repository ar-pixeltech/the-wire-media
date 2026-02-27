const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc',
    content: 'Working with this team has been a game-changer for our business. Their SEO expertise helped us increase organic traffic by 300% in just 6 months.',
    avatar: 'SJ',
    rating: 5
  },
  {
    name: 'Michael Chen',
    position: 'Founder, Digital Ventures',
    content: 'The web development team delivered a stunning e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.',
    avatar: 'MC',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GrowthCo',
    content: 'Their IT consulting services helped us streamline our operations and reduce costs by 40%. Highly recommended for any business looking to optimize their tech stack.',
    avatar: 'ER',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-position">{testimonial.position}</span>
                </div>
              </div>
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
