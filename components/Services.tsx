import { Code, Search, Globe, Smartphone, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies to meet your specific business needs.',
    features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimized', 'Scalable Solutions']
  },
  {
    icon: <Search size={32} />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rankings with our comprehensive SEO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Marketing',
    description: 'Drive growth with data-driven digital marketing campaigns across multiple channels.',
    features: ['Content Strategy', 'Social Media', 'PPC Campaigns', 'Analytics & Reporting']
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Launch']
  },
  {
    icon: <Database size={32} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: ['AWS & Azure', 'Cloud Migration', 'Infrastructure Setup', 'DevOps Integration']
  },
  {
    icon: <Shield size={32} />,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help you make informed technology decisions.',
    features: ['Tech Stack Planning', 'Security Audits', 'Process Optimization', 'Team Training']
  }
];

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 id="services-heading">Comprehensive IT Solutions</h2>
          <p>
            We offer a full range of IT services designed to drive your business forward
            and help you achieve your digital transformation goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}