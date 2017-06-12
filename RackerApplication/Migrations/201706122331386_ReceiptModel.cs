namespace RackerApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReceiptModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Receipts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        ReceiptName = c.String(),
                        RecieptPrice = c.Int(nullable: false),
                        IsComplete = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Receipts");
        }
    }
}
