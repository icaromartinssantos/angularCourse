using ApontamentoDomain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApontamentoInfrastructure
{
    public class MyDbContext : DbContext
    {
        public DbSet<ApontamentoUsuario> ApontamentosUsuario { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApontamentoUsuario>().HasKey(p => p.CodUsuario);
            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }


    }
}
