using Microsoft.EntityFrameworkCore;

public class BakeryDbContext : DbContext
{
    public BakeryDbContext(DbContextOptions<BakeryDbContext> options) : base(options) { }
    public DbSet<Product> Products { get; set; }
    public DbSet<ExploreItem> ExploreItems { get; set; }
    public DbSet<BakeryItem> BakeryItems { get; set; }
    public DbSet<DiningItem> DiningItems { get; set; }
}