using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApontamentoApp.Migrations
{
    public partial class ApontamentoApp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApontamentosUsuario",
                columns: table => new
                {
                    CodEmpresa = table.Column<string>(nullable: true),
                    CodUsuario = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ApInicio = table.Column<DateTime>(nullable: false),
                    ApIntervalo = table.Column<DateTime>(nullable: false),
                    ApRetorno = table.Column<DateTime>(nullable: false),
                    ApFim = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApontamentosUsuario", x => x.CodUsuario);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApontamentosUsuario");
        }
    }
}
