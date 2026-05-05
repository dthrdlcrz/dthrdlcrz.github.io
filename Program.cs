var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();  // serves index.html at /
app.UseStaticFiles();   // serves css, js, images

app.Run();
