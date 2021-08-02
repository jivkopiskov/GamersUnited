using Microsoft.EntityFrameworkCore.Migrations;

namespace GamersUnited.Data.Migrations
{
    public partial class removewrongcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentId",
                table: "Comments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParentId",
                table: "Comments",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
