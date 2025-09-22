using System.ComponentModel.DataAnnotations;
using System.Linq;

public class Product
{
    public int Id { get; set; }
    public string Image { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Description { get; set; }

    // Database column (comma-separated tags)
    public string Tags { get; set; }

    // Not mapped to DB — gives you an array
    [System.ComponentModel.DataAnnotations.Schema.NotMapped]
    public string[] TagArray
    {
        get
        {
            return string.IsNullOrWhiteSpace(Tags)
                ? new string[0]
                : Tags.Split(',').Select(t => t.Trim()).ToArray();
        }
        set
        {
            Tags = (value == null || value.Length == 0)
                ? string.Empty
                : string.Join(",", value);
        }
    }
}
