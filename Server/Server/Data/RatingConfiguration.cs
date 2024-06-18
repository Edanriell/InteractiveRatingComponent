using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Entities;

namespace Server.Data;

public class RatingConfiguration : IEntityTypeConfiguration<Rating>
{
    public void Configure(EntityTypeBuilder<Rating> builder)
    {
        builder.ToTable("Ratings");
        builder.HasKey(r => r.Id);
        builder.Property(r => r.Id).HasColumnName(nameof(Rating.Id)).HasColumnType("uuid")
            .HasDefaultValueSql("uuid_generate_v4()");
        ;
        builder.Property(r => r.Value).HasColumnName(nameof(Rating.Value)).HasColumnType("smallint");
    }
}