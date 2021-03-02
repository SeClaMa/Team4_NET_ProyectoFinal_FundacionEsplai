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
            console.log(token);
        });
}


addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    var ob = document.getElementById('button1');
    ob.addEventListener('click', presionBoton, false);
}

function presionBoton() {  
    ajaxLogin('https://localhost:44365/api/Token', 'POST', correo, pass);
    getAllTrabajadores();
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
            console.log(text1);
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



