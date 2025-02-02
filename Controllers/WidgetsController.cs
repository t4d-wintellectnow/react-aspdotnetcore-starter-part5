using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using WidgetsApp.Models;

namespace WidgetsApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class WidgetsController: ControllerBase
  {
    private readonly WidgetsContext _context;

    public WidgetsController(WidgetsContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Widget>>> AllWidgets()
    {
      return await _context.Widgets.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Widget>> CreateWidget([FromBody] Widget widget)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest();
      }

      _context.Add(widget);
      await _context.SaveChangesAsync();

      return widget;
    }
  }
}