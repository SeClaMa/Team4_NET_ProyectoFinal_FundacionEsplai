// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


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
window.addEventListener('load', ajaxLogin('https://localhost:44365/api/Token', 'POST', correo, pass));

function carga() {
    TrabajadoresCompleto();
    Cuerpos();
}

function TrabajadoresCompleto() {
    console.log(localStorage.getItem('token'));
    $(document).ready(function () {
        $("#resultados2").kendoGrid({
            toolbar: ["excel","pdf"],
            excel: {
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
                pageSize: 20
            },
            height: 550,
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
                width: "170px"
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
                width: "130px"
            },
            {
                field: "",
               // template: "<a href='' onclick=\"generar_pdf(#: id #);\"  class='boton_pdf'><i class='bi k-i-file-pdf'></i > PDF</a>",
                    template: "<a href=\"javascript:generar_pdf(#: clave #);\" class='boton_pdf'><i class='far fa-file-pdf'></i>PDF</a>",
                width: "70px"
            }
            ]
        });
    });
}

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

function pintar_pdf(datos_empleado) {
    var doc = new jsPDF();

    doc.text(20, 20, datos_empleado[0].nombre);
    doc.addPage();
    doc.text(20, 20, 'Esto es la pagina dós, Bien?');
    doc.save('Prueba.pdf');
    
}


function FiltroCuerpo(nom) {

    $("#resultados2").empty();
    console.log(localStorage.getItem('token'));
    $(document).ready(function () {
        $("#resultados2").kendoGrid({
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
                            empresa: { type: "string" }
                        }
                    }
                },
                pageSize: 20
            },
            height: 550,
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
                width: "80px"
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
                title: "Tipo Empleado/a"
            },
            {
                field: "grupo",
                title: "Grupo",
                template: "<div class='fondoRedondo'>#: grupo #</div>",
                width: "70px"
            },
            {
                field: "cuerpo",
                title: "Cuerpo"
            },
            {
                field: "categoria",
                title: "Categoria"
            },
            {
                field: "",
                template: "<a href='generar_pdf(#: id #);' class='boton_pdf'><i class='bi k-i-file-pdf'></i > PDF</a>",
                width: "70px"
            }
            ]
        });
    });
}




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
    console.log(stored_datas);
    //var x = localStorage.getItem("datas");


    stored_datas.forEach((i) => {
        //var html = document.getElementById("cuerpos").innerHTML;
        // document.getElementById("cuerpos").innerHTML += "<br>" + i.descrip;
        document.getElementById("cuerpos").innerHTML += "<button class='btnn' onclick=\"FiltroCuerpo('" + i.cuerpo + "');\"><i class='bi bi-building'></i >" + i.descrip + "</button>";
    })
}


