using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Cuerpos
    {
        public Cuerpos()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string Cuerpo { get; set; }
        public string Descrip { get; set; }
        public string Categor { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
