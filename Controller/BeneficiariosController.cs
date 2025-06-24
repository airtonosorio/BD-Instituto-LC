using ILC.Api.Data;
using ILC.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ILC.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BeneficiariosController : ControllerBase
{
    private readonly AppDbContext _context;

    public BeneficiariosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Beneficiario>>> Get()
    {
        return await _context.Beneficiario.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Beneficiario>> Post([FromBody] Beneficiario beneficiario)
    {
        _context.Beneficiario.Add(beneficiario);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = beneficiario.Id }, beneficiario);
    }
}