using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using Backend.Services;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiryController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IEmailService _emailService;
        private readonly ILogger<EnquiryController> _logger;

        public EnquiryController(AppDbContext context, IEmailService emailService, ILogger<EnquiryController> logger)
        {
            _context = context;
            _emailService = emailService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> CreateEnquiry([FromBody] Enquiry enquiry)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                // Save to database
                _context.Enquiries.Add(enquiry);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Enquiry saved successfully with ID: {EnquiryId}", enquiry.Id);

                // Send email notification
                var emailSent = await _emailService.SendEnquiryEmailAsync(enquiry);

                if (emailSent)
                {
                    _logger.LogInformation("Email notification sent successfully for enquiry ID: {EnquiryId}", enquiry.Id);
                    return Ok(new { 
                        message = "Enquiry saved successfully and email notification sent!", 
                        enquiryId = enquiry.Id 
                    });
                }
                else
                {
                    _logger.LogWarning("Enquiry saved but email notification failed for enquiry ID: {EnquiryId}", enquiry.Id);
                    return Ok(new { 
                        message = "Enquiry saved successfully, but email notification failed. We'll follow up soon.", 
                        enquiryId = enquiry.Id 
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while processing enquiry");
                return StatusCode(500, new { error = "An error occurred while processing your enquiry. Please try again later." });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEnquiries()
        {
            var enquiries = _context.Enquiries.ToList();
            return Ok(enquiries);
        }
    }
}
