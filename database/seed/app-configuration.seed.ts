import { pool } from "@/lib/db";

export async function seedAppConfig() {
    await pool.query(`
    INSERT INTO app_configurations (
      site_name,
      site_tagline,
      site_description,
      contact_email,
      contact_phone,
      social_links,
      default_meta_title,
      default_meta_description,
      is_active
    )
    VALUES (
      'The Wire Media',
      'IT Consulting & Digital Solutions',
      'We provide modern web development and SaaS consulting services.',
      'contact@thewiremedia.com',
      '+91 9999999999',
      '{
        "linkedin": "https://linkedin.com/company/thewiremedia",
        "twitter": "https://twitter.com/thewiremedia"
      }',
      'The Wire Media - IT Consulting',
      'Leading IT consulting company providing SaaS solutions.',
      true
    )
    ON CONFLICT (is_active)
    WHERE is_active = true
    DO NOTHING;
  `);
}