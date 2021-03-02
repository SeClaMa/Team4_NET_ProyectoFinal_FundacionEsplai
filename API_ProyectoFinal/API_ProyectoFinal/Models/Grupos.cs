using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Grupos
    {
        public Grupos()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string Grupo { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }
        public string GrupoPpension { get; set; }
        public string IdClasePer { get; set; }
        public string DGrupo { get; set; }

        public virtual ClasePer IdClasePerNavigation { get; set; }
        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
