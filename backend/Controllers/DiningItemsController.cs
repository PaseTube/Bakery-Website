// using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BakeryWebsite.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DiningItemsController : ControllerBase
    {
        private readonly BakeryDbContext _context;

        public DiningItemsController(BakeryDbContext context)
        {
            _context = context;
        }

        // GET: api/diningitem
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var diningitem = await _context.DiningItems.ToListAsync();
            return Ok(diningitem);
        }
    }
}
