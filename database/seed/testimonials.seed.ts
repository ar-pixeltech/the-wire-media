import { pool } from "@/lib/db";

export async function seedTestimonials() {
    await pool.query(`
    INSERT INTO testimonials (
      client_name,
      client_position,
      company_name,
      message,
      rating,
      is_featured
    )
    VALUES
    (
      'Rahul Sharma',
      'CTO',
      'TechNova',
      'They built our SaaS platform with outstanding quality.',
      5,
      true
    ),
    (
      'Anjali Verma',
      'Founder',
      'StartupX',
      'Professional team and excellent delivery timeline.',
      5,
      true
    )
    ON CONFLICT DO NOTHING;
  `);
}