# MCL_Static_WEB# MathCodeLab (MCL) Website

A modern full-stack web application for MathCodeLab's coding education platform.

## 🏗️ Architecture

### Frontend
- **Framework**: React 19.1.1 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

### Backend
- **Framework**: ASP.NET Core 8.0 Web API
- **Database**: PostgreSQL (Azure Database)
- **ORM**: Entity Framework Core
- **Email**: SMTP with Gmail

## 📁 Project Structure

```
MCL_Website/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── config/         # API configuration
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── swa-cli.config.json # Azure SWA config
│
├── backend/                 # ASP.NET Core API
│   └── EnquiryAPI/
│       ├── Controllers/     # API endpoints
│       ├── Models/         # Data models
│       ├── Services/       # Business logic
│       └── Data/           # Database context
│
├── deploy-backend.ps1      # Backend deployment script
├── deploy-frontend.ps1     # Frontend deployment script
├── QUICK_START_AZURE.md    # Quick deployment guide
└── AZURE_DEPLOYMENT_GUIDE.md # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- .NET 8.0 SDK
- PostgreSQL (or Azure Database for PostgreSQL)

### Local Development

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend/EnquiryAPI
dotnet restore
dotnet run
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5233`

## ☁️ Azure Deployment

### Method 1: Quick Deployment (Recommended)

See **[QUICK_START_AZURE.md](./QUICK_START_AZURE.md)** for step-by-step instructions.

**Summary:**
1. Deploy backend: `.\deploy-backend.ps1 -ResourceGroup "LMSDev" -ApiAppName "your-api-name"`
2. Create Static Web App in Azure Portal
3. Deploy frontend: `.\deploy-frontend.ps1 -DeploymentToken "TOKEN" -ApiUrl "API_URL"`
4. Update CORS settings

### Method 2: Manual Deployment

See **[AZURE_DEPLOYMENT_GUIDE.md](./AZURE_DEPLOYMENT_GUIDE.md)** for comprehensive manual deployment instructions.

## 🔧 Configuration

### Frontend Environment Variables
Create `.env` for local development:
```env
VITE_API_URL=http://localhost:5233
VITE_APP_NAME=MathCodeLab
```

For production, these are set in `.env.production`.

### Backend Configuration
Configure in `appsettings.json`:
- Database connection string
- Email settings (SMTP)
- CORS allowed origins

**⚠️ Security Note**: Never commit `appsettings.json` with sensitive data. Use Azure App Settings or Key Vault for production.

## 📦 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `dotnet run` - Run in development mode
- `dotnet build` - Build the project
- `dotnet publish` - Publish for deployment

## 🌐 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-level Programs**: Level 0-4 coding courses
- **Contact Forms**: Enquiry system with email notifications
- **Founders Page**: Team profiles and information
- **FAQ Section**: Common questions and answers
- **Code2Conquer**: Special program section

## 📝 API Endpoints

### Enquiries
- `POST /api/enquiry` - Submit contact/enquiry form
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "level": "string",
    "message": "string"
  }
  ```

## 🔒 Security

- HTTPS enforced in production
- CORS configured for specific origins
- Input validation on all forms
- SQL injection protection via EF Core
- XSS protection headers

## 📊 Monitoring

- Application Insights (Azure)
- App Service logs
- Static Web Apps analytics

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## 📄 License

Copyright © 2025 MathCodeLab. All rights reserved.

## 📞 Support

For issues or questions:
- Email: bharadwaj@mathcodelab.com
- Website: https://mathcodelab.com

---

## Development Team

Built with ❤️ by the MathCodeLab team

**Founders:**
- Prathyusha Kaki
- Sirisha Chamarthi
- Raga Sudha Endla

