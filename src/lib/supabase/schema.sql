-- ITSM Survey Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Institutions table
CREATE TABLE IF NOT EXISTS institutions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT,
    contact_email TEXT
);

-- Survey responses table
CREATE TABLE IF NOT EXISTS survey_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    language VARCHAR(2) DEFAULT 'vi' CHECK (language IN ('vi', 'en')),
    
    -- Form data stored as JSONB for flexibility
    form_data JSONB DEFAULT '{}'::jsonb,
    
    -- Progress tracking
    current_section INTEGER DEFAULT 0 CHECK (current_section >= 0 AND current_section <= 10),
    completed_sections INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    is_completed BOOLEAN DEFAULT FALSE
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_survey_institution ON survey_responses(institution_id);
CREATE INDEX IF NOT EXISTS idx_survey_created ON survey_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_survey_updated ON survey_responses(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_survey_language ON survey_responses(language);
CREATE INDEX IF NOT EXISTS idx_survey_completed ON survey_responses(is_completed);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for auto-updating updated_at
DROP TRIGGER IF EXISTS update_survey_responses_updated_at ON survey_responses;
CREATE TRIGGER update_survey_responses_updated_at
    BEFORE UPDATE ON survey_responses
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE institutions ENABLE ROW LEVEL SECURITY;

-- Allow public read/write access (adjust as needed for your security requirements)
CREATE POLICY "Allow public read access on survey_responses"
    ON survey_responses FOR SELECT
    USING (true);

CREATE POLICY "Allow public insert on survey_responses"
    ON survey_responses FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public update on survey_responses"
    ON survey_responses FOR UPDATE
    USING (true);

CREATE POLICY "Allow public read access on institutions"
    ON institutions FOR SELECT
    USING (true);

CREATE POLICY "Allow public insert on institutions"
    ON institutions FOR INSERT
    WITH CHECK (true);

-- Sample data for testing (optional)
-- INSERT INTO survey_responses (language, form_data, current_section, completed_sections, is_completed)
-- VALUES ('vi', '{"institutionName": "Đại học Mẫu"}'::jsonb, 0, ARRAY[]::INTEGER[], false);

