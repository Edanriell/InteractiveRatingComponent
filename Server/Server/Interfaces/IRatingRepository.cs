namespace Server.Interfaces;

public interface IRatingRepository
{
    Task<IResult> CreateNewRating(byte ratingValue);
}