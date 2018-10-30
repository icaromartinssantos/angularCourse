using ApontamentoDomain.Entity;
using ApontamentoRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApontamentoBusiness
{
    public class ApontamentoUsuarioBusiness
    {
        private readonly GenericRepository<ApontamentoUsuario> _Repository;

        public bool GravaApontamento(ApontamentoUsuario entity)
        {
            var ok = _Repository.Create(entity);

            return ok;
        }
    }
}
