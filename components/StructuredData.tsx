
export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechConsult",
    "url": "https://techconsult.com",
    "logo": "https://techconsult.com/logo.png",
    "description": "Professional IT consulting, web development, SEO optimization, and digital marketing services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street, Suite 100",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "email": "info@techconsult.com",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://facebook.com/techconsult",
      "https://twitter.com/techconsult",
      "https://linkedin.com/company/techconsult",
      "https://instagram.com/techconsult"
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Consulting Services",
    "provider": {
      "@type": "Organization",
      "name": "TechConsult"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web application development with modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimization to improve online visibility"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Development",
            "description": "Native and cross-platform mobile app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions",
            "description": "Scalable cloud infrastructure and migration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting",
            "description": "Strategic IT consulting for informed technology decisions"
          }
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TechConsult",
    "url": "https://techconsult.com",
    "description": "Professional IT consulting and web development services",
    "publisher": {
      "@type": "Organization",
      "name": "TechConsult"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://techconsult.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TechConsult",
    "image": "https://techconsult.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street, Suite 100",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "url": "https://techconsult.com",
    "telephone": "+1-234-567-890",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  // Aggregate Rating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechConsult",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://techconsult.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://techconsult.com#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://techconsult.com#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://techconsult.com#contact"
      }
    ]
  };

  return (
    <>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Professional Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Aggregate Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify(aggregateRatingSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
}
