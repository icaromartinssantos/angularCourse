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
    }
}
