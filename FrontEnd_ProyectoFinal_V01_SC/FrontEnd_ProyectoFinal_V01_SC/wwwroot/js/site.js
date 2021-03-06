// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Variables de Token
var text1 = [];
var correo = "hola@hola.com";
var pass = "Hola_123";



//POST de token
function ajaxLogin(url, method, correo, pass) {
    fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify({
                email: correo,
                password: pass
            })
        })
        .then(res => res.text())
        .then(token => {
            localStorage.setItem('token', token);
        });
}
//Token llevado
window.addEventListener('load', ajaxLogin('https://localhost:44365/api/Token', 'POST', correo, pass));

//Carga de Funciones
function carga() {
    TrabajadoresCompleto();
    Cuerpos();
    fechaActual();
}

//Funcion de fecha
function fechaActual() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0!
    var yyyy = today.getFullYear();
    switch (mm) {
        case "01":
            mm = "Enero";
            break;
        case "02":
            mm = "Febrero";
            break;
        case "03":
            mm = "Marzo";
            break;
        case "04":
            mm = "Abril";
            break;
        case "05":
            mm = "Mayo";
            break;
        case "06":
            mm = "Junio";
            break;
        case "07":
            mm = "Julio";
            break;
        case "08":
            mm = "Agosto";
            break;
        case "09":
            mm = "Septiembre";
            break;
        case "10":
            mm = "Octubre";
            break;
        case "11":
            mm = "Noviembre";
            break;
        case "12":
            mm = "Diciembre";
            break;
        default:

            break;
    }
    today =' '+ dd + ' de ' + mm + ' de ' + yyyy;
    document.getElementById("fechaAct").innerHTML = today;
}

