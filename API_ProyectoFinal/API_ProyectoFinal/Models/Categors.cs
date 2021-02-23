using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Categors
    {
        public Categors()
        {
            Trabajadores = new HashSet<Trabajadores>();
        }

        public string Categori { get; set; }
        public string Descrip { get; set; }
        public string Cuerpo { get; set; }
        public string IdClasePer { get; set; }
        public string IdSubescala { get; set; }
        public string IdClase { get; set; }
        public string IdEscala { get; set; }
        public DateTime? FIniVigen { get; set; }
        public DateTime? FFinVigen { get; set; }
        public string DFunciones { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }
        public string Observac { get; set; }

        public virtual ClasePer IdClasePerNavigation { get; set; }
        public virtual Escala IdEscalaNavigation { get; set; }
        public virtual Subescala IdSubescalaNavigation { get; set; }
        public virtual ICollection<Trabajadores> Trabajadores { get; set; }
    }
}
