using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using VideosAPI.Entities;

namespace VideosAPI.Services
{
    public static class VideosDbContextExtensions
    {
        public static void CreateSeedData(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Video>().HasData(
                new Video()
                {
                    Id = 1,
                    Name = "Le Fabuleux Destin d'Amélie Poulain",
                    Description = "Amélie is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making.",
                    Year = 2001
                },
                new Video()
                {
                    Id = 2,
                    Name = "La Cité Des Enfants Perdus",
                    Description = "Old and decrepit Krank (Daniel Emilfork) has lost his capacity for dreaming and is attempting to fight death by stealing the dreams of children. Krank's cadre of cloned henchmen (Dominique Pinon) snatch 5-year-old Denree (Joseph Lucien) to subject him to the horrific dream-retrieval process. The boy's father, One (Ron Perlman), the hulking strongman of a traveling circus, and his precocious 9-year-old friend, Miette (Judith Vittet), join forces to defeat Krank's minions and save Denree.",
                    Year = 1995
                },
                new Video()
                {
                    Id = 3,
                    Name = "Delicatessen",
                    Description = "DescriptionClapet (Jean-Claude Dreyfus) is a butcher who owns a run-down apartment building in post-apocalyptic France.",
                    Year = 1991
                },
                new Video()
                {
                    Id = 4,
                    Name = "Un Long Dimanche De Fiançailles",
                    Description = "Mathilde (Audrey Tautou) is told that her fiancé (Gaspard Ulliel) has been killed in World War I. She refuses to believe this, however, and begins trying to find out what actually happened on the battlefield the night he was supposedly killed, enlisting the help of a private investigator.",
                    Year = 2004
                }
            );
        }
    }
}