# Azure Deployment Changes Summary

## Overview
This document outlines all changes made to deploy the MCL Website application from localhost to Azure cloud platform.

---

## 🏗️ Architecture

### Localhost Setup (Before)
- Frontend: `http://localhost:5173` (Vite dev server)
- Backend API: `http://localhost:5233` (ASP.NET Core)
- Database: Local PostgreSQL or Azure PostgreSQL

### Azure Production Setup (After)
- **Frontend**: Azure Static Web Apps - `https://zealous-bay-092327d1e.3.azurestaticapps.net`
- **Backend API**: Azure App Service (Linux) - `https://mcl-enquiry-api-a3cne8g6factfnh3.westus3-01.azurewebsites.net`
- **Database**: Azure Database for PostgreSQL - `mcl-lms-dev.postgres.database.azure.com`
- **Deployment**: GitHub Actions for CI/CD

---

## 📁 New Files Added for Azure Deployment

### 1. **Frontend Configuration Files**

#### `frontend/swa-cli.config.json` ✨ NEW
**Purpose**: Azure Static Web Apps CLI configuration

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "frontend": {
      "appLocation": ".",
      "outputLocation": "dist",
      "appBuildCommand": "npm run build",
      "run": "npm run dev",
      "appDevserverUrl": "http://localhost:5173"
    }
  }
}
```

**Why**: Tells Azure SWA CLI how to build and deploy the React app.

---

#### `frontend/public/staticwebapp.config.json` ✨ NEW
**Purpose**: Azure Static Web Apps routing and security configuration

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,ico}", "/css/*", "/js/*", "/*.{png,jpg,gif,ico}"]
  },
  "routes": [
    {
      "route": "/api/*",
      "allowedRoles": ["anonymous"]
    }
  ],
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  },
  "globalHeaders": {
    "content-security-policy": "default-src 'self' https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; font-src 'self' https: data:;",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block"
  },
  "mimeTypes": {
    ".json": "application/json",
    ".js": "application/javascript",
    ".css": "text/css"
  }
}
```

**Why**: 
- Handles client-side routing (React Router)
- Enables 404 fallback to index.html
- Adds security headers
- Configures API routes

---

#### `frontend/.env.production` ✨ NEW
**Purpose**: Production environment variables for frontend build

```env
# Production Environment Variables
# Backend API URL - Azure App Service endpoint
VITE_API_URL=https://mcl-enquiry-api-a3cne8g6factfnh3.westus3-01.azurewebsites.net

# App Name
VITE_APP_NAME=MathCodeLab
```

**Why**: Tells the frontend where the production API is located.

---

#### `frontend/src/config/api.js` ✨ NEW
**Purpose**: Centralized API configuration

```javascript
// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5233';

export const API_ENDPOINTS = {
  ENQUIRY: `${API_BASE_URL}/api/enquiry`,
};

export default API_BASE_URL;
```

**Why**: 
- Single source of truth for API URLs
- Automatically switches between dev and production
- Easy to maintain and update

---

### 2. **Backend Configuration Files**

#### `backend/EnquiryAPI/web.config` ✨ NEW
**Purpose**: IIS/App Service configuration for ASP.NET Core

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModuleV2" resourceType="Unspecified" />
    </handlers>
    <aspNetCore processPath="dotnet" arguments=".\EnquiryAPI.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="inprocess">
      <environmentVariables>
        <environmentVariable name="ASPNETCORE_ENVIRONMENT" value="Production" />
      </environmentVariables>
    </aspNetCore>
  </system.webServer>
</configuration>
```

**Why**: Configures how IIS on Azure App Service runs the .NET application.

---

#### `backend/EnquiryAPI/appsettings.Production.json` ✨ NEW
**Purpose**: Production-specific app settings (not used in current deployment, but prepared for file-based config)

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "#{AZURE_POSTGRESQL_CONNECTION_STRING}#"
  },
  "EmailSettings": {
    "SmtpServer": "smtp.gmail.com",
    "SmtpPort": 587,
    "SenderEmail": "#{SENDER_EMAIL}#",
    "SenderName": "MathCodeLab Enquiry System",
    "Username": "#{EMAIL_USERNAME}#",
    "Password": "#{EMAIL_PASSWORD}#",
    "EnableSsl": true,
    "RecipientEmail": "#{RECIPIENT_EMAIL}#"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AllowedOrigins": [
    "#{AZURE_STATIC_WEB_APP_URL}#"
  ],
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://0.0.0.0:8080"
      }
    }
  }
}
```

**Why**: Template for production settings with placeholder tokens (actual values set in Azure Portal).

---

### 3. **GitHub Actions Workflows**

#### `.github/workflows/azure-static-web-apps-zealous-bay-092327d1e.yml` ✨ NEW
**Purpose**: Automated frontend deployment

**Created by**: Azure Portal when Static Web App was created

**Key Features**:
- Builds React app on every push to `main`
- Deploys to Azure Static Web Apps
- Uses GitHub secrets for authentication
- Build configuration: `app_location: "/frontend"`, `output_location: "dist"`

---

