using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_ProyectoFinal.Models;
using API_ProyectoFinal.DTO;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore;

namespace API_ProyectoFinal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadoresController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public TrabajadoresController(BootcampDBContext context)
        {
            _context = context;
        }
        //Creacion de la expresion de la DTO del trabajador con buscador de cuerpo
        private static readonly Expression<Func<Trabajadores, TrabajadoresBuscaDTO>> AsTrabajadoresBuscaDTO =
            b => new TrabajadoresBuscaDTO
            {
                Id = b.IdTrabajador,
                Apellido1 = b.Apellido1,
                Apellido2 = b.Apellido2,
                Nombre = b.Nombre,
                Cuerpo = b.CuerpoNavigation.Descrip,
                Grupo = b.GrupoNavigation.Grupo,
                Categoria = b.IdCategoriaNavigation.Descrip,
                TipoEmpleado = b.TProvisNavigation.Descrip,
                TP = b.TProvisNavigation.IdClasePer,
                Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.DEmpresa,
                Clave = b.Id
            };
        //Creacion de la expresion de la DTO del trabajador pdf
        private static readonly Expression<Func<Trabajadores, TrabajadoresPdfDTO>> AsTrabajadoresPdfDTO =
            b => new TrabajadoresPdfDTO
            {
                //Empresa
                NIF_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.Nif,
                Nombre_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.DEmpresa,
                TipoVia_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.Siglas,
                Domicilio_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.Domicilio,
                Num_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.Num,
                CP_Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.Cpostal,
                //Trabajador
                Apellido1 = b.Apellido1,
                Apellido2 = b.Apellido2,
                Nombre = b.Nombre,
                NIF = b.Nif,
                FechaNac = (DateTime)b.FNac,
                Nivel_Formativo = b.NivOrg.DNivel,
                Municipio = b.IdPNavigation.DPoblacion
            };

        // GET: api/Trabajadores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Trabajadores>>> GetTrabajadores()
        {
            return await _context.Trabajadores.ToListAsync();

        }

        //Get que coge todos los campos necesarios para buscar los empleados según el cuerpo correspondiente
        [HttpGet("/Trabajadores/Cuerpo/{nombre}")]
        public IQueryable<TrabajadoresBuscaDTO> GetTrabajadoresBusca(string nombre)
        {
            return _context.Trabajadores.Where(e => e.Cuerpo == nombre)
                .Select(AsTrabajadoresBuscaDTO);
        }

        //Get que coge todos los campos necesarios que se muestran en la tabla principal del FrontEnd
        [HttpGet("all")]
        public IQueryable<TrabajadoresDTO> GetTrabajadoresAll()
        {
            var trabajadores = from b in _context.Trabajadores
                               select new TrabajadoresDTO()
                               {
                                   Id = b.IdTrabajador,
                                   Apellido1 = b.Apellido1,
                                   Apellido2 = b.Apellido2,
                                   Nombre = b.Nombre,
                                   Cuerpo = b.CuerpoNavigation.Descrip,
                                   Grupo = b.GrupoNavigation.Grupo,
                                   Categoria = b.IdCategoriaNavigation.Descrip,
                                   TipoEmpleado = b.TProvisNavigation.Descrip,
                                   TP = b.TProvisNavigation.IdClasePer,
                                   Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.DEmpresa,
                                   Clave = b.Id
                               };

            return trabajadores;
        }
       //Get el cual se pasa el id del trabajador y devuelve todos los campos del DTO TrabajadoresPdfDTO
        [HttpGet("pdf/{id}")]
        public IQueryable<TrabajadoresPdfDTO> GetTrabajadoresPDF(int id)
        {
            return _context.Trabajadores.Where(e => e.Id == id)
                 .Select(AsTrabajadoresPdfDTO);
        }
     
        // GET: api/Trabajadores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trabajadores>> GetTrabajadores (string id)
        {
            var trabajadores = await _context.Trabajadores.FindAsync(id);

            if (trabajadores == null)
            {
                return NotFound();
            }

            return trabajadores;
        }

        private bool TrabajadoresExists(string id)
        {
            return _context.Trabajadores.Any(e => e.IdEmpresa == id);
        }
    }
}
