using Microsoft.EntityFrameworkCore;
using VideosAPI.Entities;

namespace VideosAPI.Services
{
    public class VideosDbContext : DbContext
    {
        public DbSet<Video> Videos { get; set; }

        public VideosDbContext(
            DbContextOptions<VideosDbContext> options
        ) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.CreateSeedData();
        }
    }
}