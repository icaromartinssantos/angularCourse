using System;

namespace ApontamentoDomain.Entity
{
    public class ApontamentoUsuario
    {
        
        public string   CodEmpresa    { get; set; }
        public int      CodUsuario       { get; set; }
        public DateTime ApInicio    { get; set; }
        public DateTime ApIntervalo { get; set; }
        public DateTime ApRetorno   { get; set; }
        public DateTime ApFim       { get; set; }
    }
}
