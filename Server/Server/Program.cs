using System.Reflection;
using Server.Data;
using Server.Interfaces;
using Server.Repositories;
using Server.Routing;

var builder = WebApplication.CreateBuilder(args);

// Adding services to the container.
builder.Services.AddDbContext<ApplicationDbContext>();
builder.Services.AddScoped<IRatingRepository, RatingRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapEndpoints(Assembly.GetExecutingAssembly());

app.Run();