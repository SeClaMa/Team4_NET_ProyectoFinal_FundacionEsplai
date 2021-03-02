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
    public class CategoriasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public CategoriasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Categorias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categors>>> GetCategors()
        {
            return await _context.Categors.ToListAsync();
        }

        // GET: api/Categorias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Categors>> GetCategors(string id)
        {
            var categors = await _context.Categors.FindAsync(id);

            if (categors == null)
            {
                return NotFound();
            }

            return categors;
        }

        // PUT: api/Categorias/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutCategors(string id, Categors categors)
        {
            if (id != categors.Categori)
            {
                return BadRequest();
            }

            _context.Entry(categors).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategorsExists(id))
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
        
        // POST: api/Categorias
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Categors>> PostCategors(Categors categors)
        {
            _context.Categors.Add(categors);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CategorsExists(categors.Categori))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCategors", new { id = categors.Categori }, categors);
        }

        // DELETE: api/Categorias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Categors>> DeleteCategors(string id)
        {
            var categors = await _context.Categors.FindAsync(id);
            if (categors == null)
            {
                return NotFound();
            }

            _context.Categors.Remove(categors);
            await _context.SaveChangesAsync();

            return categors;
        }
        */
        private bool CategorsExists(string id)
        {
            return _context.Categors.Any(e => e.Categori == id);
        }
    }
}