//Funcion de API a Trabajadores
function TrabajadoresCompleto() {
    $(document).ready(function () {
        $("#resultados2").kendoGrid({
            toolbar: ["excel","pdf","search"],
            excel: {
                allPages: true,
                fileName: "Trabajdores.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true               
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
            dataSource: {
                transport: {
                    read: {
                        contentType: 'application/json',
                        dataType: 'json',
                        type: 'GET',
                        url: "https://localhost:44365/api/Trabajadores/all",
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                    }
                },
                schema: {
                    model: {
                        fields: {
                            id: { type: "string" },
                            nombre: { type: "string" },
                            apellido1: { type: "string" },
                            apellido2: { type: "string" },
                            cuerpo: { type: "string" },
                            grupo: { type: "string" },
                            categoria: { type: "string" },
                            tipoEmpleado: { type: "string" },
                            tp: { type: "string" },
                            empresa: { type: "string" },
                            clave: { type: "number" }
                        }
                    }
                },
                pageSize: 15
            },
            height: 800,
            filterable: true,
            sortable: true,
            pageable: true,
            columns: [{
                field: "id",
                title: "Id",
                width: "80px"
            },
            {
                    field: "Foto",
                template: "<img class=\'imgRedonda\' src='../fotos_empleado/#:id#.png' width=50px  onerror=\"this.onerror = null; this.src = '../fotos_empleado/neutro.png';\">",
                width: "90px"
            }
                ,
            {
                //field: "apellido1",
                field: "apellido1",
                title: "Trabajador/a",
                template: "#= apellido1 + ' ' + apellido2 + ', ' + nombre #"
            }
                ,
            {
                //field: "tp",
                field: "tp",
                title: "TP",
                width: "70px",
                template: "<div class='texto_tipo_puesto'>#: tp #</div>",
            },
            {
                field: "tipoEmpleado",
                title: "Tipo Empleado/a",
                width: "160px"
            },
            {
                field: "grupo",
                title: "Grupo",
                template: "<div class='fondoRedondo'>#: grupo #</div>",
                width: "95px"
            },
            {
                field: "cuerpo",
                title: "Cuerpo",
                width: "130px"
            },
            {
                field: "categoria",
                title: "Categoria",
                width: "120px"
            },
            {
                field: "",
               // template: "<a href='' onclick=\"generar_pdf(#: id #);\"  class='boton_pdf'><i class='bi k-i-file-pdf'></i > PDF</a>",
                template: "<a href=\"javascript:generar_pdf(#: clave #);\" class='boton_pdf'><span class='k-icon k-i-file-pdf'></span> Sepe</a>",
                width: "90px"
            }
            ]
        });
    });
}

//Funcion para generar PDF

function generar_pdf(empleado) {
    $.ajax({
        url: "https://localhost:44365/api/Trabajadores/pdf/" + empleado,
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {

            //localStorage["datas"] = JSON.stringify(data);
            localStorage.setItem('emple', JSON.stringify(data));

            // var stored_datas = JSON.parse(localStorage["datas"]);
            var datos_empleado = localStorage.getItem('emple');
            datos_empleado = JSON.parse(datos_empleado);

            //console.log(datos_empleado);
            pintar_pdf(datos_empleado);
        },
        error: function (error) {
            console.log(error);
        }
    })
}



//Funcion para filtrar Cuerpos
function FiltroCuerpo(nom) {
    $("#resultados2").empty();
    $(document).ready(function () {
        $("#resultados2").kendoGrid({
            toolbar: ["excel", "pdf", "search"],
            excel: {
                allPages: true,
                fileName: "Trabajdores.xlsx",
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            pdf: {
                allPages: true,
                avoidLinks: true,
                paperSize: "A4",
                margin: { top: "2cm", left: "1cm", right: "1cm", bottom: "1cm" },
                landscape: true,
                repeatHeaders: true,
                template: $("#page-template").html(),
                scale: 0.8
            },
            dataSource: {
                transport: {
                    read: {
                        contentType: 'application/json',
                        dataType: 'json',
                        type: 'GET',
                        url: "https://localhost:44365/Trabajadores/Cuerpo/" + nom,
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                    }
                },
                schema: {
                    model: {
                        fields: {
                            id: { type: "string" },
                            nombre: { type: "string" },
                            apellido1: { type: "string" },
                            apellido2: { type: "string" },
                            cuerpo: { type: "string" },
                            grupo: { type: "string" },
                            categoria: { type: "string" },
                            tipoEmpleado: { type: "string" },
                            tp: { type: "string" },
                            empresa: { type: "string" },
                            clave: { type: "number" }
                        }
                    }
                },
                pageSize: 15
            },
            height: 800,
            filterable: true,
            sortable: true,
            pageable: true,
            columns: [{
                field: "id",
                title: "Id",
                width: "80px"
            },
            {
                field: "Foto",
                template: "<img class=\'imgRedonda\' src='../fotos_empleado/#:id#.png' width=50px  onerror=\"this.onerror = null; this.src = '../fotos_empleado/neutro.png';\">",
                width: "90px"
            }
                ,
            {
                //field: "apellido1",
                field: "apellido1",
                title: "Trabajador/a",
                template: "#= apellido1 + ' ' + apellido2 + ', ' + nombre #"
            }
                ,
            {
                //field: "tp",
                field: "tp",
                title: "TP",
                width: "70px",
                template: "<div class='texto_tipo_puesto'>#: tp #</div>",
            },
            {
                field: "tipoEmpleado",
                title: "Tipo Empleado/a",
                width: "160px"
            },
            {
                field: "grupo",
                title: "Grupo",
                template: "<div class='fondoRedondo'>#: grupo #</div>",
                width: "95px"
            },
            {
                field: "cuerpo",
                title: "Cuerpo",
                width: "130px"
            },
            {
                field: "categoria",
                title: "Categoria",
                width: "120px"
            },
            {
                field: "",
                // template: "<a href='' onclick=\"generar_pdf(#: id #);\"  class='boton_pdf'><i class='bi k-i-file-pdf'></i > PDF</a>",
                template: "<a href=\"javascript:generar_pdf(#: clave #);\" class='boton_pdf'><span class='k-icon k-i-file-pdf'></span> Sepe</a>",
                width: "90px"
            }
            ]
        });
    });
}



//Funcion de API para trear los cuerpos
function Cuerpos() {
    $.ajax({
        url: "https://localhost:44365/api/Cuerpos",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {

            //localStorage["datas"] = JSON.stringify(data);
            localStorage.setItem('datas', JSON.stringify(data));

            // var stored_datas = JSON.parse(localStorage["datas"]);
            var stored_datas = localStorage.getItem('datas');
            stored_datas = JSON.parse(stored_datas);

            //console.log(stored_datas);
            displayValues(stored_datas);
        },
        error: function (error) {
            console.log(error);
        }
    })
}


function displayValues(stored_datas) {
    //var x = localStorage.getItem("datas");


    stored_datas.forEach((i) => {
        //var html = document.getElementById("cuerpos").innerHTML;
        // document.getElementById("cuerpos").innerHTML += "<br>" + i.descrip;
        document.getElementById("cuerpos").innerHTML += "<button class='btnn' onclick=\"FiltroCuerpo('" + i.cuerpo + "');\"><i class='bi bi-building'></i > " + i.descrip + "</button>";
    })
}


//Funcion para Pintar el PDF
function pintar_pdf_2(datos_empleado) {
    var doc = new jsPDF();

    doc.text(20, 20, datos_empleado[0].nombre);
    doc.addPage();
    doc.text(20, 20, 'Esto es la pagina dós, Bien?');
    doc.save('Prueba.pdf');
    
}

const { PDFDocument } = PDFLib
//Funcion para Pintar el PDF
async function pintar_pdf(datos_empleado) {
    //datos_empleado[0].nombre;

    const formUrl = '../modelo/modelosepe.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes, { ignoreEncryption: true })

    // Get the form containing all the fields
    const form = pdfDoc.getForm()

    // Get all fields in the PDF by their names
    const nif_empresa = form.getTextField('ID_EMPR')
    const nombre_empresa = form.getTextField('Texto7')
    const domicilio_social = form.getTextField('Texto8')
    const pais_empresa = form.getTextField('Texto9')
    const cp_empresa = form.getTextField('Texto19')
    const pais_empresa2 = form.getTextField('DEN_PAISCT')
    const nombre_empleado = form.getTextField('NOM_TRA')
    const apellido1_empleado = form.getTextField('APE1_TRA')
    const apellido2_empleado = form.getTextField('APE2_TRA')
    //const dni_empleado = form.getTextField('NIFNIE_TRA')
    //const nac_empleado = form.getTextField('FX_NAC_TRA')
    const nivel_empleado = form.getTextField('DEN_NVFOR')
    const nacionalidad_empleado = form.getTextField('DEN_NACTRA')
    const municipio_empleado = form.getTextField('DEN_MUNDO')
    const pais_empleado = form.getTextField('DEN_PAISDO')
    // Fill in the basic info fields
    nif_empresa.setText(datos_empleado[0].niF_Empresa)
    nombre_empresa.setText(datos_empleado[0].nombre_Empresa)
    domicilio_social.setText(datos_empleado[0].tipoVia_Empresa + " " + datos_empleado[0].domicilio_Empresa + " " + datos_empleado[0].num_Empresa)
    pais_empresa.setText("ESPAÑA")
    cp_empresa.setText(datos_empleado[0].cP_Empresa)
    pais_empresa2.setText("ESPAÑA")
    nombre_empleado.setText(datos_empleado[0].nombre);
    apellido1_empleado.setText(datos_empleado[0].apellido1);
    apellido2_empleado.setText(datos_empleado[0].apellido2);
    //dni_empleado.setText(datos_empleado[0].nif);
    //nac_empleado.setText(datos_empleado[0].fechaNac);
    nivel_empleado.setText(datos_empleado[0].nivel_Formativo);
    nacionalidad_empleado.setText("ESPAÑA");
    municipio_empleado.setText(datos_empleado[0].municipio);
    pais_empleado.setText("ESPAÑA");
    
    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "Sepe_" + datos_empleado[0].nombre + "_" + datos_empleado[0].apellido1 + ".pdf", "application/pdf");


}