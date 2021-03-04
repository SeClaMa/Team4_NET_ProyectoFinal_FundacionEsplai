using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class TProvis
    {
        public TProvis()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string TProvis1 { get; set; }
        public string Descrip { get; set; }
        public string IdClasePer { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
