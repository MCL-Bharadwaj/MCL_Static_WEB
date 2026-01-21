using Backend.Models;

namespace Backend.Services
{
    public interface IEmailService
    {
        Task<bool> SendEnquiryEmailAsync(Enquiry enquiry);
    }
}
