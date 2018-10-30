using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApontamentoBusiness;
using ApontamentoDomain.Entity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApontamentoApp.Controllers
{
    [Route("api/[controller]")]
    public class ApontamentoController : Controller
    {

        private ApontamentoUsuarioBusiness _Business = new ApontamentoUsuarioBusiness();

        // POST: api/<controller>
        [HttpPost]
        public bool GravaApontamento([FromBody]ApontamentoUsuario entity)
        {
            var ok = _Business.GravaApontamento(entity);

            return ok;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
