using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Siglas
    {
        public Siglas()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string Siglas1 { get; set; }
        public string DSiglas { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
