# Database Schema Update

## Problem
The database columns for string fields were set to VARCHAR(20), which is too short for values like "AP Computer Science A" (22 characters).

## Solution
Updated the database schema to allow longer values:
- Names, Email, InterestedLevel, LearningExperience: VARCHAR(100)
- Phone: VARCHAR(20)
- Message: TEXT

## Steps to Apply the Fix

### 1. Update the Database Schema
Run the SQL script to update the PostgreSQL database:

```bash
# Connect to your PostgreSQL database
psql -U your_username -d your_database_name

# Run the migration script
\i C:/MCL_WEB/MCL_Website/backend/EnquiryAPI/update_column_lengths.sql
```

Or using a PostgreSQL client (pgAdmin, DBeaver, etc.):
- Open the file `update_column_lengths.sql`
- Execute the script against your database

### 2. Restart the Backend API
After updating the database schema, restart your .NET backend:

```bash
cd C:\MCL_WEB\MCL_Website\backend\EnquiryAPI
dotnet run
```

## Changes Made

### Backend Files Updated:
1. **Models/Enquiry.cs**: Added `[MaxLength]` attributes to properties
2. **Data/AppDbContext.cs**: Configured explicit column lengths in OnModelCreating

### Database Schema Changes:
- `first_name`: VARCHAR(100)
- `last_name`: VARCHAR(100)
- `parent_name`: VARCHAR(100)
- `email`: VARCHAR(100)
- `phone`: VARCHAR(20)
- `interested_level`: VARCHAR(100)
- `learning_experience`: VARCHAR(100)
- `grade`: VARCHAR(50)
- `location`: VARCHAR(100)
- `how_did_you_hear_about_us`: VARCHAR(100)
- `message`: TEXT

## Testing
After applying the fix, test the form submission with "AP Computer Science A" as the interested level to ensure it saves successfully.
