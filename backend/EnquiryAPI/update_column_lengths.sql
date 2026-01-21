-- Update column lengths to accommodate longer values
-- Run this script on your PostgreSQL database

ALTER TABLE lms.enquiries 
    ALTER COLUMN first_name TYPE VARCHAR(100),
    ALTER COLUMN last_name TYPE VARCHAR(100),
    ALTER COLUMN parent_name TYPE VARCHAR(100),
    ALTER COLUMN email TYPE VARCHAR(100),
    ALTER COLUMN phone TYPE VARCHAR(20),
    ALTER COLUMN interested_level TYPE VARCHAR(100),
    ALTER COLUMN learning_experience TYPE VARCHAR(100),
    ALTER COLUMN grade TYPE VARCHAR(50),
    ALTER COLUMN location TYPE VARCHAR(100),
    ALTER COLUMN how_did_you_hear_about_us TYPE VARCHAR(100),
    ALTER COLUMN message TYPE TEXT;

-- Verify the changes
SELECT column_name, data_type, character_maximum_length 
FROM information_schema.columns 
WHERE table_schema = 'lms' 
  AND table_name = 'enquiries'
ORDER BY ordinal_position;
