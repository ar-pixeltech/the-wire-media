CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    tech_stack JSONB DEFAULT '[]'::jsonb,
    project_url TEXT,
    github_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    completed_at DATE,
    created_at TIMESTAMPTZ DEFAULT now()
);