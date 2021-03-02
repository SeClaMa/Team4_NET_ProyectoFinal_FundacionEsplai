using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_ProyectoFinal.Models;

namespace API_ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public EmpresasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Empresas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empresas>>> GetEmpresas()
        {
            return await _context.Empresas.ToListAsync();
        }

        // GET: api/Empresas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empresas>> GetEmpresas(string id)
        {
            var empresas = await _context.Empresas.FindAsync(id);

            if (empresas == null)
            {
                return NotFound();
            }

            return empresas;
        }

        // PUT: api/Empresas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutEmpresas(string id, Empresas empresas)
        {
            if (id != empresas.IdEmpresa)
            {
                return BadRequest();
            }

            _context.Entry(empresas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpresasExists(id))
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

        // POST: api/Empresas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Empresas>> PostEmpresas(Empresas empresas)
        {
            _context.Empresas.Add(empresas);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmpresasExists(empresas.IdEmpresa))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmpresas", new { id = empresas.IdEmpresa }, empresas);
        }

        // DELETE: api/Empresas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Empresas>> DeleteEmpresas(string id)
        {
            var empresas = await _context.Empresas.FindAsync(id);
            if (empresas == null)
            {
                return NotFound();
            }

            _context.Empresas.Remove(empresas);
            await _context.SaveChangesAsync();

            return empresas;
        }
        */
        private bool EmpresasExists(string id)
        {
            return _context.Empresas.Any(e => e.IdEmpresa == id);
        }
    }
}
