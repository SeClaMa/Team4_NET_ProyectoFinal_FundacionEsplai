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
    public class CuerposController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public CuerposController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Cuerpos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cuerpos>>> GetCuerpos()
        {
            return await _context.Cuerpos.OrderBy(d => d.Descrip).ToListAsync();
        }

        // GET: api/Cuerpos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cuerpos>> GetCuerpos(string id)
        {
            var cuerpos = await _context.Cuerpos.FindAsync(id);

            if (cuerpos == null)
            {
                return NotFound();
            }

            return cuerpos;
        }
        /*
        // PUT: api/Cuerpos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCuerpos(string id, Cuerpos cuerpos)
        {
            if (id != cuerpos.Cuerpo)
            {
                return BadRequest();
            }

            _context.Entry(cuerpos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CuerposExists(id))
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

        // POST: api/Cuerpos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cuerpos>> PostCuerpos(Cuerpos cuerpos)
        {
            _context.Cuerpos.Add(cuerpos);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CuerposExists(cuerpos.Cuerpo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCuerpos", new { id = cuerpos.Cuerpo }, cuerpos);
        }

        // DELETE: api/Cuerpos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cuerpos>> DeleteCuerpos(string id)
        {
            var cuerpos = await _context.Cuerpos.FindAsync(id);
            if (cuerpos == null)
            {
                return NotFound();
            }

            _context.Cuerpos.Remove(cuerpos);
            await _context.SaveChangesAsync();

            return cuerpos;
        }
        */
        private bool CuerposExists(string id)
        {
            return _context.Cuerpos.Any(e => e.Cuerpo == id);
        }
    }
}
