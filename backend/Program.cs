using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services for controllers
builder.Services.AddControllers();

// Configure for deployment-friendly CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontendOrigin", policy =>
    {
        policy.WithOrigins("https://bakery-website-git-csharp-pawanpreet-singhs-projects.vercel.app") // Vercel's frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add Swagger (API Documentation)
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
            Name = "Pawanpreet Singh",
            Email = "your.email@example.com",
            Url = new Uri("https://yourwebsite.com")
        }
    });
});

var app = builder.Build();

// Enable Swagger always (useful in production for API inspection)
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Products API v1");
    c.RoutePrefix = "swagger"; // UI will be available at /swagger
});

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

// ✅ Enable CORS for your frontend
app.UseCors("AllowFrontendOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
