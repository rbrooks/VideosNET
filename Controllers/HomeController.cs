using Microsoft.AspNetCore.Mvc;

namespace VideosAPI.Controllers
{
    [Route("/home")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}