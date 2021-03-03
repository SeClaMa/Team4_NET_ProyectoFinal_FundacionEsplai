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




function getAllTrabajadores() {

    $.ajax({
        url: "https://localhost:44365/api/Trabajadores/all",
        method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            alert("Lista de Trabajadores");
            //console.log(JSON.parse(JSON.stringify(data)));         
            text1 = JSON.parse(JSON.stringify(data));
            trabjEach();
            /*text + "</tr> <td>" + element.idTrabajador + "</td>" + "<td>" + element.nombre + " " + element.apellido1 + " " + element.apellido2 + " </td>" + "<td> " + element.grupo + "</td>" + "<td>" + element.cuerpo + "</td>"; */

            /*document.getElementById("results").innerHTML = text + "</td></table>";*/
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function trabjEach() {
    let result1 = "<tr>"
    alert('Boton Presionado');
    text1.forEach(element => {
        result1 = result1 + "<td>" + element.id + "</td>" + "<td>" + element.nombre + " " + element.apellido1 + " " + element.apellido2 + " </td></tr>";
    });
    document.getElementById("results").innerHTML = result1 + "</td></table>";
}

window.addEventListener('load', ajaxLogin('https://localhost:44365/api/Token', 'POST', correo, pass));

function buena() {
    console.log(localStorage.getItem('token'));
    $(document).ready(function () {
        $("#resultados2").kendoGrid({
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
                title: "Id"
            },
            {
                field: "apellido1",
                title: "Trabajador/a"
            },
            {
                field: "tp",
                title: "TP"
            },
            {
                field: "tipoEmpleado",
                title: "Tipo Empleado/a"
            },
            {
                field: "grupo",
                title: "Grupo"
            },
            {
                field: "cuerpo",
                title: "Cuerpo"
            },
            {
                field: "categoria",
                title: "Categoria"
            }
            ]
        });
    });
}
