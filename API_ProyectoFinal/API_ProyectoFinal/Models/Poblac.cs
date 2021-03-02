using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Poblac
    {
        public Poblac()
        {
            TrabajadoresIdP = new HashSet<Trabajadores>();
            TrabajadoresIdPNavigation = new HashSet<Trabajadores>();
        }

        public string IdProvincia { get; set; }
        public string IdPoblacion { get; set; }
        public string DPoblacion { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual Provincias IdProvinciaNavigation { get; set; }
        public virtual ICollection<Trabajadores> TrabajadoresIdP { get; set; }
        public virtual ICollection<Trabajadores> TrabajadoresIdPNavigation { get; set; }
    }
}
