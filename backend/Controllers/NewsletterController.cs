using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace YourApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsletterController : ControllerBase
    {
        // In-memory opslag voor demo (later database)
        private static readonly List<string> Subscribers = new List<string>();

        // POST api/Newsletter/Subscribe
        [HttpPost("Subscribe")]
        public IActionResult Subscribe([FromBody] NewsletterRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Email))
                return BadRequest(new { success = false, message = "Email is required." });

            if (!Regex.IsMatch(request.Email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
                return BadRequest(new { success = false, message = "Invalid email address." });

            // Email opslaan
            Subscribers.Add(request.Email);

            return Ok(new { success = true, message = "Newsletter aangemeld!" });
        }

        // Optioneel: GET api/Newsletter/All
        [HttpGet("All")]
        public IActionResult GetAll()
        {
            return Ok(new { success = true, subscribers = Subscribers });
        }
    }

    public class NewsletterRequest
    {
        public string Email { get; set; }
    }
}
