using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.Extensions;
using VideosAPI.Services;
using VideosAPI.Entities;

namespace VideosAPI.Controllers
{
    [Route("api/[controller]")]
    public class VideosController : ControllerBase
    {
        private VideosDbContext _context;

        public VideosController(VideosDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetVideos()
        {
            return Ok(_context.Videos);
        }

        [HttpGet("{id}")]
        public ActionResult GetVideo(int id)
        {
            return Ok(_context.Videos.Find(id));
        }

        [HttpPut("{id}")]
        public ActionResult UpdateVideo(int id, [FromBody] Video video)
        {
            if (id != video.Id)
            {
                return BadRequest();
            }

            _context.Videos.Update(video);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPost]
        public ActionResult CreateVideo([FromBody] Video video)
        {
            _context.Videos.Add(video);
            _context.SaveChanges();

            return Created($"{Request.GetDisplayUrl()}/{video.Id}", video);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteVideo(int id)
        {
            Video video = _context.Videos.Find(id);

            if (video == null || id != video.Id)
            {
                return NotFound();
            }
            _context.Videos.Remove(video);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
