using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("enquiries", Schema = "lms")]
    public class Enquiry
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("first_name")]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        [Column("last_name")]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        [Column("parent_name")]
        public string ParentName { get; set; } = string.Empty;

        [Range(5, 18)]
        [Column("age")]
        public int Age { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("email")]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(20)]
        [Column("phone")]
        public string Phone { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        [Column("interested_level")]
        public string InterestedLevel { get; set; } = string.Empty;

        [MaxLength(100)]
        [Column("learning_experience")]
        public string? LearningExperience { get; set; }

        [Required]
        [Column("interested_days")]
        public string[] InterestedDays { get; set; } = Array.Empty<string>();

        [Column("grade")]
        public string? Grade { get; set; }

        [Column("location")]
        public string? Location { get; set; }

        [Column("how_did_you_hear_about_us")]
        public string? HowDidYouHearAboutUs { get; set; }

        [Column("message")]
        public string? Message { get; set; }

        [Column("created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
