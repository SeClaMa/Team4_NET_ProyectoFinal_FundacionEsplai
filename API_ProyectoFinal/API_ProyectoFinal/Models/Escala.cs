using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Escala
    {
        public Escala()
        {
            Categors = new HashSet<Categors>();
            Subescala = new HashSet<Subescala>();
        }

        public string IdEscala { get; set; }
        public string DEscala { get; set; }
        public string Abreviacion { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual ICollection<Categors> Categors { get; set; }
        public virtual ICollection<Subescala> Subescala { get; set; }
    }
}
