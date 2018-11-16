using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApontamentoApp.Migrations
{
    public partial class _20181116135500_ApontamentoApp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "apDate",
                table: "ApontamentosUsuario",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "apDate",
                table: "ApontamentosUsuario");
        }
    }
}
