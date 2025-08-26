var builder = WebApplication.CreateBuilder(args);

// Add services needed for controllers
builder.Services.AddControllers();

// Enable CORS to allow frontend to make API calls
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()  // Allow requests from anywhere during dev
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Use static files (but they are served by Vite in this case)
app.UseStaticFiles();

app.UseRouting();

// Enable CORS (must be before MapControllers)
app.UseCors("AllowAll");

app.MapControllers();

app.Run();
