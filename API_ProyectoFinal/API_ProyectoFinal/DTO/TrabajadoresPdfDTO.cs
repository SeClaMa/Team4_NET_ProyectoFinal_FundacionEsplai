using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_ProyectoFinal.DTO
{
    public class TrabajadoresPdfDTO
    {
        //Empresa
        public string NIF_Empresa { get; set; }
        public string Nombre_Empresa { get; set; }
        public string TipoVia_Empresa { get; set; }
        public string Domicilio_Empresa { get; set; }
        public string Num_Empresa { get; set; }
        public string CP_Empresa { get; set; }

        //Trabajador
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public DateTime FechaNac { get; set; }
        public string Nivel_Formativo { get; set; }
        public string Municipio { get; set; }
        
    }
}
