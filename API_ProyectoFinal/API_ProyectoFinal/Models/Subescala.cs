using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Subescala
    {
        public Subescala()
        {
            Categors = new HashSet<Categors>();
        }

        public string IdSubescala { get; set; }
        public string IdEscala { get; set; }
        public string DSubescala { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }

        public virtual Escala IdEscalaNavigation { get; set; }
        public virtual ICollection<Categors> Categors { get; set; }
    }
}
