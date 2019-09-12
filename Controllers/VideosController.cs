using Microsoft.AspNetCore.Mvc;
using VideosAPI.Services;

namespace VideosAPI.Controllers
{
    [Route("api/[controller]")]
    public class VideosController : Controller
    {
        private VideosDbContext _context;

        public VideosController(VideosDbContext context)
        {
            _context = context;
        }

        public IActionResult GetVideos()
        {
            return Ok(_context.Videos);
        }
    }
}