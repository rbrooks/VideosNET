using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.Extensions;
using VideosAPI.Services;
using VideosAPI.Entities;

namespace VideosAPI.Controllers
{
    [Route("api/[controller]")]
    public class VideosController : ControllerBase
    {
        private VideosDbContext _db;

        public VideosController(VideosDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult GetVideos()
        {
            return Ok(_db.Videos);
        }

        [HttpGet("{id}")]
        public ActionResult GetVideo(int id)
        {
            return Ok(_db.Videos.Find(id));
        }

        [HttpPut("{id}")]
        public ActionResult UpdateVideo(int id, [FromBody] Video video)
        {
            if (id != video.Id)
            {
                return BadRequest();
            }

            _db.Videos.Update(video);
            _db.SaveChanges();

            return NoContent();
        }

        [HttpPost]
        public ActionResult CreateVideo([FromBody] Video video)
        {
            _db.Videos.Add(video);
            _db.SaveChanges();

            return Created($"{Request.GetDisplayUrl()}/{video.Id}", video);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteVideo(int id)
        {
            Video video = _db.Videos.Find(id);

            if (video == null || id != video.Id)
            {
                return NotFound();
            }
            _db.Videos.Remove(video);
            _db.SaveChanges();

            return NoContent();
        }
    }
}
