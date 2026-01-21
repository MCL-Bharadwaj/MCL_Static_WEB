# Enquiry Form Update - New Fields Added

## Summary
Successfully added three new fields to the enquiry form:
1. **Grade** - Text input field (optional)
2. **Location** - Text input field (optional)
3. **How Did You Hear About Us** - Dropdown field with options (optional)

## Changes Made

### Backend Changes

#### 1. **Models/Enquiry.cs**
- Added three new properties:
  - `Grade` (string, nullable)
  - `Location` (string, nullable)
  - `HowDidYouHearAboutUs` (string, nullable)
- All fields are optional and properly annotated with column mappings

#### 2. **Services/EmailService.cs**
- Updated email template to include the three new fields
- Fields are displayed in the appropriate sections:
  - Grade and Location appear in the "Student Information" section
  - How Did You Hear About Us appears in the "Program Details" section
- Fields only display if they have values (not empty)

#### 3. **appsettings.json**
- ✅ Updated recipient email to `Communications@mathcodelab.com`

### Frontend Changes

#### 4. **pages/Home.jsx**
- Added three new fields to the `formData` state
- Added three new form input elements:
  - **Grade**: Text input with placeholder "e.g., 5th Grade, 10th Grade"
  - **Location**: Text input with placeholder "City, State or Country"
  - **How Did You Hear About Us**: Dropdown with options:
    - Social Media
    - Friend
    - Official Website
    - Others
- All fields maintain consistent styling with existing form fields
- Form reset properly clears all new fields after submission

### Database Changes

#### 5. **Migration SQL Script**
Created: `backend/EnquiryAPI/Migrations/add_new_enquiry_fields.sql`

To apply the database changes, run this SQL script on your PostgreSQL database:

```sql
ALTER TABLE lms.enquiries 
ADD COLUMN grade VARCHAR(50);

ALTER TABLE lms.enquiries 
ADD COLUMN location VARCHAR(100);

ALTER TABLE lms.enquiries 
ADD COLUMN how_did_you_hear_about_us VARCHAR(50);
```

**OR** use Entity Framework Core migration (if you prefer):

```bash
cd backend/EnquiryAPI
dotnet ef migrations add AddNewEnquiryFields
dotnet ef database update
```

## Testing Checklist

- [ ] Run the database migration script
- [ ] Rebuild the backend project
- [ ] Test the enquiry form submission with the new fields
- [ ] Verify email is sent to `Communications@mathcodelab.com`
- [ ] Verify email template displays the new fields correctly
- [ ] Test form submission without filling the optional new fields
- [ ] Test form validation still works for required fields

## Deployment Notes

### Backend Deployment
1. Apply database migration to production database
2. Deploy updated backend code
3. Verify appsettings.Production.json also has the correct recipient email

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy to Azure Static Web Apps or your hosting platform
3. Clear browser cache to ensure new form is loaded

## API Endpoint
The existing endpoint remains unchanged:
- **POST** `/api/enquiry`
- Accepts the Enquiry object with the three new optional fields

## Field Details

| Field Name | Type | Required | Values |
|------------|------|----------|--------|
| Grade | Text | No | Free text (e.g., "5th Grade") |
| Location | Text | No | Free text (e.g., "Seattle, WA") |
| How Did You Hear About Us | Dropdown | No | Social Media, Friend, Official Website, Others |

## Notes
- All three new fields are optional and won't break existing functionality
- The database columns allow NULL values
- Email notifications will only show these fields if they have values
- Frontend validation is ready but fields are not marked as required
