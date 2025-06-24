using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ILC.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "beneficiario_ilc",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    data_nascimento = table.Column<DateTime>(type: "TEXT", nullable: false),
                    telefone = table.Column<string>(type: "TEXT", maxLength: 15, nullable: true),
                    pessoas_na_casa = table.Column<int>(type: "INTEGER", nullable: false),
                    tipo_escola = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_beneficiario_ilc", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "beneficiario_ilc");
        }
    }
}
