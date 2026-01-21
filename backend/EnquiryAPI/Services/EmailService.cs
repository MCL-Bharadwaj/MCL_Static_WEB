using Backend.Models;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace Backend.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;
        private readonly ILogger<EmailService> _logger;

        public EmailService(IOptions<EmailSettings> emailSettings, ILogger<EmailService> logger)
        {
            _emailSettings = emailSettings.Value;
            _logger = logger;
        }

        public async Task<bool> SendEnquiryEmailAsync(Enquiry enquiry)
        {
            try
            {
                var emailBody = BuildEnquiryEmailBody(enquiry);
                var subject = $"New Enquiry from {enquiry.FirstName} {enquiry.LastName}";

                using var smtpClient = new SmtpClient(_emailSettings.SmtpServer, _emailSettings.SmtpPort)
                {
                    EnableSsl = _emailSettings.EnableSsl,
                    Credentials = new NetworkCredential(_emailSettings.Username, _emailSettings.Password),
                    Timeout = 10000 // 10 seconds timeout
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_emailSettings.SenderEmail, _emailSettings.SenderName),
                    Subject = subject,
                    Body = emailBody,
                    IsBodyHtml = true,
                    Priority = MailPriority.Normal
                };

                mailMessage.To.Add(_emailSettings.RecipientEmail);

                await smtpClient.SendMailAsync(mailMessage);
                
                _logger.LogInformation("Enquiry email sent successfully to {RecipientEmail} for enquiry ID: {EnquiryId}", 
                    _emailSettings.RecipientEmail, enquiry.Id);
                
                return true;
            }
            catch (SmtpException smtpEx)
            {
                _logger.LogError(smtpEx, "SMTP error occurred while sending enquiry email for enquiry ID: {EnquiryId}. Error: {ErrorMessage}", 
                    enquiry.Id, smtpEx.Message);
                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error occurred while sending enquiry email for enquiry ID: {EnquiryId}. Error: {ErrorMessage}", 
                    enquiry.Id, ex.Message);
                return false;
            }
        }

        private string BuildEnquiryEmailBody(Enquiry enquiry)
        {
            var sb = new StringBuilder();
            
            sb.AppendLine("<!DOCTYPE html>");
            sb.AppendLine("<html lang='en'>");
            sb.AppendLine("<head>");
            sb.AppendLine("    <meta charset='UTF-8'>");
            sb.AppendLine("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
            sb.AppendLine("    <title>New Enquiry Notification</title>");
            sb.AppendLine("    <style>");
            sb.AppendLine("        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }");
            sb.AppendLine("        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }");
            sb.AppendLine("        .header { background: linear-gradient(135deg, #22c55e 0%, #a855f7 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; margin: -30px -30px 20px -30px; }");
            sb.AppendLine("        .header h1 { margin: 0; font-size: 24px; }");
            sb.AppendLine("        .info-section { background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px; }");
            sb.AppendLine("        .info-row { display: flex; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #e9ecef; }");
            sb.AppendLine("        .info-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }");
            sb.AppendLine("        .label { font-weight: bold; color: #6c757d; min-width: 180px; }");
            sb.AppendLine("        .value { color: #212529; flex: 1; }");
            sb.AppendLine("        .days-list { display: flex; flex-wrap: wrap; gap: 8px; }");
            sb.AppendLine("        .day-badge { background-color: #e7f3ff; color: #0066cc; padding: 4px 12px; border-radius: 12px; font-size: 13px; }");
            sb.AppendLine("        .footer { margin-top: 30px; text-align: center; color: #6c757d; font-size: 12px; padding-top: 20px; border-top: 1px solid #e9ecef; }");
            sb.AppendLine("        .timestamp { color: #a855f7; font-weight: bold; }");
            sb.AppendLine("    </style>");
            sb.AppendLine("</head>");
            sb.AppendLine("<body>");
            sb.AppendLine("    <div class='container'>");
            sb.AppendLine("        <div class='header'>");
            sb.AppendLine("            <h1>🎓 New Enquiry Received - MathCodeLab</h1>");
            sb.AppendLine("        </div>");
            
            sb.AppendLine("        <div class='info-section'>");
            sb.AppendLine("            <h3 style='margin-top: 0; color: #22c55e;'>📋 Student Information</h3>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>First Name:</span><span class='value'>{enquiry.FirstName}</span></div>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Last Name:</span><span class='value'>{enquiry.LastName}</span></div>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Parent Name:</span><span class='value'>{enquiry.ParentName}</span></div>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Age:</span><span class='value'>{enquiry.Age} years</span></div>");
            if (!string.IsNullOrWhiteSpace(enquiry.Grade))
            {
                sb.AppendLine($"            <div class='info-row'><span class='label'>Grade:</span><span class='value'>{enquiry.Grade}</span></div>");
            }
            if (!string.IsNullOrWhiteSpace(enquiry.Location))
            {
                sb.AppendLine($"            <div class='info-row'><span class='label'>Location:</span><span class='value'>{enquiry.Location}</span></div>");
            }
            sb.AppendLine("        </div>");
            
            sb.AppendLine("        <div class='info-section'>");
            sb.AppendLine("            <h3 style='margin-top: 0; color: #a855f7;'>📞 Contact Details</h3>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Email:</span><span class='value'><a href='mailto:{enquiry.Email}' style='color: #0066cc; text-decoration: none;'>{enquiry.Email}</a></span></div>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Phone:</span><span class='value'><a href='tel:{enquiry.Phone}' style='color: #0066cc; text-decoration: none;'>{enquiry.Phone}</a></span></div>");
            sb.AppendLine("        </div>");
            
            sb.AppendLine("        <div class='info-section'>");
            sb.AppendLine("            <h3 style='margin-top: 0; color: #3b82f6;'>🎯 Program Details</h3>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Interested Level:</span><span class='value'><strong>{enquiry.InterestedLevel}</strong></span></div>");
            sb.AppendLine($"            <div class='info-row'><span class='label'>Learning Experience:</span><span class='value'>{enquiry.LearningExperience ?? "Not specified"}</span></div>");
            
            if (enquiry.InterestedDays != null && enquiry.InterestedDays.Length > 0)
            {
                sb.AppendLine("            <div class='info-row'>");
                sb.AppendLine("                <span class='label'>Interested Days:</span>");
                sb.AppendLine("                <div class='days-list'>");
                foreach (var day in enquiry.InterestedDays)
                {
                    sb.AppendLine($"                    <span class='day-badge'>{day}</span>");
                }
                sb.AppendLine("                </div>");
                sb.AppendLine("            </div>");
            }
            
            if (!string.IsNullOrWhiteSpace(enquiry.HowDidYouHearAboutUs))
            {
                sb.AppendLine($"            <div class='info-row'><span class='label'>How Did You Hear About Us:</span><span class='value'>{enquiry.HowDidYouHearAboutUs}</span></div>");
            }
            sb.AppendLine("        </div>");
            
            if (!string.IsNullOrWhiteSpace(enquiry.Message))
            {
                sb.AppendLine("        <div class='info-section'>");
                sb.AppendLine("            <h3 style='margin-top: 0; color: #ec4899;'>💬 Message</h3>");
                sb.AppendLine($"            <p style='margin: 0; white-space: pre-wrap;'>{enquiry.Message}</p>");
                sb.AppendLine("        </div>");
            }
            
            sb.AppendLine("        <div class='footer'>");
            sb.AppendLine($"            <p>Received on: <span class='timestamp'>{enquiry.CreatedAt:MMMM dd, yyyy 'at' hh:mm tt UTC}</span></p>");
            sb.AppendLine("            <p>This is an automated notification from MathCodeLab Enquiry System.</p>");
            sb.AppendLine("        </div>");
            sb.AppendLine("    </div>");
            sb.AppendLine("</body>");
            sb.AppendLine("</html>");
            
            return sb.ToString();
        }
    }
}
