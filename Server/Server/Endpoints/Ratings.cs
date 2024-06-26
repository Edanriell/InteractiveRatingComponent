using Microsoft.AspNetCore.Mvc;
using Server.Dto;
using Server.Interfaces;
using Server.Routing;

namespace Server.Endpoints;

public class RatingsEndpoints(IRatingRepository ratingRepository)
{
    private readonly IRatingRepository _ratingRepository = ratingRepository;

    public class Ratings : IEndpointRouteHandler
    {
        public void MapEndpoints(IEndpointRouteBuilder app)
        {
            app.MapPost("/api/ratings/create", CreateNewRating);
        }

        private async Task<IResult> CreateNewRating([FromBody] CreateNewRatingRequestDto request,
            IRatingRepository ratingRepository)
        {
            // Console.WriteLine(rating.Id); 
            // return TypedResults.Created();
            return await ratingRepository.CreateNewRating(request);
        }
    }
}