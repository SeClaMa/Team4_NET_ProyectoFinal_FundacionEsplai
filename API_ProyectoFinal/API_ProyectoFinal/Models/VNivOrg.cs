using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class VNivOrg
    {
        public int Id { get; set; }
        public string IdOrganig { get; set; }
        public string IdEmpresa { get; set; }
        public string IdNivel { get; set; }
        public string Camino { get; set; }
        public string DNivel { get; set; }
        public string IdNivelPadre { get; set; }
        public string DNivelPadre { get; set; }
    }
}
