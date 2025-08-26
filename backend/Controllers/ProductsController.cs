using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace YourNamespace.Controllers // Replace "YourNamespace" with your project's actual namespace
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        // In-memory product list
        private static List<Product> Products = new List<Product>
        {
            new Product 
            { 
                Id = 1, 
                Image = "https://images.unsplash.com/photo-1566698629409-787a68fc5724?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                Name = "Sourdough Bread", 
                Price = 5.50M, 
                Description = "A crusty artisan sourdough loaf with a tangy flavor and soft, airy interior.", 
                Tags = new List<string> { "bread", "artisan", "savory", "vegan", "special!" }
            },
            new Product 
            { 
                Id = 2, 
                Image = "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                Name = "Classic Butter Croissant", 
                Price = 3.25M, 
                Description = "Flaky, buttery croissant made with traditional French techniques.", 
                Tags = new List<string> { "pastry", "buttery", "breakfast" }
            },
        };

        // GET: api/products
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Products);
        }

        // GET: api/products/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound($"Product with ID {id} not found.");
            }
            return Ok(product);
        }

        // POST: api/products
        [HttpPost]
        public IActionResult Create([FromBody] Product newProduct)
        {
            newProduct.Id = Products.Max(p => p.Id) + 1; // Auto-generate a unique ID
            Products.Add(newProduct);
            return CreatedAtAction(nameof(GetById), new { id = newProduct.Id }, newProduct);
        }

        // PUT: api/products/{id}
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Product updatedProduct)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound($"Product with ID {id} not found.");
            }

            // Update product properties
            product.Image = updatedProduct.Image;
            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;
            product.Description = updatedProduct.Description;
            product.Tags = updatedProduct.Tags;

            return NoContent(); // Indicate success with no content
        }

        // DELETE: api/products/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound($"Product with ID {id} not found.");
            }

            Products.Remove(product);
            return NoContent(); // Indicate success with no content
        }
    }
}
