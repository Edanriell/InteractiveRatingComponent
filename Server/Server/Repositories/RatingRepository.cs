using Server.Data;
using Server.Entities;
using Server.Interfaces;

namespace Server.Repositories;

public class RatingRepository(ApplicationDbContext context) : IRatingRepository
{
    public async Task<IResult> CreateNewRating(byte value)
    {
        var entity = new Rating
        {
            Value = value
        };

        await context.Ratings.AddAsync(entity);
        await context.SaveChangesAsync();
        return TypedResults.Created();
    }
}