#### `.github/workflows/main_mcl-enquiry-api.yml` ✨ NEW (Modified)
**Purpose**: Automated backend deployment

**Created by**: Azure Portal when App Service was created

**Original Issue**: Looked for .NET project in root directory

**Fix Applied**: Added `working-directory: ./backend/EnquiryAPI` to build and publish steps

**Key Changes**:
```yaml
- name: Build with dotnet
  run: dotnet build --configuration Release
  working-directory: ./backend/EnquiryAPI  # ✅ ADDED

- name: dotnet publish
  run: dotnet publish -c Release -o ${{env.DOTNET_ROOT}}/myapp
  working-directory: ./backend/EnquiryAPI  # ✅ ADDED
```

---

### 4. **Deployment Scripts** (Optional - Created but not required)

#### `deploy-backend.ps1` ✨ NEW
**Purpose**: PowerShell script to manually deploy backend via Azure CLI

**Status**: Created for reference but not used (GitHub Actions handles deployment)

---

#### `deploy-frontend.ps1` ✨ NEW
**Purpose**: PowerShell script to manually deploy frontend via SWA CLI

**Status**: Created for reference but not used (GitHub Actions handles deployment)

---

## 🔄 Modified Existing Files

### 1. **Frontend API Integration**

#### Files Modified:
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/Level0.jsx`
- `frontend/src/pages/Level1.jsx`
- `frontend/src/pages/Level2.jsx`
- `frontend/src/pages/Level4.jsx`

#### Changes Made:

**Before (Localhost)**:
```jsx
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

// ... in handleSubmit function
const response = await axios.post('http://localhost:5233/api/enquiry', formData);
```

**After (Azure)**:
```jsx
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { API_ENDPOINTS } from '../config/api.js'; // ✅ ADDED

// ... in handleSubmit function
const response = await axios.post(API_ENDPOINTS.ENQUIRY, formData); // ✅ CHANGED
```

**Why**: 
- Removed hardcoded localhost URLs
- Uses environment-aware API configuration
- Automatically works in both dev and production

---

### 2. **Backend CORS Configuration**

#### File: `backend/EnquiryAPI/Program.cs`

**Before (Localhost)**:
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://localhost:5174", "http://localhost:5175")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
```

**After (Azure)**:
```csharp
// ✅ Read allowed origins from configuration
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() 
    ?? new[] { "http://localhost:5173", "http://localhost:5174", "http://localhost:5175" };

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins(allowedOrigins)  // ✅ CHANGED
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials();  // ✅ ADDED
        });
});
```

**Why**:
- Allows CORS origins to be configured via Azure Portal
- Supports multiple environments
- Maintains localhost for development

---

### 3. **Backend Configuration Files**

#### File: `backend/EnquiryAPI/appsettings.json`

**Before**:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

**After**:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AllowedOrigins": [  // ✅ ADDED
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175"
  ]
}
```

**Why**: Provides default CORS origins for local development.

---

### 4. **Environment Files**

#### File: `frontend/.env` (Updated)

**Before**: Empty or minimal

**After**:
```env
# Development Environment Variables
VITE_API_URL=http://localhost:5233
VITE_APP_NAME=MathCodeLab
```

#### File: `frontend/.env.example` (Updated)

**Before**: Empty

**After**:
```env
# Development Environment Variables
VITE_API_URL=http://localhost:5233
VITE_APP_NAME=MathCodeLab
```

**Why**: Provides template for developers to set up local environment.

---

### 5. **Git Ignore Updates**

#### File: `.gitignore`

**Added**:
```gitignore
# Backend sensitive files
backend/EnquiryAPI/appsettings.json
backend/EnquiryAPI/appsettings.Email.json
backend/EnquiryAPI/appsettings.Development.json
backend/EnquiryAPI/appsettings.Production.json
backend/EnquiryAPI/publish/
backend/EnquiryAPI/deploy.zip

# Frontend environment files
frontend/.env
frontend/.env.local
frontend/.env.production.local
frontend/dist/

# Azure deployment
*.deployment
.azure/

# Deployment tokens (never commit these!)
deployment-token.txt
```

**Why**: 
- Prevents committing sensitive configuration
- Excludes build artifacts
- Protects deployment secrets

---

## ⚙️ Azure Portal Configuration

### Azure Static Web App Settings

**Resource**: `zealous-bay-092327d1e` (Auto-generated name)
- **Region**: Automatically selected
- **Plan**: Free tier
- **Source**: GitHub - `BharadwajSarma/MCL_Website`
- **Branch**: `main`
- **Build Config**:
  - App location: `/frontend`
  - API location: (empty)
  - Output location: `dist`

---

### Azure App Service (Backend) - Environment Variables

**Resource**: `mcl-enquiry-api`

#### Application Settings (Set in Azure Portal):

| Setting Name | Value | Purpose |
|--------------|-------|---------|
| `AllowedOrigins__0` | `https://zealous-bay-092327d1e.3.azurestaticapps.net` | Allow frontend CORS |
| `ASPNETCORE_ENVIRONMENT` | `Production` | Set environment mode |
| `EmailSettings__SmtpServer` | `smtp.gmail.com` | Email server |
| `EmailSettings__SmtpPort` | `587` | SMTP port |
| `EmailSettings__SenderEmail` | `noreply.mathcodelab@gmail.com` | Sender email |
| `EmailSettings__SenderName` | `MathCodeLab Enquiry System` | Sender name |
| `EmailSettings__Username` | `noreply.mathcodelab@gmail.com` | SMTP username |
| `EmailSettings__Password` | `dsrl eejy ucnk jlwq` | App password |
| `EmailSettings__EnableSsl` | `true` | Enable SSL |
| `EmailSettings__RecipientEmail` | `bharadwaj@mathcodelab.com` | Recipient |

