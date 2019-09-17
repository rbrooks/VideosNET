using Microsoft.EntityFrameworkCore.Migrations;

namespace VideosAPI.Migrations
{
    public partial class SeedVideosTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Videos",
                columns: new[] { "Id", "Description", "Name", "Year" },
                values: new object[,]
                {
                    { 1, "Amélie is a fanciful comedy about a young woman who discretely orchestrates the lives of the people around her, creating a world exclusively of her own making.", "Le Fabuleux Destin d'Amélie Poulain", 2001 },
                    { 2, "Old and decrepit Krank (Daniel Emilfork) has lost his capacity for dreaming and is attempting to fight death by stealing the dreams of children. Krank's cadre of cloned henchmen (Dominique Pinon) snatch 5-year-old Denree (Joseph Lucien) to subject him to the horrific dream-retrieval process. The boy's father, One (Ron Perlman), the hulking strongman of a traveling circus, and his precocious 9-year-old friend, Miette (Judith Vittet), join forces to defeat Krank's minions and save Denree.", "La Cité Des Enfants Perdus", 1995 },
                    { 3, "DescriptionClapet (Jean-Claude Dreyfus) is a butcher who owns a run-down apartment building in post-apocalyptic France.", "Delicatessen", 1991 },
                    { 4, "Mathilde (Audrey Tautou) is told that her fiancé (Gaspard Ulliel) has been killed in World War I. She refuses to believe this, however, and begins trying to find out what actually happened on the battlefield the night he was supposedly killed, enlisting the help of a private investigator.", "Un Long Dimanche De Fiançailles", 2004 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Videos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Videos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Videos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Videos",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
