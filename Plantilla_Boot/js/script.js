function getPaisxRegion(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/region/europe",
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
            //'Authorization':'Bearer dnfkasjdflñasjfdasnlewjoidasjñldfjjadkl'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<tr>";
            /*
            console.log(data.data[0].id);
            console.log(JSON.stringify(data));
            */
           data.forEach(element => {
               //document.getElementById("resultados").innerHTML=document.getElementById("resultados").textContent + element.name
               text = text + "</tr>" + "<td>" + element.id + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.capital + "</td>" + "<td>" + element.region + "</td>";
            });
           console.log(JSON.stringify(data));//retorna todo el paquete por consola
           console.log(JSON.stringify(data[0]));//retorna los valores del registro 0
           console.log(JSON.stringify(data[0].name));//retorna el nombre del registro 0
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}