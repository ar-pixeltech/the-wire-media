-- ================================================
-- Migration: Create app_configurations table
-- ================================================

-- Enable required extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ================================================
-- Table: app_configurations
-- ================================================

CREATE TABLE IF NOT EXISTS app_configurations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Basic Info
    site_name VARCHAR(255) NOT NULL,
    site_tagline VARCHAR(255),
    site_description TEXT,

    -- Branding
    logo_url TEXT,
    favicon_url TEXT,

    -- Contact Info
    contact_email VARCHAR(255),
    contact_phone VARCHAR(50),
    support_email VARCHAR(255),

    -- Address
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),

    -- Social Links (Flexible)
    social_links JSONB DEFAULT '{}'::jsonb,
    -- example: {"facebook": "https://facebook.com/yourpage", "twitter": "https://twitter.com/yourhandle", "linkedin": "https://linkedin.com/company/yourcompany", "instagram": "https://instagram.com/yourhandle", "youtube": "https://youtube.com/yourchannel"}

    -- SEO Defaults
    default_meta_title VARCHAR(255),
    default_meta_description TEXT,
    default_meta_keywords TEXT,
    og_image_url TEXT,

    -- Analytics & Integrations
    google_analytics_id VARCHAR(50),
    google_tag_manager_id VARCHAR(50),
    facebook_pixel_id VARCHAR(50),

    -- Feature Flags
    feature_flags JSONB DEFAULT '{}'::jsonb,
    -- example: {"enableSignup": true,"enableBlog": true, "enableAIChat": false, "enableBilling": true}

    -- App Behavior
    maintenance_mode BOOLEAN DEFAULT FALSE,
    maintenance_message TEXT,

    -- Legal
    privacy_policy_url TEXT,
    terms_of_service_url TEXT,

    -- Multi-Tenant Support (Optional)
    tenant_id UUID,

    -- App Settings
    timezone VARCHAR(50) DEFAULT 'UTC',
    currency_code VARCHAR(10) DEFAULT 'USD',
    date_format VARCHAR(20) DEFAULT 'YYYY-MM-DD',

    -- Upload & Session Settings
    max_file_upload_size_mb INTEGER DEFAULT 10,
    session_timeout_minutes INTEGER DEFAULT 60,

    -- Status
    is_active BOOLEAN DEFAULT TRUE,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ================================================
-- Indexes
-- ================================================

CREATE INDEX IF NOT EXISTS idx_app_configurations_is_active
ON app_configurations (is_active);

CREATE INDEX IF NOT EXISTS idx_app_configurations_tenant_id
ON app_configurations (tenant_id);

-- ================================================
-- Ensure only ONE active config (single-tenant)
-- Remove if multi-tenant app
-- ================================================

CREATE UNIQUE INDEX IF NOT EXISTS only_one_active_config
ON app_configurations (is_active)
WHERE is_active = true;

-- ================================================
-- Trigger to auto-update updated_at
-- ================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_app_configurations_updated_at
ON app_configurations;

CREATE TRIGGER update_app_configurations_updated_at
BEFORE UPDATE ON app_configurations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ================================================
-- Done
-- ================================================