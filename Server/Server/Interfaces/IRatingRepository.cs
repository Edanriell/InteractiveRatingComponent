using Server.Dto;

namespace Server.Interfaces;

public interface IRatingRepository
{
    Task<IResult> CreateNewRating(CreateNewRatingRequestDto request);
}