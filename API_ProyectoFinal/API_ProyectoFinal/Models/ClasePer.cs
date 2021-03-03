using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class ClasePer
    {
        public ClasePer()
        {
            Categors = new HashSet<Categors>();
            Grupos = new HashSet<Grupos>();
        }

        public string IdClasePer { get; set; }
        public string DClasePer { get; set; }
        public int Id { get; set; }
        public DateTime Gcrowver { get; set; }
        public string Asimilado { get; set; }

        public virtual ICollection<Categors> Categors { get; set; }
        public virtual ICollection<Grupos> Grupos { get; set; }
    }
}