#### Connection Strings (Set in Azure Portal):

| Name | Value | Type |
|------|-------|------|
| `DefaultConnection` | `Host=mcl-lms-dev.postgres.database.azure.com;Port=5432;Database=postgres;Username=mcladmin;Password=Seattle@2025;SslMode=Require` | PostgreSQL |

---

## 🔍 Key Differences: Localhost vs Azure

### URL Changes

| Component | Localhost | Azure Production |
|-----------|-----------|------------------|
| Frontend | `http://localhost:5173` | `https://zealous-bay-092327d1e.3.azurestaticapps.net` |
| Backend API | `http://localhost:5233` | `https://mcl-enquiry-api-a3cne8g6factfnh3.westus3-01.azurewebsites.net` |
| Database | Local or Azure | `mcl-lms-dev.postgres.database.azure.com` |

---

### Configuration Management

| Aspect | Localhost | Azure Production |
|--------|-----------|------------------|
| Frontend API URL | Hardcoded in code | Environment variable (`VITE_API_URL`) |
| Backend CORS | Hardcoded origins | Configuration-based (`AllowedOrigins`) |
| Database Connection | `appsettings.json` | Azure Portal Connection Strings |
| Email Settings | `appsettings.json` | Azure Portal App Settings |
| Secrets | In code/files | Azure Portal (secured) |

---

### Deployment Process

| Aspect | Localhost | Azure Production |
|--------|-----------|------------------|
| Frontend Build | `npm run dev` | GitHub Actions → `npm run build` → Azure SWA |
| Backend Build | `dotnet run` | GitHub Actions → `dotnet publish` → Azure App Service |
| Updates | Manual restart | Automatic on git push |
| Rollback | Manual | GitHub Actions rerun |

---

## 📝 Deployment Checklist

### ✅ Completed Steps

1. ✅ Created Azure Static Web App
2. ✅ Connected GitHub repository
3. ✅ Configured frontend build settings
4. ✅ Fixed Static Web App workflow (output: `dist`)
5. ✅ Created Azure App Service for backend
6. ✅ Fixed backend workflow (working directory)
7. ✅ Created API configuration file (`api.js`)
8. ✅ Updated all frontend pages to use API config
9. ✅ Added production environment variables
10. ✅ Updated backend CORS to read from config
11. ✅ Configured Azure App Service environment variables
12. ✅ Set up CORS allowed origins in Azure
13. ✅ Configured database connection string
14. ✅ Configured email settings
15. ✅ Tested deployment pipeline
16. ✅ Verified frontend-backend communication

---

## 🚀 Deployment Commands Reference

### Local Development
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend/EnquiryAPI
dotnet run
```

### Manual Deployment (if needed)
```bash
# Frontend (using SWA CLI)
cd frontend
npm run build
swa deploy ./dist --deployment-token YOUR_TOKEN --env production

# Backend (using Azure CLI)
cd backend/EnquiryAPI
dotnet publish -c Release -o ./publish
az webapp deployment source config-zip --name mcl-enquiry-api --resource-group LMSDev --src deploy.zip
```

### Automatic Deployment
- Simply push to `main` branch
- GitHub Actions handles everything automatically

---

## 🐛 Common Issues & Solutions

### Issue 1: CORS Error
**Error**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**: 
- Verify `AllowedOrigins__0` in Azure App Service matches exact frontend URL
- Include protocol (`https://`)
- No trailing slash

---

### Issue 2: 404 on Frontend Routes
**Error**: Page refresh gives 404

**Solution**: 
- Ensure `staticwebapp.config.json` is in `public` folder
- Verify `navigationFallback` is configured

---

### Issue 3: Environment Variables Not Working
**Error**: API calls go to wrong URL

**Solution**:
- Check `.env.production` has correct `VITE_API_URL`
- Rebuild frontend after changing env vars
- Verify build uses production env file

---

### Issue 4: Backend Build Fails
**Error**: `MSB1003: Specify a project or solution file`

**Solution**:
- Add `working-directory: ./backend/EnquiryAPI` to workflow
- Verify `.csproj` file exists in that directory

---

## 📚 Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure App Service Documentation](https://docs.microsoft.com/azure/app-service/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

## 🎉 Summary

**Total Files Added**: 8 new files
**Total Files Modified**: 11 files
**Azure Resources Created**: 2 (Static Web App + App Service)
**Deployment Method**: GitHub Actions (Automated CI/CD)

The application is now fully deployed on Azure with automatic deployments on every push to the main branch!
