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
    new Product
    {
        Id = 3,
        Image = "https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Red Velvet Cupcake",
        Price = 3.75M,
        Description = "Moist red velvet cupcake topped with smooth cream cheese frosting.",
        Tags = new List<string> { "cupcake", "sweet", "dessert" }
    },
    new Product
    {
        Id = 4,
        Image = "https://images.unsplash.com/photo-1645995575875-ea6511c9d127?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Cinnamon Roll with Cream Cheese Glaze",
        Price = 4.00M,
        Description = "Soft cinnamon roll swirled with spiced sugar and topped with cream cheese glaze.",
        Tags = new List<string> { "pastry", "sweet", "breakfast" }
    },
    new Product
    {
        Id = 5,
        Image = "https://images.unsplash.com/photo-1600477063726-b6b2473e43f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Fresh Fruit Tart",
        Price = 5.00M,
        Description = "Crisp tart shell filled with creamy custard and topped with seasonal fresh fruits.",
        Tags = new List<string> { "tart", "fresh", "dessert", "special!" }
    },
    new Product
    {
        Id = 6,
        Image = "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Chocolate Éclair",
        Price = 4.50M,
        Description = "Choux pastry filled with vanilla cream and glazed with rich chocolate.",
        Tags = new List<string> { "pastry", "chocolate", "dessert" }
    },
    new Product
    {
        Id = 7,
        Image = "https://images.unsplash.com/photo-1722251172860-39856cdd3bcd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Blueberry Muffin",
        Price = 3.00M,
        Description = "Moist muffin bursting with fresh blueberries and a crumbly topping.",
        Tags = new List<string> { "muffin", "fruit", "breakfast", "special!" }
    },
    new Product
    {
        Id = 8,
        Image = "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Macarons Assortment",
        Price = 6.50M,
        Description = "A colorful selection of delicate almond meringue cookies with various fillings.",
        Tags = new List<string> { "macaron", "French", "dessert" }
    },
    new Product
    {
        Id = 9,
        Image = "https://plus.unsplash.com/premium_photo-1668772704254-c4c4798b0e5d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name = "Chocolate Chip Cookie",
        Price = 2.50M,
        Description = "Chewy cookie loaded with chunks of rich chocolate.",
        Tags = new List<string> { "cookie", "chocolate", "snack" }
    },
    new Product
    {
        Id = 10,
        Image = "https://upload.wikimedia.org/wikipedia/commons/9/92/Coffee_lemon_drizzle_cake_Gibberd_Garden_Harlow_Essex_England_01.jpg",
        Name = "Lemon Drizzle Cake",
        Price = 4.25M,
        Description = "Moist lemon sponge topped with a tangy lemon glaze.",
        Tags = new List<string> { "cake", "citrus", "dessert", "special!" }
    },
    new Product
    {
        Id = 11,
        Image = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Banana_bread.jpg",
        Name = "Banana Bread",
        Price = 3.80M,
        Description = "Classic banana bread with a moist crumb and a hint of cinnamon.",
        Tags = new List<string> { "bread", "banana", "snack" }
    },
    new Product
    {
        Id = 12,
        Image = "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
        Name = "Cheesecake Slice",
        Price = 5.75M,
        Description = "Creamy cheesecake on a buttery graham cracker crust.",
        Tags = new List<string> { "cake", "creamy", "dessert" }
    },
    new Product
    {
        Id = 13,
        Image = "https://upload.wikimedia.org/wikipedia/commons/3/36/Chocolate_Brownie.jpg",
        Name = "Brownie Square",
        Price = 3.50M,
        Description = "Rich chocolate brownie with a fudgy center.",
        Tags = new List<string> { "brownie", "chocolate", "snack", "special!" }
    },
    new Product
    {
        Id = 14,
        Image = "https://upload.wikimedia.org/wikipedia/commons/0/04/Biscotti_1.jpg",
        Name = "Pistachio Biscotti",
        Price = 2.80M,
        Description = "Crunchy Italian biscuit with roasted pistachios.",
        Tags = new List<string> { "biscotti", "Italian", "snack" }
    },
    new Product
    {
        Id = 15,
        Image = "https://upload.wikimedia.org/wikipedia/commons/2/23/Raspberry_Danish_-_20130418-049-of-365_%288662427686%29.jpg",
        Name = "Raspberry Danish",
        Price = 3.90M,
        Description = "Flaky pastry filled with raspberry jam and drizzled with icing.",
        Tags = new List<string> { "pastry", "fruit", "breakfast" }
    }
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
