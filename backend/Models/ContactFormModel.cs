using System.ComponentModel.DataAnnotations;

public class ContactFormModel
{
    [Required]
    [RegularExpression(@"^[A-Za-zÀ-ÿ ]+$", ErrorMessage = "Name cannot contain numbers or special characters.")]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Message is required.")]
    [StringLength(1000, ErrorMessage = "Message cannot exceed 1000 characters.")]
    public string Message { get; set; }
}
