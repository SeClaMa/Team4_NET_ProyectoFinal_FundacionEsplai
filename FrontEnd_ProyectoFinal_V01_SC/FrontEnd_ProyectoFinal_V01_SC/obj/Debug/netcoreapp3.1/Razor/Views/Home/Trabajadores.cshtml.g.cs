#pragma checksum "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\Home\Trabajadores.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dab381fd51deefcff283a3d5206ac2ad84adfba5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Trabajadores), @"mvc.1.0.view", @"/Views/Home/Trabajadores.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\_ViewImports.cshtml"
using FrontEnd_ProyectoFinal_V01_SC;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\_ViewImports.cshtml"
using FrontEnd_ProyectoFinal_V01_SC.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dab381fd51deefcff283a3d5206ac2ad84adfba5", @"/Views/Home/Trabajadores.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"621aebe66287952adbf1309fb4c3638cd291e77d", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Trabajadores : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\Home\Trabajadores.cshtml"
  
    ViewData["Title"] = "Trabajadores";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>");
#nullable restore
#line 7 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\Home\Trabajadores.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\r\n\r\n");
#nullable restore
#line 9 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\Home\Trabajadores.cshtml"
  
    string getNombre(string nombre)
    {
        return nombre;
    }


#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n<p class=\"Mame\">Bienvenido a la pagina web ");
#nullable restore
#line 18 "D:\Tic Curso Net\PROYECTO_FINAL\FrontEnd_ProyectoFinal_V01_SC\FrontEnd_ProyectoFinal_V01_SC\Views\Home\Trabajadores.cshtml"
                                      Write(getNombre("Aguilar"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</p>
<input type=""button"" value=""Enviar"" id=""button1"">

<table class=""table table-striped"">
    <tr>
        <th>Cod.</th>
        <th>Nombre</th>
        <th>Grupo</th>
        <th>Cuerpo</th>
    </tr>
    <tbody id=""results"">
    </tbody>

</table>


");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
