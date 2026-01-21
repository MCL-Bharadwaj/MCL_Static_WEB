-- SQL Statement to Create Enquiries Table
-- PostgreSQL Database Schema for Enquiry Form

-- Create schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS lms;

-- Drop table if exists (for clean recreation)
-- DROP TABLE IF EXISTS lms.enquiries CASCADE;

-- Create enquiries table
CREATE TABLE lms.enquiries (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    parent_name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 5 AND age <= 18),
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    interested_level VARCHAR(100) NOT NULL,
    learning_experience VARCHAR(100),
    interested_days TEXT[] NOT NULL,
    grade VARCHAR(50),
    location VARCHAR(100),
    how_did_you_hear_about_us VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_enquiries_email ON lms.enquiries(email);
CREATE INDEX idx_enquiries_interested_level ON lms.enquiries(interested_level);
CREATE INDEX idx_enquiries_created_at ON lms.enquiries(created_at DESC);

-- Add comments to document the table
COMMENT ON TABLE lms.enquiries IS 'Stores enquiry form submissions from the website';
COMMENT ON COLUMN lms.enquiries.id IS 'Auto-incrementing primary key';
COMMENT ON COLUMN lms.enquiries.first_name IS 'Student first name';
COMMENT ON COLUMN lms.enquiries.last_name IS 'Student last name';
COMMENT ON COLUMN lms.enquiries.parent_name IS 'Parent or guardian name';
COMMENT ON COLUMN lms.enquiries.age IS 'Student age (5-18 years)';
COMMENT ON COLUMN lms.enquiries.email IS 'Contact email address';
COMMENT ON COLUMN lms.enquiries.phone IS 'Contact phone number';
COMMENT ON COLUMN lms.enquiries.interested_level IS 'Program level interested in (e.g., Level 0, Level 1, AP Computer Science A, etc.)';
COMMENT ON COLUMN lms.enquiries.learning_experience IS 'Previous learning experience or coding background';
COMMENT ON COLUMN lms.enquiries.interested_days IS 'Array of days interested in classes';
COMMENT ON COLUMN lms.enquiries.grade IS 'Current grade level';
COMMENT ON COLUMN lms.enquiries.location IS 'Geographic location';
COMMENT ON COLUMN lms.enquiries.how_did_you_hear_about_us IS 'Marketing source';
COMMENT ON COLUMN lms.enquiries.message IS 'Additional message or notes';
COMMENT ON COLUMN lms.enquiries.created_at IS 'Timestamp when enquiry was submitted';

-- Sample query to view all enquiries
-- SELECT * FROM lms.enquiries ORDER BY created_at DESC;

-- Sample query to view enquiries by interested level
-- SELECT first_name, last_name, email, interested_level, created_at 
-- FROM lms.enquiries 
-- WHERE interested_level = 'AP Computer Science A' 
-- ORDER BY created_at DESC;
