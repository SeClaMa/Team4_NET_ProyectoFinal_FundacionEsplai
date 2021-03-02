using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class SitAdmv
    {
        public SitAdmv()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string SitAdmv1 { get; set; }
        public string Descrip { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
