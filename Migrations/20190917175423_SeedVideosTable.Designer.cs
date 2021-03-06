﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VideosAPI.Services;

namespace VideosAPI.Migrations
{
    [DbContext(typeof(VideosDbContext))]
    [Migration("20190917175423_SeedVideosTable")]
    partial class SeedVideosTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VideosAPI.Entities.Video", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(1024);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("Videos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Amélie is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making.",
                            Name = "Le Fabuleux Destin d'Amélie Poulain",
                            Year = 2001
                        },
                        new
                        {
                            Id = 2,
                            Description = "Old and decrepit Krank (Daniel Emilfork) has lost his capacity for dreaming and is attempting to fight death by stealing the dreams of children. Krank's cadre of cloned henchmen (Dominique Pinon) snatch 5-year-old Denree (Joseph Lucien) to subject him to the horrific dream-retrieval process. The boy's father, One (Ron Perlman), the hulking strongman of a traveling circus, and his precocious 9-year-old friend, Miette (Judith Vittet), join forces to defeat Krank's minions and save Denree.",
                            Name = "La Cité Des Enfants Perdus",
                            Year = 1995
                        },
                        new
                        {
                            Id = 3,
                            Description = "DescriptionClapet (Jean-Claude Dreyfus) is a butcher who owns a run-down apartment building in post-apocalyptic France.",
                            Name = "Delicatessen",
                            Year = 1991
                        },
                        new
                        {
                            Id = 4,
                            Description = "Mathilde (Audrey Tautou) is told that her fiancé (Gaspard Ulliel) has been killed in World War I. She refuses to believe this, however, and begins trying to find out what actually happened on the battlefield the night he was supposedly killed, enlisting the help of a private investigator.",
                            Name = "Un Long Dimanche De Fiançailles",
                            Year = 2004
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
