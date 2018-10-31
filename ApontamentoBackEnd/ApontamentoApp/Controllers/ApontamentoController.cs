using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApontamentoBusiness;
using ApontamentoDomain.Entity;
using ApontamentoInfrastructure;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApontamentoApp.Controllers
{
    [Route("api/[controller]")]
    public class ApontamentoController : Controller
    {
        private readonly MyDbContext _Ctx; 
        private readonly ApontamentoUsuarioBusiness _Business;

        public ApontamentoController(MyDbContext ctx)
        {
            _Ctx = ctx;
            _Business = new ApontamentoUsuarioBusiness(ctx);
        }

        // POST: api/<controller>
        [HttpPost]
        public bool GravaApontamento([FromBody]ApontamentoUsuario entity)
        {
            var ok = _Business.GravaApontamento(entity);

            return ok;
        }
     
    }
}
