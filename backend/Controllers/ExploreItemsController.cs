// using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BakeryWebsite.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExploreItemsController : ControllerBase
    {
        private readonly BakeryDbContext _context;

        public ExploreItemsController(BakeryDbContext context)
        {
            _context = context;
        }

        // GET: api/exploreitems
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var exploreitem = await _context.ExploreItems.ToListAsync();
            return Ok(exploreitem);
        }
    }
}
