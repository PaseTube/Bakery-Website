using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    [HttpPost]
    public IActionResult SendContact([FromBody] ContactFormModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(new
            {
                errors = ModelState.ToDictionary(
                    kvp => kvp.Key,
                    kvp => kvp.Value?.Errors.Select(e => e.ErrorMessage).ToArray() ?? Array.Empty<string>()
                )
            });
        }

        // Here you could save to DB or send an email
        return Ok(new { success = true, message = $"Thanks {model.Name}, your message has been sent successfully!" });
    }

    // Optional GET for testing in browser
    [HttpGet("ping")]
    public IActionResult Ping() => Ok("Contact API is working ✅");
}
