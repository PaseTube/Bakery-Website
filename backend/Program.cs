using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services for controllers
builder.Services.AddControllers();

// Configure EF Core with SQL Server
builder.Services.AddDbContext<BakeryDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BakeryDB")));

// Enable CORS (adjust for frontend later if needed)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // for dev; in prod use WithOrigins()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Products API",
        Version = "v1",
        Description = "API to manage products",
        Contact = new OpenApiContact
        {
            Name = "Your Name",
            Email = "your.email@example.com",
            Url = new Uri("https://yourwebsite.com")
        }
    });
});

var app = builder.Build();

// Enable Swagger only in Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Products API v1");
        c.RoutePrefix = "swagger"; // UI available at /swagger
    });
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

// ✅ Enable CORS BEFORE authorization & controllers
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
