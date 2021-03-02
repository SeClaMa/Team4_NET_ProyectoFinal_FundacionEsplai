using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEnd_ProyectoFinal_V01_SC.Controllers
{
    public class EmpresasController : Controller
    {
        public IActionResult Empresas()
        {
            return View();
        }
    }
}
