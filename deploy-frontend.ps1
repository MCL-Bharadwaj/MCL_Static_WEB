# Frontend Deployment Script for Azure Static Web Apps
# Run this script to deploy the frontend to Azure Static Web Apps

param(
    [Parameter(Mandatory=$true)]
    [string]$DeploymentToken,
    
    [Parameter(Mandatory=$true)]
    [string]$ApiUrl
)

Write-Host "🚀 Starting Frontend Deployment to Azure Static Web Apps..." -ForegroundColor Cyan
Write-Host ""

$frontendPath = Join-Path $PSScriptRoot "frontend"
Set-Location $frontendPath

# Update .env.production
Write-Host "Updating production environment variables..." -ForegroundColor Yellow
$envContent = @"
# Production Environment Variables
VITE_API_URL=$ApiUrl
VITE_APP_NAME=MathCodeLab
"@
$envContent | Out-File -FilePath ".env.production" -Encoding UTF8
Write-Host "✅ Environment variables updated" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Build the application
Write-Host "Building React application..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Deploy to Azure
Write-Host "Deploying to Azure Static Web Apps..." -ForegroundColor Yellow
$env:SWA_CLI_DEPLOYMENT_TOKEN = $DeploymentToken
swa deploy ./dist --env production

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host "🎉 Frontend Deployed Successfully!" -ForegroundColor Green
    Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Note the Static Web App URL from the output above" -ForegroundColor White
    Write-Host "2. Update backend CORS settings with this URL" -ForegroundColor White
    Write-Host "3. Test your application thoroughly" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}

Set-Location $PSScriptRoot
