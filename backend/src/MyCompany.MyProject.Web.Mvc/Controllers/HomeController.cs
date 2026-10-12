using MyCompany.MyProject.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace MyCompany.MyProject.Web.Controllers;

public class HomeController : MyProjectControllerBase
{
    public ActionResult Index()
    {
        return RedirectToAction("Index", "Exam");
    }
}
