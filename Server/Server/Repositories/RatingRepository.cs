using Server.Data;
using Server.Dto;
using Server.Entities;
using Server.Interfaces;

namespace Server.Repositories;

public class RatingRepository(ApplicationDbContext context) : IRatingRepository
{
    public async Task<IResult> CreateNewRating(CreateNewRatingRequestDto request)
    {
        var entity = new Rating
        {
            Value = request.Value
        };

        await context.Ratings.AddAsync(entity);
        await context.SaveChangesAsync();
        return TypedResults.Created("", new CreateNewRatingResponseDto
        {
            Message = "Rating successfully submitted!"
        });
    }
}