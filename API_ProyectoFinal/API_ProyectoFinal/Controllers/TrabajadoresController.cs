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
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadoresController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public TrabajadoresController(BootcampDBContext context)
        {
            _context = context;
        }

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
                Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.DEmpresa
            };

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

        [HttpGet("/Trabajadores/Cuerpo/{nombre}")]
        public IQueryable<TrabajadoresBuscaDTO> GetTrabajadoresBusca(string nombre)
        {
            return _context.Trabajadores.Where(e => e.Cuerpo == nombre)
                .Select(AsTrabajadoresBuscaDTO);
        }

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
                                   Empresa = b.NivOrg.IdOrganigNavigation.IdEmpresaNavigation.DEmpresa
                               };

            return trabajadores;
        }
       
        [HttpGet("pdf/{id}")]
        public IQueryable<TrabajadoresPdfDTO> GetTrabajadoresPDF(string id)
        {
            return _context.Trabajadores.Where(e => e.IdTrabajador == id)
                 .Select(AsTrabajadoresPdfDTO);
        }
     
        // GET: api/Trabajadores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Trabajadores>> GetTrabajadores   (string id)
        {
            var trabajadores = await _context.Trabajadores.FindAsync(id);

            if (trabajadores == null)
            {
                return NotFound();
            }

            return trabajadores;
        }

        // PUT: api/Trabajadores/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutTrabajadores(string id, Trabajadores trabajadores)
        {
            if (id != trabajadores.IdEmpresa)
            {
                return BadRequest();
            }

            _context.Entry(trabajadores).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrabajadoresExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Trabajadores
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Trabajadores>> PostTrabajadores(Trabajadores trabajadores)
        {
            _context.Trabajadores.Add(trabajadores);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TrabajadoresExists(trabajadores.IdEmpresa))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTrabajadores", new { id = trabajadores.IdEmpresa }, trabajadores);
        }

        // DELETE: api/Trabajadores/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Trabajadores>> DeleteTrabajadores(string id)
        {
            var trabajadores = await _context.Trabajadores.FindAsync(id);
            if (trabajadores == null)
            {
                return NotFound();
            }

            _context.Trabajadores.Remove(trabajadores);
            await _context.SaveChangesAsync();

            return trabajadores;
        }
        */
        private bool TrabajadoresExists(string id)
        {
            return _context.Trabajadores.Any(e => e.IdEmpresa == id);
        }
    }
}
