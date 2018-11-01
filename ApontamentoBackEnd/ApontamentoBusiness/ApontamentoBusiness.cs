using ApontamentoDomain.Entity;
using ApontamentoInfrastructure;
using ApontamentoRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ApontamentoBusiness
{
    public class ApontamentoUsuarioBusiness
    {
        public readonly MyDbContext ctx;
        public readonly GenericRepository<ApontamentoUsuario> _Repository;

        public ApontamentoUsuarioBusiness(MyDbContext ctx)
        {
            this.ctx = ctx;
            _Repository = new GenericRepository<ApontamentoUsuario>(ctx);
        }


        public IQueryable<ApontamentoUsuario> ConsultaTodosApontamentos()
        {
            var ok = _Repository.GetAll();

            return ok;
        }

        public bool GravaApontamento(ApontamentoUsuario entity)
        {
            var ok = _Repository.Create(entity);

            return ok;
        }
    }
}
