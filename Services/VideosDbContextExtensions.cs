using System.Collections.Generic;
using System.Linq;
using VideosAPI.Entities;

namespace VideosAPI.Services
{
    public static class VideosDbContextExtensions
    {
        public static void CreateSeedData
            (this VideosDbContext context)
        {
            if (context.Videos.Any())
                return;

            var videos = new List<Video>()
            {
                new Video()
                {
                        Name = "Le Fabuleux Destin d'Amélie Poulain",
                        Year = 2001
                },
                new Video()
                {
                        Name = "La Cité Des Enfants Perdus",
                        Year = 1995
                },
                new Video()
                {
                        Name = "Delicatessen",
                        Year = 1991
                },
                new Video()
                {
                        Name = "Un Long Dimanche De Fiançailles",
                        Year = 2004
                }
            };

            context.AddRange(videos);
            context.SaveChanges();
        }
    }
}