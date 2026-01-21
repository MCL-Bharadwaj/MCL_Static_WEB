# Azure Deployment Script for MCL Website
# Run this script to deploy the backend API to Azure App Service

param(
    [Parameter(Mandatory=$true)]
    [string]$ResourceGroup = "LMSDev",
    
    [Parameter(Mandatory=$true)]
    [string]$ApiAppName,
    
    [Parameter(Mandatory=$false)]
    [string]$Location = "East US",
    
    [Parameter(Mandatory=$false)]
    [string]$AppServicePlan = "mcl-api-plan"
)

Write-Host "🚀 Starting Backend API Deployment to Azure..." -ForegroundColor Cyan
Write-Host ""

# Check if logged in to Azure
Write-Host "Checking Azure login status..." -ForegroundColor Yellow
$account = az account show 2>$null
if (-not $account) {
    Write-Host "❌ Not logged in to Azure. Please run 'az login' first." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Logged in to Azure" -ForegroundColor Green
Write-Host ""

# Create App Service Plan if it doesn't exist
Write-Host "Creating/Verifying App Service Plan: $AppServicePlan" -ForegroundColor Yellow
$planExists = az appservice plan show --name $AppServicePlan --resource-group $ResourceGroup 2>$null
if (-not $planExists) {
    Write-Host "Creating App Service Plan..." -ForegroundColor Yellow
    az appservice plan create `
        --name $AppServicePlan `
        --resource-group $ResourceGroup `
        --location $Location `
        --sku B1 `
        --is-linux
    Write-Host "✅ App Service Plan created" -ForegroundColor Green
} else {
    Write-Host "✅ App Service Plan already exists" -ForegroundColor Green
}
Write-Host ""

# Create Web App
Write-Host "Creating Web App: $ApiAppName" -ForegroundColor Yellow
$appExists = az webapp show --name $ApiAppName --resource-group $ResourceGroup 2>$null
if (-not $appExists) {
    az webapp create `
        --name $ApiAppName `
        --resource-group $ResourceGroup `
        --plan $AppServicePlan `
        --runtime "DOTNETCORE:8.0"
    Write-Host "✅ Web App created" -ForegroundColor Green
} else {
    Write-Host "✅ Web App already exists" -ForegroundColor Green
}
Write-Host ""

# Configure Connection String
Write-Host "Configuring database connection..." -ForegroundColor Yellow
az webapp config connection-string set `
    --name $ApiAppName `
    --resource-group $ResourceGroup `
    --connection-string-type PostgreSQL `
    --settings DefaultConnection="Host=mcl-lms-dev.postgres.database.azure.com;Port=5432;Database=postgres;Username=mcladmin;Password=Seattle@2025"
Write-Host "✅ Database connection configured" -ForegroundColor Green
Write-Host ""

# Configure Email Settings
Write-Host "Configuring email settings..." -ForegroundColor Yellow
az webapp config appsettings set `
    --name $ApiAppName `
    --resource-group $ResourceGroup `
    --settings `
        EmailSettings__SmtpServer="smtp.gmail.com" `
        EmailSettings__SmtpPort="587" `
        EmailSettings__SenderEmail="noreply.mathcodelab@gmail.com" `
        EmailSettings__SenderName="MathCodeLab Enquiry System" `
        EmailSettings__Username="noreply.mathcodelab@gmail.com" `
        EmailSettings__Password="dsrl eejy ucnk jlwq" `
        EmailSettings__EnableSsl="true" `
        EmailSettings__RecipientEmail="bharadwaj@mathcodelab.com" `
        ASPNETCORE_ENVIRONMENT="Production"
Write-Host "✅ Email settings configured" -ForegroundColor Green
Write-Host ""

# Build and Publish
Write-Host "Building .NET application..." -ForegroundColor Yellow
$backendPath = Join-Path $PSScriptRoot "backend\EnquiryAPI"
Set-Location $backendPath

dotnet publish -c Release -o ./publish
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Create deployment package
Write-Host "Creating deployment package..." -ForegroundColor Yellow
if (Test-Path "./deploy.zip") {
    Remove-Item "./deploy.zip" -Force
}
Compress-Archive -Path ./publish/* -DestinationPath ./deploy.zip -Force
Write-Host "✅ Deployment package created" -ForegroundColor Green
Write-Host ""

# Deploy to Azure
Write-Host "Deploying to Azure App Service..." -ForegroundColor Yellow
az webapp deployment source config-zip `
    --name $ApiAppName `
    --resource-group $ResourceGroup `
    --src ./deploy.zip
    
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Get App URL
$appUrl = az webapp show --name $ApiAppName --resource-group $ResourceGroup --query "defaultHostName" -o tsv
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🎉 Backend API Deployed Successfully!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "API URL: https://$appUrl" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Update frontend/.env.production with: VITE_API_URL=https://$appUrl" -ForegroundColor White
Write-Host "2. Deploy the frontend using: swa deploy ./frontend/dist --deployment-token YOUR_TOKEN" -ForegroundColor White
Write-Host "3. Update CORS settings with Static Web App URL" -ForegroundColor White
Write-Host ""
Write-Host "To update CORS after frontend deployment:" -ForegroundColor Cyan
Write-Host "az webapp config appsettings set --name $ApiAppName --resource-group $ResourceGroup --settings AllowedOrigins__0=YOUR_STATIC_WEB_APP_URL" -ForegroundColor White
Write-Host ""

# Cleanup
Remove-Item ./publish -Recurse -Force
Remove-Item ./deploy.zip -Force

Set-Location $PSScriptRoot
