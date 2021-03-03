using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class VTrabajadores
    {
        public int Id { get; set; }
        public string IdEmpresa { get; set; }
        public string IdTrabajador { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string DSiglas { get; set; }
        public string Domicilio { get; set; }
        public string Num { get; set; }
        public string Piso { get; set; }
        public string Puerta { get; set; }
        public string Cpostal { get; set; }
        public string DPoblacion { get; set; }
        public string DProvincia { get; set; }
    }
}
