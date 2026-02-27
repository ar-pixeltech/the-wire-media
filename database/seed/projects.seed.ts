import { pool } from "@/lib/db";

export async function seedProjects() {
    await pool.query(`
    INSERT INTO projects (
      title,
      slug,
      description,
      tech_stack,
      project_url,
      github_url,
      is_featured,
      completed_at
    )
    VALUES
    (
      'Enterprise SaaS Platform',
      'enterprise-saas-platform',
      'Multi-tenant SaaS solution for enterprise clients.',
      '["Next.js", "PostgreSQL", "Stripe", "AWS"]',
      'https://example.com',
      'https://github.com/example',
      true,
      '2024-06-15'
    ),
    (
      'AI Chat Integration',
      'ai-chat-integration',
      'AI chatbot integration for customer support automation.',
      '["Next.js", "OpenAI", "Node.js"]',
      NULL,
      'https://github.com/example-ai',
      false,
      '2024-03-10'
    )
    ON CONFLICT (slug) DO NOTHING;
  `);
}