using System;
using System.Collections.Generic;

namespace API_ProyectoFinal.Models
{
    public partial class Organig
    {
        public Organig()
        {
            NivOrgIdOrganigNavigation = new HashSet<NivOrg>();
            NivOrgOrganig = new HashSet<NivOrg>();
        }

        public string DOrganig { get; set; }
        public int EmpresasId { get; set; }
        public DateTime Gcrowver { get; set; }
        public int Id { get; set; }
        public string IdEmpresa { get; set; }
        public string IdOrganig { get; set; }

        public virtual Empresas Empresas { get; set; }
        public virtual Empresas IdEmpresaNavigation { get; set; }
        public virtual ICollection<NivOrg> NivOrgIdOrganigNavigation { get; set; }
        public virtual ICollection<NivOrg> NivOrgOrganig { get; set; }
    }
}
